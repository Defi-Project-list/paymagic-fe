// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers, Contract } from "ethers";
import * as EthDater from 'ethereum-block-by-date'
import { Formik } from 'formik';
import Confetti from 'react-confetti'


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


function VestingPaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
    // 1 - start | 2 - notValid |  3 - isValid
    // 4 - deployTx | 5 - isDeployed | 6 - sendTx
    // 7 - complete

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
    startDate: {},
    cliffDate: {},
    endDate: {},

    confirmationDetails: ''
  })

  async function parseFormData(values, errors) {
    // console.log('---Parse Form Data---')
    // console.log(`values ${JSON.stringify(values)}`)
    // console.log(`errors ${JSON.stringify(errors)}`)
    // console.log(`old parsed data ${JSON.stringify(parsedData)}`)

    let _parsedData = parsedData
    if(web3Context.ready) {
      // TOKEN ADDRESS
      let _valueTokenData = false
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
          _valueTokenData = true
        }
        catch(err) {
          console.error(err)
          setStatus(2)
        }
      }

      // TOKEN AMOUNT
      try {
        _parsedData.tokenAmountBN = ethers.BigNumber.from(values.tokenAmount)
      } catch(err) {
        console.error(err)
        _parsedData.tokenAmountBN = ethers.BigNumber.from(0)
      }

      // RECIPIENT
      _parsedData.recipient = getAddress(values.recipient)

      // DATES
      // Convert to block numbers
      const dater = new EthDater(
        web3Context.provider
      )
      _parsedData.startDate = await dater.getDate(values.startDate)
      _parsedData.cliffDate = await dater.getDate(values.cliffDate)
      _parsedData.endDate = await dater.getDate(values.endDate)


      // confirmationDetails

      console.log(`new parsed data ${JSON.stringify(_parsedData)}`)
      await setParsedData(_parsedData)

      // Set validity status
      if(_valueTokenData) {
        setStatus(3) 
      } else {
        setStatus(2) 
      }
    }
  }

  // function formatConfirmationDetails(_addressArray, _amountArray, _totalAmount, _tokenSymbol) {
  //   let tempDetails = _addressArray.map((a, i) => {
  //     let tempBN = _amountArray[i] ? _amountArray[i] : ethers.BigNumber.from(0)
  //     let tempNumber = ethers.utils.formatUnits(
  //       tempBN, parsedData.token.decimals
  //     )
  //     return `${_addressArray[i]}  ${numeral(tempNumber).format('0,0.0000')} ${_tokenSymbol}`
  //   })

  //   return `${_.join(tempDetails,`\n`)}\n-----\nTOTAL ${numeral(_totalAmount).format('0,0.0000')} ${_tokenSymbol}\n`
  // }

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

    // DATES
    if (!values.startDate) {
      errors.startDate = 'Required'
    } else if(!values.cliffDate) {
      errors.cliffDate = 'Required'
    } else if(!values.endDate) {
      errors.endDate = 'Required'
    } else {
      if (values.startDate > values.cliffDate) {
        errors.cliffDate = 'Cliff date must be on or after start date.'
      } else if(values.startDate >= values.endDate) {
        errors.endDate = 'End date must be after start date.'
      } else if(values.cliffDate > values.endDate) {
        errors.endDate = 'Cliff date must be before or on end date.'
      }
    }

    return errors;
  };

  async function handleDeploy(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(parsedData.token.contract["approve"](paymagicData.disperse.address, ethers.utils.parseUnits(_.toString(parsedData.totalAmount), parsedData.token.decimals)), cb);
    }
  }
  
  async function handleSend(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts['disperse']["disperseTokenSimple"](parsedData.token.address, parsedData.addressArray, parsedData.amountArray), cb);
    }
  }


  return (
    <SiteWrapper>
      <Page.Content title={`Vesting Agreement`} headerClassName="d-flex justify-content-center" web3ContextReady={web3Context.ready} walletContextLoading={walletContext.loading}>
        { status === 7 ? <Confetti/> : <span/> }
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            <Link to="/payments">
              <span>{`<< Back`}</span>
            </Link>
            <Card className="mb-1 mt-1"
              title="Create new Vesting Agreement"
            >
              <Card.Body className="p-1">
                <Formik
                  initialValues={{
                    customTokenAddress: '',
                    tokenAmount: 10,
                    recipient: '',
                    startDate: parsedData.currentDate,
                    endDate: new Date(
                      parsedData.currentDate.getFullYear()+4,
                      parsedData.currentDate.getMonth(),
                      parsedData.currentDate.getDate()
                    ),
                    cliffDate: new Date(
                      parsedData.currentDate.getFullYear()+1,
                      parsedData.currentDate.getMonth(),
                      parsedData.currentDate.getDate()
                    )
                  }}
                  validate={ validateRules }
                  onSubmit={async (values, actions) => {
                    setLoading(true);

                    const afterMine = async (txStatus) => {
                      if(txStatus.code && txStatus.code === 4001) {
                        setStatus(3);
                      } else if(status === 6 || status === 5) {
                        setStatus(7);
                      } else if(status === 4 || status === 3) {
                        setStatus(5);
                      }
                      setLoading(false);
                    }

                    if(status === 3) {
                      // ApprovalTx
                      setStatus(4);
                      handleDeploy(afterMine)
                    } else {
                      // SubmitTx
                      setStatus(6);
                      handleSend(afterMine)
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
                        <Form.Group label='START DATE' className='m-3'>
                          <DatePicker 
                            selected={props.values.startDate}
                            dateFormat="MMMM d, yyyy"
                            className="form-control"
                            disabled={status >= 4}
                            name="startDate"
                            onChange={val => props.setFieldValue('startDate',val)}
                          />
                          {props.errors.startDate && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.startDate}</span>}
                        </Form.Group>
                        <Form.Group label='CLIFF DATE' className='m-3'>
                          <DatePicker 
                            selected={props.values.cliffDate}
                            dateFormat="MMMM d, yyyy"
                            className="form-control"
                            disabled={status >= 4}
                            name="cliffDate"
                            onChange={val => props.setFieldValue('cliffDate',val)}
                          />
                          {props.errors.cliffDate && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.cliffDate}</span>}
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
                            (status >= 5) ? (
                              <Button
                                color="primary"
                                type="submit"
                                value="Submit"
                                className="color "
                                icon={'send'}
                                disabled={status >= 7}
                                loading={loading}
                              >
                                Fund with tokens
                              </Button> ) : (
                              <Button
                                color="primary"
                                type="submit"
                                value="Submit"
                                className="color "
                                icon={'toggle-left'}
                                disabled={status < 3 || !_.isEmpty(props.errors)}
                                loading={loading}
                              >
                                Initiate Agreement
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

export default VestingPaymentPage;