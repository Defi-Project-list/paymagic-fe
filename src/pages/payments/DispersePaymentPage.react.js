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
  // Avatar,
  Form
} from "tabler-react";

import SiteWrapper from "../../SiteWrapper.react";

import {
  useGasPrice,
  useContractLoader,
} from "../../hooks";
import { Transactor, sleep } from "../../utils";
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

    // TOKEN
    if (!values.token) {
      // Check if user has enough tokens
      errors.token = 'Not enough tokens'
    }

    // RECIPIENTS    
    let tokenBalanceBN = await contracts[values.token]["balanceOf"](...[web3Context.address]);
    let tokenBalance = tokenBalanceBN.div(10**paymagicData.contracts[values.token]['decimals'])
    if (!values.recipients) {
      errors.recipients = 'Required';
    } else if (totalAmount >= 0 && !_.isNumber(totalAmount)) {
      errors.recipients = 'Unable to parse the format. Please try again.';
    } else if (tokenBalance.lt(totalAmount)) {
      errors.recipients = 'Your token balance is too low';
    }

    return errors;
  };

  async function parseRecipientsText(text) {
    let _addressArray = []
    let _amountArray = []
    let _totalAmount = 0

    const converter = csv({
      delimiter: [",","|"],
      noheader: true,
      trim: true
    })
    let parsed = await converter.fromString(text)

    try {
      parsed.forEach( (a,i) =>{
        _addressArray[i] = _.get(a, 'field1', null)
        let tempAmount = _.toNumber(
          _.get(a, 'field2', 0)
        )
        _totalAmount = _totalAmount + tempAmount
        _amountArray[i] = ethers.utils.parseUnits(
          _.toString(tempAmount), paymagicData.contracts[token]['decimals']
        )
      })

      setStatus(_addressArray.length === _amountArray.length ? 3 : 2)
      setAddressArray(_addressArray)
      setAmountArray(_amountArray)
      setTotalAmount(_totalAmount)
    }
    catch(err) {
      console.error(err)
    }
  }

  function formatDetails(addressArray, amountArray, tokenSymbol) {
    return addressArray.map((a, i) => {
      console.log(amountArray[i])
      let tempNumber = ethers.utils.formatUnits(
        amountArray[i], paymagicData.contracts[token]['decimals']
      )
      return `${addressArray[i]}  ${numeral(tempNumber).format('0,0.0000')} ${tokenSymbol}\n`
    })
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
                    token: token,
                    recipients: ''
                  }}
                  validate={ validateRules }
                  onSubmit={async (values, actions) => {
                    setLoading(true);

                    const afterMine = async (error) => {
                      // await sleep(15000)
                      if(status === 3) {
                        setStatus(5);
                      } else {
                        setStatus(7);
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

                    async function handleRecipientChanges(event) {
                      const _recipientText = event.currentTarget.value
                      if(_recipientText) {
                        await parseRecipientsText(_recipientText)
                      }

                      props.setFieldValue('recipients', _recipientText)
                    }

                    return (
                      <Form onSubmit={props.handleSubmit}>
                        <Form.Group className='m-3'>
                          <Form.Select
                            name="token"
                            label="TOKEN"
                            value={props.values.token}
                            error={props.errors.token}
                            onChange={handleTokenChange}
                            disabled={status >= 5}
                          >
                            <option value='usdc'>
                              USDC
                            </option>
                          </Form.Select>
                          <Form.Textarea
                            label='RECIPIENTS'
                            name='recipients'
                            value={props.values.recipients}
                            error={props.errors.recipients }
                            className='mb-3 height-200'
                            disabled={status >= 5}
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
                                <Form.Group label="CONFIRM DETAILS">
                                  <Form.StaticText className="whitespace-preline">
                                    { formatDetails(addressArray, amountArray, paymagicData.contracts[props.values.token]['symbol']) }
                                  </Form.StaticText>
                                </Form.Group>
                                <Form.Group label="TOTAL SENDING" className='mb-3'>
                                  <Form.StaticText>
                                    {`${numeral(totalAmount).format('0,0.0000')} ${paymagicData.contracts[props.values.token]['symbol']} `}
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
                                disabled={totalAmount <= 0}
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