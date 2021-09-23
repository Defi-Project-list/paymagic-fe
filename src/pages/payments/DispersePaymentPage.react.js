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
import { Transactor, sleep, getTokenIconUriFromAddress, getTokenDataFromAddress } from "../../utils";
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

  const [formData, setFormData] = useState({
    token: "",
    recipients: null
  })

  const [addressArray, setAddressArray] = useState([]);
  const [amountArray, setAmountArray] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    async function parseFormData() {
      // Update token balances & allowance
      try {
        if(!_.isNull(formData.recipients)) {
          let [_status, _addressArray, _amountArray, _totalAmount] = await parseRecipientsText()

          setStatus(_status)            
          setAddressArray(_addressArray)
          setAmountArray(_amountArray)
          setTotalAmount(_totalAmount)            
        }

      }
      catch(err) {
        console.error(err)
      }
    }
    if(web3Context.ready && !_.isUndefined(contracts)) {
      parseFormData();
    }
  }, [formData]);


  const validateRules = async values => {
    const errors = {};

    // console.log(values)

    // CUSTOM TOKEN ADDRESS
    // if (!values.customTokenAddress) {
    //   errors.customTokenAddress = 'Required'
    // }    

    // TOKEN
    if (!values.token) {
      errors.token = 'Required'
    }

    // RECIPIENTS    
    let validAddresses = !_.includes(
      addressArray.map(x => {
        try {
          let temp = ethers.utils.getAddress(x)
          return ethers.utils.isAddress(x)
        } catch {
          return false
        }
      }),
      false
    )

    if (!values.recipients) {
      errors.recipients = 'Required';
    } else if (!validAddresses) {
      errors.recipients = 'Unable to parse the format. Please try again.';
    }

    if(values.token) {
      let tokenBalanceBN = await contracts[values.token]["balanceOf"](...[web3Context.address]);
      console.log(`tokenBalance ${tokenBalanceBN.toString()}`)

      if (totalAmount >= 0 && !_.isNumber(totalAmount)) {
        errors.recipients = 'Unable to parse the format. Please try again.';
      }

      if (tokenBalanceBN.lt(
          ethers.utils.parseUnits(
            _.toString(totalAmount),
            paymagicData.contracts[values.token]['decimals']
          )
        )
      ) {
        errors.recipients = 'Your token balance is too low';
      }      
    }

    return errors;
  };

  async function parseRecipientsText() {
    let _addressArray = []
    let _amountArray = []
    let _totalAmount = 0

    const converter = csv({
      delimiter: [",","|"],
      noheader: true,
      trim: true
    })
    let parsed = await converter.fromString(formData.recipients)

    try {
      parsed.forEach( (a,i) =>{
        _addressArray[i] = _.get(a, 'field1', null)
        let tempAmount = _.toNumber(
          _.get(a, 'field2', 0)
        )
        _totalAmount = _totalAmount + tempAmount
        let tempDecimals = formData.token ? paymagicData.contracts[formData.token]['decimals'] : 0
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
        tempBN, paymagicData.contracts[formData.token]['decimals']
      )
      return `${addressArray[i]}  ${numeral(tempNumber).format('0,0.0000')} ${tokenSymbol}`
    })

    return `${_.join(tempDetails,`\n`)}\n-----\nTOTAL ${numeral(totalAmount).format('0,0.0000')} ${tokenSymbol}\n`
  }

  async function handleApproval(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts[formData.token]["approve"](paymagicData.disperse.address, ethers.utils.parseUnits(_.toString(totalAmount), paymagicData.contracts[formData.token]['decimals'])), cb);
    }
  }
  
  async function handleSubmit(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts['disperse']["disperseTokenSimple"](contracts[formData.token]['address'], addressArray, amountArray), cb);
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

  console.log(`Status: ${status}`)
  console.log(`Form: ${JSON.stringify(formData)}`)

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
                    token: formData.token,
                    customTokenAddress: null,
                    recipients: '',
                  }}
                  validate={ validateRules }
                  onSubmit={async (values, actions) => {
                    setLoading(true);

                    const afterMine = async (txStatus) => {
                      // console.log(`txStatus ${JSON.stringify(txStatus)}`)
                      // await sleep(15000)
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
                    async function handleTokenChange(option) {
                      const _token = option.value
                      if(_token) {
                        setFormData({...formData,
                          token: _token
                        })
                      }
                      props.setFieldValue('token', _token)
                    }

                    async function handleCustomTokenAddressChanges(event) {
                      const _customTokenAddress = event.currentTarget.value
                      if(_customTokenAddress) {
{/*                        setFormData({...formData,
                          token: _token
                        })*/}
                      }
                      props.setFieldValue('customTokenAddress', _customTokenAddress)
                    }

                    async function handleRecipientChanges(event) {
                      const _recipients = event.currentTarget.value
                      if(_recipients) {
                        setFormData({...formData,
                          recipients: _recipients
                        })
                      }
                      props.setFieldValue('recipients', _recipients)
                    }

                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <Form.Group label="TOKEN" className='m-3'>
                          <SelectToken
                            name="token"
                            defaultValue={props.values.token}
                            onChange={handleTokenChange}
                            disabled={status >= 4}
                            placeholder="Select Token..."
                          />
                          {props.errors.token && <span className="invalid-feedback">{props.errors.token}</span>}
                        </Form.Group>
                        {
                          false ? (
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
                          ) : <span></span>
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
                                    { formatConfirmationDetails(addressArray, amountArray, paymagicData.contracts[props.values.token]['symbol']) }
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