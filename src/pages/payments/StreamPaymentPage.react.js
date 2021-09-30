// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers, Contract } from "ethers";
import * as EthDater from 'ethereum-block-by-date'
import { Formik } from 'formik';
import Confetti from 'react-confetti'
// import * as SuperfluidSDK from "@superfluid-finance/js-sdk"


import SiteWrapper from "../../SiteWrapper.react";
import Page from '../../components/tablerReactAlt/src/components/Page'
import {
  Grid,
  Card,
  Text,
  Dimmer,
  Button,
  Form
} from "tabler-react";
import SelectToken from "../../components/SelectToken";
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import {
  useGasPrice,
  useContractLoader,
} from "../../hooks";
import {
  Transactor,
  getTokenIconUriFromAddress,
  getTokenDataFromAddress,
  getAddress,
  isAddress } from "../../utils";
import { Web3Context, WalletContext } from '../../App.react';
import { default as paymagicData } from "../../data";


function StreamingPaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({title: '', color: 'primary'})
  const [status, setStatus] = useState(1);
    // 0 - error
    // 1 - start | 2 - notValid |  3 - isValid
    // 4 - approvalTx | 5 - isApproved | 6 - upgradeTx
    // 7 - isUpgraded | 8 - flowTx | 9 - complete

  const [parsedData, setParsedData] = useState({
    token: {
      symbol: '',
      decimals: 0,
      address: '',
      contract: ''
    },

    tokenAmountBN: ethers.BigNumber.from(0),
    recipient: '',

    currentDate: new Date (),
    endDate: new Date (),

    ctx: ethers.utils.formatBytes32String("0x"),

    confirmationDetails: ''
  })

  useEffect(() => {
    switch(status) {
      case 0:
        setAlert({
          title: 'An error has occurred. Please refresh the page and try again.',
          color: 'danger'
        })
        break;
      case 9:
        setAlert({
          title: 'Your transaction is complete! Thanks for using Paymagic!',
          color: 'success'
        })
        break;
      default:
    }
  }, [status]);

  async function parseFormData(values, errors) {
    // console.log('---Parse Form Data---')
    // console.log(`values ${JSON.stringify(values)}`)
    // console.log(`errors ${JSON.stringify(errors)}`)
    // console.log(`old parsed data ${JSON.stringify(parsedData)}`)

    let _parsedData = parsedData
    if(web3Context.ready) {
      // TOKEN ADDRESS
      let _validTokenData = false
      let _token = parsedData.token
      if(_.isUndefined(errors.customTokenAddress) && isAddress(values.customTokenAddress)) {
        try {
          _token.contract = new Contract(
            getAddress(values.customTokenAddress),
            paymagicData.contracts['ERC20']['abi'],
            web3Context.provider.getSigner()
          );
          _token.address = values.customTokenAddress
          _token.symbol = await _token.contract.symbol()
          _token.decimals = await _token.contract.decimals()
          _validTokenData = true
        }
        catch(err) {
          console.error(err)
          setStatus(2)
        }
      }

      // TOKEN AMOUNT
      try {
        _parsedData.tokenAmountBN = ethers.utils.parseUnits(
          _.toString(values.tokenAmount),
          _token.decimal
        )
      } catch(err) {
        console.error(err)
        _parsedData.tokenAmountBN = ethers.BigNumber.from(0)
      }

      // RECIPIENT
      _parsedData.recipient = getAddress(values.recipient)

      // ENDDATE / FLOWRATE
      // Convert to tokens/second
      // TotalAmount adjusted for decimals / (endDate - startDate)
      let flowDuration = _.round((values.endDate.getTime() - parsedData.currentDate.getTime()) / 1000)
      _parsedData.flowRate = _parsedData.tokenAmountBN.div(flowDuration)


      // _parsedData.confirmationDetails = formatConfirmationDetails(_parsedData)


      // console.log(`new parsed data ${JSON.stsringify(_parsedData)}`)
      await setParsedData(_parsedData)

      // Set validity status
      if(_validTokenData) {
        setStatus(3) 
      } else {
        setStatus(2) 
      }
    }
  }

  function formatConfirmationDetails(_parsedData) {
    let _details = `Sending ${numeral(_parsedData.tokenAmountBN.toNumber()).format('0,0.0000')} ${_parsedData.token ? _parsedData.token.symbol : ''}\n`
    _details = 

    _details = _details + `-----\n` +
      `Sending ${numeral(_parsedData.tokenAmountBN.toNumber()).format('0,0.0000')} ${_parsedData.token ? _parsedData.token.symbol : ''} per month\n` +
      `Sending ${numeral(_parsedData.tokenAmountBN.toNumber()).format('0,0.0000')} ${_parsedData.token ? _parsedData.token.symbol : ''} per week\n`

    // XXX USDC per month
    // XXX USDC per year



    // let tempDetails = _addressArray.map((a, i) => {
    //   let tempBN = _amountArray[i] ? _amountArray[i] : ethers.BigNumber.from(0)
    //   let tempNumber = ethers.utils.formatUnits(
    //     tempBN, parsedData.token.decimals
    //   )
    //   return `${_addressArray[i]}  ${numeral(tempNumber).format('0,0.0000')} ${_tokenSymbol}`
    // })

    // return `${_.join(tempDetails,`\n`)}\n-----\nTOTAL ${numeral(_totalAmount).format('0,0.0000')} ${_tokenSymbol}\n`
    return _details
  }

  const validateRules = async values => {
    const errors = {};

    // CUSTOM TOKEN ADDRESS
    if (!values.customTokenAddress) {
      errors.customTokenAddress = 'Required'
    } else if ( !isAddress(values.customTokenAddress) ){
      errors.customTokenAddress = 'Unable to parse the token address. Please try again.'
    }

    // TOKEN AMOUNT
    if (!values.tokenAmount) {
      errors.tokenAmount = 'Required'
    } else if (values.tokenAmount <= 0 || !_.isNumber(values.tokenAmount)) {
      errors.tokenAmount = 'Unable to parse amount. Please try again.';
    }

    if (parsedData.token.contract) {
      // VALIDATE TOKEN BALANCE
      let tokenBalanceBN = await parsedData.token.contract["balanceOf"](...[web3Context.address]);
      if (tokenBalanceBN.lt(
          ethers.utils.parseUnits(
            _.toString(values.tokenAmount),
            parsedData.token.decimals
          )
        )
      ) {
        errors.tokenAmount = 'Your token balance is too low';
      }  
    }

    // RECIPIENT
    if (!values.recipient) {
      errors.recipient = 'Required'
    } else if ( !isAddress(values.recipient) ){
      errors.recipient = 'Unable to parse the address. Please try again.'
    }

    // DATE
    if (!values.endDate) {
      errors.endDate = 'Required'
    } else if (values.endDate <= parsedData.currentDate) {
      errors.cliffDate = 'End date must be after today.'
    } 

    return errors;
  };

  async function handleApproval(cb) {
    const tx = Transactor(web3Context.provider, cb, gasPrice);
    tx(parsedData.token.contract['approve'](
      paymagicData.contracts['FUSDCX'].address,
      parsedData.tokenAmountBN
    ));
  }

  async function handleUpgrade(cb) {
    const tx = Transactor(web3Context.provider, cb, gasPrice);
    tx(contracts['FUSDCX']["upgrade"](parsedData.tokenAmountBN));
  }
  
  async function handleFlow(cb) {
    const tx = Transactor(web3Context.provider, cb, gasPrice);
    tx(contracts['CFAV1']["createFlow"](
      paymagicData.contracts['FUSDCX'],
      parsedData.recipient,
      parsedData.flowRate,
      parsedData.ctx
    ));
  }

  console.log(`---Info---`)
  console.log(`Status ${status}`)
  console.log(parsedData)

  return (
    <SiteWrapper>
      <Page.Content title={`Stream Payment`} headerClassName="d-flex justify-content-center" web3ContextReady={web3Context.ready} walletContextLoading={walletContext.loading}>
        { status === 9 ? <Confetti/> : <span/> }
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            <Link to="/payments">
              <span>{`<< Back`}</span>
            </Link>
            <Card 
              className="mb-1 mt-1"
              title="Create new Streaming Payment"
              alert={alert.title}
              alertColor={alert.color}
            >
              <Card.Body className="p-1">
                <Formik
                  initialValues={{
                    customTokenAddress: '0x2eb320e2100a043401e3b3b132d4134f235a6a04',
                    tokenAmount: 10,
                    recipient: '0x869eC00FA1DC112917c781942Cc01c68521c415e',
                    endDate: new Date(
                      parsedData.currentDate.getFullYear()+1,
                      parsedData.currentDate.getMonth(),
                      parsedData.currentDate.getDate()
                    )
                  }}
                  validate={ validateRules }
                  onSubmit={async (values, actions) => {
                    setLoading(true);

                    const afterMine = async (txStatus) => {
                      console.log(`Completed tx`)
                      console.log(txStatus)
                      console.log(status)
                      if(txStatus.code && txStatus.code === 4001) {
                        console.error(txStatus)
                        setStatus(3);
                      } else if(txStatus.code) {
                        setStatus(0);
                      } else if(status === 4 || status === 3) {
                        setStatus(5);
                      } else if(status === 6 || status === 5) {
                        setStatus(7);
                      } else if(status === 8 || status === 7) {
                        setStatus(9);
                      }
                      setLoading(false);
                    }

                    if(status === 3) {
                      // ApproveTx
                      setStatus(4);
                      handleApproval(afterMine)
                    } else if(status === 5) {
                      // UpgradeTx
                      setStatus(6);
                      handleUpgrade(afterMine)
                    } else if(status === 7) {
                      // FlowTx
                      setStatus(8);
                      handleFlow(afterMine)
                    }
                  }}
                >
                  { props => {

                    useEffect(() => {
                      async function run() {
                        await parseFormData(props.values, props.errors)
                      }
                      run()
                    }, [props.values]);

                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <Form.Group className='m-3'>
                          <Form.Input
                            label='TOKEN ADDRESS'
                            name='customTokenAddress'
                            value={props.values.customTokenAddress}
                            error={props.errors.customTokenAddress }
                            className='mb-3'
                            disabled={status >= 4}
                            placeholder={`0xa0b8...eb48`}
                            onChange={props.handleChange}
                          />
                        </Form.Group>
                        <Form.Group label='AMOUNT' className='m-3'>
                          <NumberFormat
                            placeholder="0.00"
                            allowNegative={false}
                            isNumericString={true}
                            thousandSeparator={true}
                            value={props.values.tokenAmount}
                            disabled={status >= 4}
                            className={"form-control"}
                            onValueChange={val => props.setFieldValue('tokenAmount',val.value)}
                          />
                          {props.errors.tokenAmount && <span className="invalid-feedback">{props.errors.tokenAmount}</span>}
                        </Form.Group>
                        <Form.Group className='m-3'>
                          <Form.Input
                            label='RECIPIENT'
                            name='recipient'
                            value={props.values.recipient}
                            error={props.errors.recipient }
                            disabled={status >= 4}
                            className='mb-3'
                            placeholder={`0xe2B5...ab24`}
                            onChange={props.handleChange}
                          />
                        </Form.Group>
                        <Form.Group label='END DATE' className='m-3'>
                          <DatePicker 
                            selected={props.values.endDate}
                            dateFormat="MMMM d, yyyy"
                            className="form-control"
                            disabled={status >= 4}
                            name="endDate"
                            onChange={val => props.setFieldValue('endDate',val)}
                          />
                          {props.errors.endDate && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.endDate}</span>}
                        </Form.Group>
                        <Form.Group label="CONFIRMATION DETAILS" className='m-3'>
                          <Form.StaticText className="whitespace-preline">
                            { parsedData.confirmationDetails }
                          </Form.StaticText>
                        </Form.Group>
                        <Form.Group className='m-3'>
                          { 
                            (status <= 4) ? (
                                <Button
                                  color="primary"
                                  type="submit"
                                  value="Submit"
                                  className="color "
                                  icon={'toggle-left'}
                                  disabled={status < 3 || !_.isEmpty(props.errors)}
                                  loading={loading}
                                >
                                  Approve
                                </Button> ) :
                              (status <= 6) ? (
                                <Button
                                  color="primary"
                                  type="submit"
                                  value="Submit"
                                  className="color "
                                  icon={'upload'}
                                  disabled={status !== 5}
                                  loading={loading}
                                >
                                  Prepare Stream
                                </Button> ) : (
                                <Button
                                  color="primary"
                                  type="submit"
                                  value="Submit"
                                  className="color "
                                  icon={'send'}
                                  disabled={status !== 7}
                                  loading={loading}
                                >
                                  Start Stream
                                </Button>
                              )
                          }
                        </Form.Group>
                      </Form>
                    )
                  }
                }
                </Formik>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default StreamingPaymentPage;