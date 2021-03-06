// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import { ethers, Contract } from "ethers";
import { Formik } from 'formik';
import Confetti from 'react-confetti'


import SiteWrapper from "../../SiteWrapper.react";
import Page from '../../components/tablerReactAlt/src/components/Page'
import {
  Grid,
  Card,
  Text,
  Button,
  Form,
  Progress
} from "tabler-react";
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import {
  useGasPrice,
  useContractLoader,
} from "../../hooks";
import {
  Transactor,
  getAddress,
  isAddress,
  isToken,
  getBlockExplorerLink } from "../../utils";
import { Web3Context, WalletContext } from '../../App.react';
import { default as paymagicData } from "../../data";


function VestingPaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({title: '', color: 'primary'})
  const [txData, setTxData] = useState({})
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
    startDate: 0,
    cliffDate: 0,
    endDate: 0,

    salt: ethers.utils.randomBytes(32),

    // confirmationDetails: ''
  })

  useEffect(() => {
    switch(status) {
      case 0:
        setAlert({
          info: (<p>An error has occurred. Please refresh the page and try again.</p>),
          color: 'danger'
        })
        break;
      case 7:
        setAlert({
          info: (<p>Your transaction is complete! {"\n"}<a href={getBlockExplorerLink(txData.hash,'transaction')} target="_blank">View on Etherscan</a>.</p>),
          color: 'success'
        })
        break;
      default:
    }
  }, [status]);

  async function parseFormData(values, errors, setFieldError) {
    // console.log('---Parse Form Data---')
    // console.log(`values ${JSON.stringify(values)}`)
    // console.log(`errors ${JSON.stringify(errors)}`)
    // console.log(`old parsed data ${JSON.stringify(parsedData)}`)

    let _parsedData = parsedData
    if(values.customTokenAddress && 
      isAddress(values.customTokenAddress) && 
        isToken(values.customTokenAddress)) {

      try {
        _parsedData.token.contract = new Contract(
          getAddress(values.customTokenAddress),
          paymagicData.contracts['ERC20']['abi'],
          web3Context.provider.getSigner()
        );

        _parsedData.token.address = getAddress(values.customTokenAddress)
        _parsedData.token.decimals = await _parsedData.token.contract.decimals()
        _parsedData.token.symbol = await _parsedData.token.contract.symbol()
      }
      catch(err) {
        console.error(err)
        _parsedData.token = {
          symbol: '',
          decimals: 0,
          address: '',
          contract: ''
        }
        setFieldError('customTokenAddress', 'Unable to find the token. Please try again.')
      }
    }

    // RECIPIENT
    _parsedData.recipient = values.recipient

    // DATES
    // Convert to Unix time in seconds
    _parsedData.startDate = ethers.BigNumber.from(_.round(values.startDate.getTime() / 1000))
    _parsedData.cliffDate = ethers.BigNumber.from(_.round((values.cliffDate.getTime() - values.startDate.getTime()) / 1000))
    _parsedData.endDate = ethers.BigNumber.from(_.round((values.endDate.getTime() - values.startDate.getTime()) / 1000))


    setParsedData(_parsedData)
  }

  const validateRules = async values => {
    const errors = {};

    // CUSTOM TOKEN ADDRESS
    if (!values.customTokenAddress) {
      errors.customTokenAddress = 'Required'
    } else if ( !isAddress(values.customTokenAddress) ){
      errors.customTokenAddress = 'Unable to read the token address. Please try again.'
    } else if ( !isToken(values.customTokenAddress) ){
      errors.customTokenAddress = 'Unable to find the token. Please try again.'
    }

    // Validate Token Balance
    if(parsedData.token.contract && parsedData.totalAmount) {
      let tokenBalanceBN = await parsedData.token.contract["balanceOf"](...[web3Context.address]);

      if (values.totalAmount <= 0 || !_.isFinite(values.totalAmount)) {
        errors.totalAmount = 'Unable to parse the text. Please try again.';
      } else if(tokenBalanceBN.lt(
          ethers.utils.parseUnits(
            _.toString(values.totalAmount),
            parsedData.token.decimals.toNumber()
          )
        )
      ) {
        errors.totalAmount = 'Your token balance is too low';
      }      
    }

    // RECIPIENT
    if (!values.recipient) {
      errors.recipient = 'Required'
    } else if ( !isAddress(values.recipient) ){
      errors.recipient = 'Unable to read the address. Please try again.'
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

  async function handleApproval(cb) {
    const tx = Transactor(web3Context.provider, cb, gasPrice);
    tx(parsedData.token.contract['approve'](
      paymagicData.contracts['TokenVestingFactory'].address,
      parsedData.tokenAmountBN
    ));
  }
  
  async function handleCreation(cb) {
    // console.log(`~~Sending tx~~`)
    // console.log(parsedData)

    const tx = Transactor(web3Context.provider, cb, gasPrice)
    tx(contracts['TokenVestingFactory']['deployVesting'](
      parsedData.recipient,             // address beneficiary,
      parsedData.startDate,             // uint256 start,
      parsedData.cliffDate,             // uint256 cliffDuration,
      parsedData.endDate,               // uint256 duration,
      false,                            // bool revocable,
      parsedData.tokenAmountBN,         // uint256 amount,
      parsedData.token.address,         // IERC20 token,
      parsedData.salt,                  // bytes32 salt,
      web3Context.address,              // address owner,
      web3Context.address               // address tokenHolder
    ));
  }

  // console.log(parsedData)
  // console.log(status)

  return (
    <SiteWrapper>
      <Page.Content title={`Vesting Agreement`} headerClassName="d-flex justify-content-center" web3ContextReady={web3Context.ready} walletContextLoading={walletContext.loading}>
        { status === 7 ? <Confetti/> : <span/> }
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            <Link to="/payments">
              <span>{`<< Back`}</span>
            </Link>
            <Card
              className="mb-1 mt-1"
              alert={alert.info}
              alertColor={alert.color}
              title={(
                <div>
                  <Card.Title>Create new Vesting Agreement</Card.Title>
                  <Text className="card-subtitle">Deploy a new vesting contract, based on the <a href='https://github.com/GimmerBot/zeppelin-solidity/blob/master/contracts/token/TokenVesting.sol' target='_blank'>OpenZeppelin Vesting contract</a>, and send tokens to a recipient that vest linearly after the cliff date.</Text>
                </div>
              )}
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

                    const afterMine = async (txStatus, txData) => {
                      console.log(txStatus)
                      console.log(txData)
                      setTxData(txData)
                      if(txStatus.code && txStatus.code === 4001) {
                        if(status >= 5) {
                          setStatus(5);
                        } else if(status <= 4) {
                          setStatus(3);
                        }
                      } else if(txStatus.code) {
                        console.error(txStatus)
                        setStatus(0);
                      } else if(status >= 5) {
                        // Set Status to Complete
                        setStatus(7);
                      } else if(status <= 4) {
                        // Set Status to isApproved
                        setStatus(5);
                      }
                      setLoading(false);
                    }

                    if(status <= 3) {
                      // Send ApprovalTx
                      setStatus(4);
                      handleApproval(afterMine)
                    } else if(status === 5) {
                      // Send SubmitTx
                      setStatus(6);
                      handleCreation(afterMine)
                    }
                  }}
                >
                  { props => {

                    useEffect(() => {
                      async function run() {
                        await parseFormData(props.values, props.errors, props.setFieldError)
                      }
                      run()
                    }, [props.values]);

                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <div className="progress-bar-container">
                          <Progress size="xs">
                            <Progress.Bar color="teal" width={[15,15,15,15,30,55,70,100][status]} />
                          </Progress>
                          <div className="text-center">
                            <Text className="card-subtitle">{`Step ${_.max([status - 2, 1])} of 5`}</Text>
                          </div>
                        </div>
                        <Form.Group className='m-4'>
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
                        <Form.Group label='AMOUNT' className='m-4'>
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
                          {props.errors.tokenAmount && <span className="invalid-feedback" style={{"display":"block"}}>{props.errors.tokenAmount}</span>}
                        </Form.Group>
                        <Form.Group className='m-4'>
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
                        <Form.Group label='START DATE' className='m-4'>
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
                        <Form.Group label='CLIFF DATE' className='m-4'>
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
                        <Form.Group label='END DATE' className='m-4'>
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
                        {false && <Form.Group label="CONFIRMATION DETAILS" className='m-4'>
                          <Form.StaticText className="whitespace-preline">
                            { parsedData.confirmationDetails }
                          </Form.StaticText>
                        </Form.Group>}
                        <Form.Group className='m-4'>
                          { 
                            (status >= 5) ? (
                              <Button
                                color="primary"
                                type="submit"
                                value="Submit"
                                className="color "
                                icon={'file-text'}
                                disabled={status >= 7}
                                loading={loading}
                              >
                                Create Agreement
                              </Button> ) : (
                              <Button
                                color="primary"
                                type="submit"
                                value="Submit"
                                className="color "
                                icon={'toggle-left'}
                                disabled={!_.isEmpty(props.errors)}
                                loading={loading}
                              >
                                Approve
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