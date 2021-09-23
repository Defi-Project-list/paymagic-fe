// @flow

import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers, Contract } from "ethers";
import { Formik } from 'formik';
import * as csv from 'csvtojson'
import Confetti from 'react-confetti'

import {
  Page,
  Grid,
  Card,
  Text,
  Dimmer,
  Button,
  Form
} from "tabler-react";

import SiteWrapper from "../../SiteWrapper.react";
import SelectToken from "../../components/SelectToken";

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


function DispersePaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)
  const gasPrice = useGasPrice("fast")
  const contracts = useContractLoader(web3Context.provider);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(1);
    // 1 - start | 2 - notValid |  3 - isValid
    // 4 - approveTx | 5 - isApproved | 6 - submitTx
    // 7 - complete

  const [tokenData, setTokenData] = useState({
    symbol: '',
    decimals: 0,
    address: '',
    contract: '',
  })

  const [addressArray, setAddressArray] = useState([]);
  const [amountArray, setAmountArray] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  async function parseFormData(customTokenAddress, recipients) {
    if(web3Context.ready && !_.isUndefined(contracts)) {
      let _validRecipientsData, _addressArray, _amountArray, _totalAmount

      // Update parsed recipients text
      try {
        if(!_.isNull(recipients)) {
          [_validRecipientsData, _addressArray, _amountArray, _totalAmount] = await parseRecipientsText(recipients)
           
          setAddressArray(_addressArray)
          setAmountArray(_amountArray)
          setTotalAmount(_totalAmount)            
        }

      }
      catch(err) {
        console.error(err)
        setStatus(2)
      }

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
      if(_validRecipientsData && _valueTokenData) {
        setStatus(3) 
      } else {
        setStatus(2) 
      }
    }
  }


  const validateRules = async values => {
    const errors = {};

    // CUSTOM TOKEN ADDRESS
    if (!values.customTokenAddress) {
      errors.customTokenAddress = 'Required'
    } else if ( !isAddress(values.customTokenAddress) ){
      errors.customTokenAddress = 'Unable to parse the token address. Please try again.'
    }
    
    let validcustomTokenAddress = !_.includes(
      addressArray.map(x => {
        return !!isAddress(values.customTokenAddress)
      }),
      false
    )

    //TOKEN
    // if (!values.token) {
    //   errors.token = 'Required'
    // }

    // RECIPIENTS    
    let validAddresses = !_.includes(
      addressArray.map(x => {
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
    if(tokenData.contract) {
      let tokenBalanceBN = await tokenData.contract["balanceOf"](...[web3Context.address]);

      if (totalAmount <= 0 && !_.isNumber(totalAmount)) {
        errors.recipients = 'Unable to parse the text. Please try again.';
      }

      if (tokenBalanceBN.lt(
          ethers.utils.parseUnits(
            _.toString(totalAmount),
            tokenData.decimals
          )
        )
      ) {
        errors.recipients = 'Your token balance is too low';
      }      
    }

    return errors;
  };

  async function parseRecipientsText(recipients) {
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
        let tempDecimals = tokenData.decimals
        _amountArray[i] = ethers.utils.parseUnits(
          _.toString(tempAmount), tempDecimals
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

  function formatConfirmationDetails(addressArray, amountArray, tokenSymbol) {
    let tempDetails = addressArray.map((a, i) => {
      let tempBN = amountArray[i] ? amountArray[i] : ethers.BigNumber.from(0)
      let tempNumber = ethers.utils.formatUnits(
        tempBN, tokenData.decimals
      )
      return `${addressArray[i]}  ${numeral(tempNumber).format('0,0.0000')} ${tokenSymbol}`
    })

    return `${_.join(tempDetails,`\n`)}\n-----\nTOTAL ${numeral(totalAmount).format('0,0.0000')} ${tokenSymbol}\n`
  }

  async function handleApproval(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(tokenData.contract["approve"](paymagicData.disperse.address, ethers.utils.parseUnits(_.toString(totalAmount), tokenData.decimals)), cb);
    }
  }
  
  async function handleSubmit(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts['disperse']["disperseTokenSimple"](tokenData.address, addressArray, amountArray), cb);
    }
  }

  const title = `💳 Disperse Tokens`

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

  // console.log(`Status: ${status}`)
  // console.log(`Token: ${JSON.stringify(tokenData)}`)

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
              title="Send to many recipients"
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
                    async function handleCustomTokenAddressChanges(event) {
                      const _customTokenAddress = event.currentTarget.value
                      if(_customTokenAddress) {
                        parseFormData(_customTokenAddress, props.values.recipients)
                      }
                      props.setFieldValue('customTokenAddress', _customTokenAddress)
                    }

                    async function handleRecipientChanges(event) {
                      const _recipients = event.currentTarget.value
                      if(_recipients) {
                        parseFormData(props.values.customTokenAddress, _recipients)
                      }
                      props.setFieldValue('recipients', _recipients)
                    }

                    return (
                      <Form onSubmit={props.handleSubmit}>
                        {
                          true && (
                            <Form.Group className='m-3'>
                              <Form.Input
                                label='TOKEN ADDRESS'
                                name='customTokenAddress'
                                value={props.values.customTokenAddress}
                                error={props.errors.customTokenAddress }
                                className='mb-3'
                                disabled={status >= 4}
                                placeholder={`0xa0b8...eb48`}
                                onChange={handleCustomTokenAddressChanges}
                              />
                            </Form.Group>
                          )
                        }
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
                            onChange={handleRecipientChanges}
                          />
                          { 
                            (status >= 3) && totalAmount > 0 && (
                              <div>
                                <Form.Group label="CONFIRMATION DETAILS">
                                  <Form.StaticText className="whitespace-preline">
                                    { formatConfirmationDetails(addressArray, amountArray, tokenData.symbol) }
                                  </Form.StaticText>
                                </Form.Group>
                              </div>
                            )
                          }
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