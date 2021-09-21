// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { Formik, useFormik, FormikProvider, useField } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import * as csv from 'csvtojson'

import {
  Page,
  Grid,
  Card,
  Text,
  Header,
  List,
  Dimmer,
  Table,
  Button,
  Icon,
  Avatar,
  Form
} from "tabler-react";

import DepositWithdrawTokensForm from "../../components/DepositWithdrawTokensForm";
import InputTokenAmountForm from "../../components/InputTokenAmountForm";


import SiteWrapper from "../../SiteWrapper.react";
import TokenBalanceCard from "../../components/TokenBalanceCard";
import TxCard from "../../components/TxCard";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import DatePicker from 'react-date-picker'

import {
  useGasPrice,
  useContractLoader,
  useInterval,
} from "../../hooks";
import { GetAccountBalances, Transactor } from "../../utils";
import { Web3Context, WalletContext } from '../../App.react';


function VestingPaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [totalAmount, setTotalAmount] = useState(0);
  const [recipientDetails, setRecipientDetails] = useState(null);

  const validateRules = values => {
    const errors = {};

    // AMOUNT
    if (!values.amount) {
      errors.amount = 'Required';
    } else if (false) {
      // User has enough tokens
    
    // RECIPIENT
    }

    if (!values.recipient) {
      errors.recipient = 'Required';
    } else if (false) {
      // Valid address
    }
    
    // DATERANGE
    if (!values.dateRange) {
      errors.dateRange = 'Required';
    
    // CLIFFDATE
    } else if (!values.cliffDate) {
      errors.cliffDate = 'Required';
    } else if (false) {
      // Cliff date between date range
    }

    return errors;
  };
  
  // async function handleApproval(amount, cb) {
  //   if(web3Context.ready) {
  //     const tx = Transactor(web3Context.provider, cb, gasPrice);
  //     // let weiAmount = ethers.utils.parseUnits(amount.toString(), item.coreTokenDecimals);
  //     // const allowanceAmount = await contracts[item.coreTokenSymbol]["allowance"](...[web3Context.address, item.pTokenAddress]);

  //     tx(contracts[item.coreTokenSymbol]["approve"](item.pTokenAddress, ethers.utils.parseUnits('1000000',item.coreTokenDecimals)), cb);
        
  //   }
  // }

  // async function handlePayment(amount, cb) {
  //   if(web3Context.ready) {
  //     const tx = Transactor(web3Context.provider, cb, gasPrice);
  //     let weiAmount = ethers.utils.parseUnits(amount.toString(), item.coreTokenDecimals);
  //     const allowanceAmount = await contracts[item.coreTokenSymbol]["allowance"](...[web3Context.address, item.pTokenAddress]);

  //     if(weiAmount.lte(allowanceAmount)) {
  //       tx(contracts[item.pTokenSymbol]["deposit"](weiAmount), cb);
  //     } 
  //   }
  // }

  const title = `📈 Vesting Agreement`

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
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            <Link to="/payments">
              <span>{`<< Back`}</span>
            </Link>
            <Card className="mb-1 mt-2"
              title="Send"
            >
              <Card.Body className="p-1">
                <Formik
                  initialValues={{
                    tokenAddress: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
                    amount: 0,
                    recipient: null,
                    dateRange: null,
                    cliffDate: null,

                    tokenSymbol: 'USDC',
                    totalAmount: 0,

                  }}
                  validate={ validateRules }
                  onSubmit={async (values) => {
                    console.log(values)
                    // handlePayment
                  }}
                >
                  { props => {
                    console.log(props.errors)
                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <Form.Group className='m-3'>
                          <Form.Select
                            name="tokenAddress"
                            label="TOKEN"
                            value={props.values.tokenAddress}
                            error={props.errors.tokenAddress}
                            onChange={props.handleChange}
                          >
                            <option value="0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48">
                              USDC
                            </option>
                            <option value="0x6b175474e89094c44da98b954eedeac495271d0f">
                              DAI
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
                        <Form.Group className='m-3'>
                          <Form.Input
                            label='RECIPIENT'
                            name='recipient'
                            value={props.values.recipient}
                            error={props.errors.recipient }
                            className='mb-3'
                            placeholder={`0xABCDFA1DC112917c781942Cc01c68521c415e`}
                            onChange={props.handleChange}
                          />
                        </Form.Group>
                        <Form.Group label='VESTING START & END DATES' className='m-3'>
                          <DateRangePicker
                            onChange={props.handleChange}
                            value={props.values.dateRange}
                          />
                          {props.errors.dateRange && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.dateRange}</span>}
                        </Form.Group>
                        <Form.Group label='CLIFF DATE' className='m-3'>
                          <DatePicker
                            onChange={props.handleChange}
                            value={props.values.cliffDate}
                          />
                          {props.errors.cliffDate && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.cliffDate}</span>}
                        </Form.Group>
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

export default VestingPaymentPage;