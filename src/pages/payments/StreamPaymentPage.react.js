// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers } from "ethers";
import { Formik } from 'formik';
import * as csv from 'csvtojson'
import Confetti from 'react-confetti'

import {
  Page,
  Grid,
  Card,
  Text,
  // Header,
  // List,
  Dimmer,
  // Table,
  Button,
  // Icon,
  Progress,
  Form
} from "tabler-react";
import NumberFormat from 'react-number-format';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import DatePicker from 'react-date-picker'

import SiteWrapper from "../../SiteWrapper.react";

import {
  useGasPrice,
  useContractLoader,
} from "../../hooks";
import { Transactor, sleep } from "../../utils";
import { Web3Context, WalletContext } from '../../App.react';
import { default as paymagicData } from "../../data";


function StreamPaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
    // 1 - start | 2 - notValid |  3 - isValid
    // 4 - approveTx | 5 - isApproved | 6 - submitTx
    // 7 - complete
  const [token, setToken] = useState('usdc');
  const [addressArray, setAddressArray] = useState([]);
  const [amountArray, setAmountArray] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // useEffect(() => {
  //   async function fetchTokenInfo() {
  //     // Update token balances & allowance
  //     if(web3Context.ready && !_.isUndefined(contracts)) {
  //       try {
  //         let tokenBalanceBN = await contracts[token]["balanceOf"](...[web3Context.address]);
  //         let _tokenBalance = tokenBalanceBN.div(10**paymagicData.contracts[token]['decimals'])

  //         let tokenAllowanceBN = await contracts[token]["allowance"](...[web3Context.address, paymagicData.contracts.disperse.address]);
  //         let _tokenAllowance = tokenAllowanceBN.div(10**paymagicData.contracts[token]['decimals'])

  //         setTokenBalance(_tokenBalance)
  //         setTokenAllowance(_tokenAllowance)
  //       }
  //       catch(err) {
  //         console.error(err)
  //       }

  //     }
  //   }
  //   fetchTokenInfo();
  // }, [token, loading]);


  const validateRules = async values => {
    const errors = {};

    // RECIPIENT
    // let validAddress = false
    // if(!!values.recipient) {
    //   try {
    //     validAddress = ethers.utils.isAddress(
    //       ethers.utils.getAddress(values.recipient)
    //     )
    //   } catch {
    //     validAddress = false
    //   }
    // }
    // if (!values.recipient) {
    //   errors.recipient = 'Required';
    // } else if (!validAddress) {
    //   errors.recipient = 'Invalid Address. Please try again.';
    // }

    // TOKEN
    if (!values.token) {
      errors.token = 'Required'
    }

    // AMOUNT


    // END DATE


    return errors;
  };

  function formatDetails(amount, endDate) {
    const diffDays = Math.ceil(Math.abs(new Date() - endDate) / (1000 * 60 * 60 * 24));
    console.log(endDate)
    console.log(diffDays)
    let amountPerDay = amount ? amount/diffDays : 0
    const symbol = paymagicData.contracts[token]['symbol']

    return `${numeral(amountPerDay).format('0,0.0000')} ${symbol} per day\n` +
      `${numeral(amountPerDay*7).format('0,0.0000')} ${symbol} per week\n` +
      `${numeral(amountPerDay*30).format('0,0.0000')} ${symbol} per month\n` +
      `${numeral(amountPerDay*365).format('0,0.0000')} ${symbol} per year\n`
  }

  async function handleApproval(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts[token]["approve"](paymagicData.disperse.address, ethers.utils.parseUnits(_.toString(totalAmount), paymagicData.contracts[token]['decimals'])), cb);
    }
  }
  
  async function handleSubmit(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts['disperse']["disperseTokenSimple"](contracts[token]['address'], addressArray, amountArray), cb);
    }
  }

  const title = `🚰 Stream Tokens`

  if(!web3Context.ready)
    return (
      <SiteWrapper>
        <Page.Content title={title} headerClassName="d-flex justify-content-center">
          <Card><Card.Body><Text className="text-center font-italic">Connect Wallet Above<span role="img">👆</span></Text></Card.Body></Card>
        </Page.Content>
      </SiteWrapper>
    )

  if(walletContext.loading)
    return (
      <SiteWrapper>
        <Page.Content title={title} headerClassName="d-flex justify-content-center">
          <Dimmer active loader className="mt-8"/>
        </Page.Content>
      </SiteWrapper>
    )

  return (
    <SiteWrapper>
      <Page.Content title={title} headerClassName="d-flex justify-content-center">
        { status === 7 ? <Confetti/> : <span/> }
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            <Link to="/payments">
              <span>{`<< Back`}</span>
            </Link>
            <Card className="mb-1 mt-1"
              title="Create a token flow"
            >
              <Card.Body className="p-1">
                <Formik
                  initialValues={{
                    token: token,
                    amount: null,
                    recipient: null,
                    endDate: new Date().setFullYear(new Date().getFullYear() + 1)
                  }}
                  validate={ validateRules }
                  onSubmit={async (values, actions) => {
                    setLoading(true);

                    const afterMine = async (txStatus) => {
                      if(status === 6 || status === 5) {
                        setStatus(7);
                      } else if(status === 4 || status === 3) {
                        setStatus(5);
                      } else {
                        setStatus(3);
                      }
                      setLoading(false);
                    }

                    if(status === 3) {
                      // ApprovalTx
                      setStatus(4);
                      handleApproval(afterMine)
                    } else {
                      // SubmitTx
                      setStatus(6);
                      handleSubmit(afterMine)
                    }
                  }}
                >
                  { props => {
                    async function handleTokenChange(event) {
                      const _token = event.currentTarget.value
                      if(_token) {
                        setToken(_token)
                      }

                      props.setFieldValue('token', _token)
                    }

                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <Form.Group className='m-3'>
                          <Progress size="sm">
                            <Progress.Bar color='primary' width={30} />
                          </Progress>
                        </Form.Group>
                        <Form.Group className='m-3'>
                          <Form.Input
                            label='RECIPIENT'
                            name='recipient'
                            value={props.values.recipient}
                            error={props.errors.recipient }
                            placeholder={`0xABCDFA1DC112917c781942Cc01c68521c415e`}
                            onChange={props.handleChange}
                          />
                        </Form.Group>
                        <Form.Group className='m-3'>
                          <Form.Select
                            name="token"
                            label="TOKEN"
                            value={props.values.token}
                            error={props.errors.token}
                            onChange={props.handleChange}
                          >
                            <option value='usdc'>
                              USDC
                            </option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group label='AMOUNT' className='m-3'>
                          <NumberFormat
                            placeholder="0.00"
                            isNumericString={true}
                            thousandSeparator={true}
                            value={props.values.amount}
                            className={"form-control"}
                            onValueChange={val => props.setFieldValue('amount', val.floatValue)}
                          />
                          {props.errors.amount && <span className="invalid-feedback">{props.errors.amount}</span>}
                        </Form.Group>
                        <Form.Group label='END DATE' className='m-3'>
                          <DatePicker
                            value={props.values.endDate}
                            selected={props.values.endDate}
                            onChange={val => props.setFieldValue('endDate', val)}
                          />
                          {props.errors.endDate && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.endDate}</span>}
                        </Form.Group>
                        { 
                          true && (
                            <div>
                              <Form.Group label="CONFIRMATION DETAILS" className='m-3'>
                                <Form.StaticText className="whitespace-preline">
                                  { formatDetails(props.values.amount, props.values.endDate) }
                                </Form.StaticText>
                              </Form.Group>
                            </div>
                          )
                        }
                        <Form.Group className='m-3 mt-5'>
                          <Button
                            color="primary"
                            type="submit"
                            value="Submit"
                            className="color "
                            icon={'toggle-left'}
                            disabled={false}
                          >
                            Start
                          </Button>
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

export default StreamPaymentPage;