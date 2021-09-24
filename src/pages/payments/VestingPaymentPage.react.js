// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers, Contract } from "ethers";
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

  const [tokenData, setTokenData] = useState({
    symbol: '',
    decimals: 0,
    address: '',
    contract: ''
  })
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
    startDateBlock: 0,
    cliffDateBlock: 0,
    endDateBlock: 0
  })

  async function parseFormData(customTokenAddress, recipients) {
    if(web3Context.ready && !_.isUndefined(contracts)) {

      // Update token data
      let _valueTokenData = false
      try {
        if(customTokenAddress && customTokenAddress !=='') {
          const tokenContract = new Contract(
            customTokenAddress,
            paymagicData.contracts['ERC20']['abi'],
            web3Context.provider.getSigner()
          );
          let _symbol = await tokenContract.symbol()
          let _decimals = await tokenContract.decimals()

          setTokenData({
            symbol: _symbol,
            decimals: _decimals.toNumber(),
            address: customTokenAddress,
            contract: tokenContract
          })
          _valueTokenData = true
        }
      }
      catch(err) {
        console.error(err)
        setStatus(2)
      }

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
  //       tempBN, tokenData.decimals
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
    }

    // Validate Token Balance
    if(tokenData.contract) {
      let tokenBalanceBN = await tokenData.contract["balanceOf"](...[web3Context.address]);

      if (values.tokenAmount <= 0 && !_.isNumber(values.tokenAmount)) {
        errors.tokenAmount = 'Unable to parse amount. Please try again.';
      }

      if (tokenBalanceBN.lt(
          ethers.utils.parseUnits(
            _.toString(values.tokenAmount),
            tokenData.decimals
          )
        )
      ) {
        errors.tokenAmount = 'Your token balance is too low';
      }    
    }

    // RECIPIENTS
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
      tx(tokenData.contract["approve"](paymagicData.disperse.address, ethers.utils.parseUnits(_.toString(parsedData.totalAmount), tokenData.decimals)), cb);
    }
  }
  
  async function handleSend(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts['disperse']["disperseTokenSimple"](tokenData.address, parsedData.addressArray, parsedData.amountArray), cb);
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
                    tokenAmount: 0,
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
                        {await parseFormData(props.values.customTokenAddress, props.values.recipients)}
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
                            isNumericString={true}
                            thousandSeparator={true}
                            value={props.values.tokenAmount}
                            disabled={status >= 4}
                            className={"form-control"}
                            onValueChange={props.handleChange}
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
                            placeholder={`0xABCDFA1DC112917c781942Cc01c68521c415e`}
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
                            onChange={props.handleChange}
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
                            onChange={props.handleChange}
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
                            onChange={props.handleChange}
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
                                Send tokens
                              </Button> ) : (
                              <Button
                                color="primary"
                                type="submit"
                                value="Submit"
                                className="color "
                                icon={'toggle-left'}
                                disabled={!(status === 3)}
                                loading={loading}
                              >
                                Initiate
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