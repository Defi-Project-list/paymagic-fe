// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers, Contract } from "ethers";
import { Formik } from 'formik';
import * as csv from 'csvtojson'
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


function DispersePaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({title: '', color: 'primary'})
  const [status, setStatus] = useState(1);
    // 1 - start | 2 - notValid |  3 - isValid
    // 4 - approveTx | 5 - isApproved | 6 - submitTx
    // 7 - complete

  const [parsedData, setParsedData] = useState({
    token: {
      symbol: '',
      decimals: 0,
      address: '',
      contract: ''
    },

    addressArray: [],
    amountArray: [],
    totalAmount: 0,
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
      case 7:
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
      if(_.isUndefined(errors.customTokenAddress) && isAddress(values.customTokenAddress)) {
        try {
          _parsedData.token.contract = new Contract(
            getAddress(values.customTokenAddress),
            paymagicData.contracts['ERC20']['abi'],
            web3Context.provider.getSigner()
          );
          _parsedData.token.address = values.customTokenAddress
          _parsedData.token.symbol = await _parsedData.token.contract.symbol()
          _parsedData.token.decimals = await _parsedData.token.contract.decimals()
          _validTokenData = true
        }
        catch(err) {
          console.error(err)
          _validTokenData = false
          setStatus(2)
        }
      }

      // RECIPIENTS
      let _validRecipientsData, _addressArray, _amountArray, _totalAmount
      try {
        if(!_.isNull(values.recipients)) {
          [_validRecipientsData, _addressArray, _amountArray, _totalAmount] = await parseRecipientsText(values.recipients, _parsedData)
          let _confirmationDetails = formatConfirmationDetails(_addressArray, _amountArray, _totalAmount, _parsedData)
          
          _parsedData.addressArray = _addressArray
          _parsedData.amountArray = _amountArray
          _parsedData.totalAmount = _totalAmount
          _parsedData.confirmationDetails = _confirmationDetails
        }
      }
      catch(err) {
        console.error(err)
        setStatus(2)
      }

      setParsedData(_parsedData)

      // Set validity status
      if(_validRecipientsData && _validTokenData) {
        setStatus(3)
      } else {
        setStatus(2) 
      }
    }
  }

  async function parseRecipientsText(recipients, _parsedData) {
    let _addressArray = []
    let _amountArray = []
    let _totalAmount = 0

    const converter = csv({
      delimiter: [",","|"],
      noheader: true,
      trim: true
    })
    let parsed = await converter.fromString(recipients)

    try {
      parsed.forEach( (a,i) =>{
        _addressArray[i] = _.get(a, 'field1', null)
        let tempAmount = _.toNumber(
          _.get(a, 'field2', 0)
        )
        _totalAmount = _totalAmount + tempAmount
        _amountArray[i] = ethers.utils.parseUnits(
          _.toString(tempAmount),
          _parsedData.token.decimals
        )
      })

      let _status = status >= 4 ? status :
        _addressArray.length === _amountArray.length ? 3 : 2

      return [
        _status,
        _addressArray,
        _amountArray,
        _totalAmount
      ]
    }
    catch(err) {
      console.error(err)
      return [
        2,
        [],
        [],
        0
      ]
    }
  }

  function formatConfirmationDetails(_addressArray, _amountArray, _totalAmount, _parsedData) {
    let tempDetails = _addressArray.map((a, i) => {
      let tempBN = _amountArray[i] ? _amountArray[i] : ethers.BigNumber.from(0)
      let tempNumber = ethers.utils.formatUnits(
        tempBN, _parsedData.token.decimals
      )
      return `${_addressArray[i]}  ${numeral(tempNumber).format('0,0.0000')} ${_parsedData.token.symbol}`
    })

    return `${_.join(tempDetails,`\n`)}\n-----\nTOTAL ${numeral(_totalAmount).format('0,0.0000')} ${_parsedData.token.symbol}\n`
  }

  const validateRules = async values => {
    const errors = {};

    // CUSTOM TOKEN ADDRESS
    if (!values.customTokenAddress) {
      errors.customTokenAddress = 'Required'
    } else if ( !isAddress(values.customTokenAddress) ){
      errors.customTokenAddress = 'Unable to parse the token address. Please try again.'
    }

    // RECIPIENTS    
    let validAddresses = !_.includes(
      parsedData.addressArray.map(x => {
        try {
          let temp = ethers.utils.getAddress(x)
          return ethers.utils.isAddress(temp)
        } catch {
          return false
        }
      }),
      false
    )
    if (!values.recipients) {
      errors.recipients = 'Required';
    } else if (!validAddresses) {
      errors.recipients = 'Unable to parse the text. Please try again.';
    }

    // Validate Token Balance
    if(parsedData.token.contract) {
      let tokenBalanceBN = await parsedData.token.contract["balanceOf"](...[web3Context.address]);

      if (parsedData.totalAmount <= 0 && !_.isNumber(parsedData.totalAmount)) {
        errors.recipients = 'Unable to parse the text. Please try again.';
      }

      if (tokenBalanceBN.lt(
          ethers.utils.parseUnits(
            _.toString(parsedData.totalAmount),
            parsedData.token.decimals
          )
        )
      ) {
        errors.recipients = 'Your token balance is too low';
      }      
    }

    return errors;
  };

  async function handleApproval(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(parsedData.token.contract["approve"](paymagicData.disperse.address, ethers.utils.parseUnits(_.toString(parsedData.totalAmount), parsedData.token.decimals)));
    }
  }
  
  async function handleSubmit(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts['disperse']["disperseTokenSimple"](parsedData.token.address, parsedData.addressArray, parsedData.amountArray));
    }
  }

  return (
    <SiteWrapper>
      <Page.Content title={`Disperse Tokens`} headerClassName="d-flex justify-content-center" web3ContextReady={web3Context.ready} walletContextLoading={walletContext.loading}>
        { status === 7 ? <Confetti/> : <span/> }
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            <Link to="/payments">
              <span>{`<< Back`}</span>
            </Link>
            <Card
              className="mb-1 mt-1"
              title="Send to many recipients"
              alert={alert.title}
              alertColor={alert.color}
            >
              <Card.Body className="p-1">
                <Formik
                  initialValues={{
                    token: '',
                    customTokenAddress: '',
                    recipients: '',
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
                      handleApproval(afterMine)
                    } else {
                      // SubmitTx
                      setStatus(6);
                      handleSubmit(afterMine)
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
                        <Form.Group className='m-3'>
                          <Form.Textarea
                            label='RECIPIENTS'
                            name='recipients'
                            value={props.values.recipients}
                            error={props.errors.recipients }
                            className='mb-3 height-200'
                            disabled={status >= 4}
                            placeholder={`0xABCDFA1DC112917c781942Cc01c68521c415e, 1
0x00192Fb10dF37c9FB26829eb2CC623cd1BF599E8, 2
0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c, 3
0xEA674fdDe714fd979de3EdF0F56AA9716B898ec8, 4
...`}
                            onChange={props.handleChange}
                          />
                          <Form.Group label="CONFIRMATION DETAILS">
                            <Form.StaticText className="whitespace-preline">
                              { parsedData.confirmationDetails }
                            </Form.StaticText>
                          </Form.Group>
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
                                Send
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

export default DispersePaymentPage;