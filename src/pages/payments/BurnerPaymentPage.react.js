// @flow

import React, { useContext } from 'react';
import _ from 'lodash';
import numeral from 'numeral';

import {
  Page,
  Grid,
  Card,
  Text,
  Header,
  List,
  Dimmer,
  Table,
  Icon,
  Avatar,
  Form
} from "tabler-react";

import {
  Button,
} from "tabler-react";

import DepositWithdrawTokensForm from "../../components/DepositWithdrawTokensForm";
import InputTokenAmountForm from "../../components/InputTokenAmountForm";

import SiteWrapper from "../../SiteWrapper.react";
import TokenBalanceCard from "../../components/TokenBalanceCard";
import TxCard from "../../components/TxCard";

import { useAddressTx } from "../../hooks";
import { Web3Context, WalletContext } from '../../App.react';


function BurnerPaymentPage() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)

  function returnHolding(tokenBalances) {
    return tokenBalances.map((item, key) => {
      return (
        <TokenBalanceCard
          key={key}
          item={item}
        />
      )
    })
  }

  const title = `🎁 Send Token Reward`

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
          <Grid.Col sm={10} lg={8}>
            <Card className="mb-1"
              title="Enter Reward Details"
            >
              <Card.Body className="p-1">
                <Form.Group label="TO" className='m-3'>
                  <Form.SelectGroup>
                    <Form.SelectGroupItem
                      label="Email"
                      name="app"
                      value="Email"
                    />
                    <Form.SelectGroupItem
                      label="Discord"
                      name="app"
                      value="Discord"
                    />
                    <Form.SelectGroupItem
                      label="Twitter"
                      name="app"
                      value="Twitter"
                    />
                  </Form.SelectGroup>
                </Form.Group>
                <Form.Group className='m-3'>
                  <Form.Input
                    name="app-username"
                    placeholder="Email or username"
                  />
                </Form.Group>
                <Form.Group label="FROM" className='m-3 mt-5'>
                  <Form.Input
                    name="app-from"
                    placeholder="Your Name"
                  />
                </Form.Group>
                <InputTokenAmountForm
                  web3Context={web3Context}
                  walletContext={walletContext}
                  label={`Your wallet: 0`}
                  className='mt-5'

                  buttonIcon={"download"}
                  buttonLabel={"Deposit"}
                  disabled= {true}


                  item={{}}
                  accountBalances={{}}

                  tokenPrices={{}}
                  contracts={{}}
                  handleSubmit={{}}

                />
                <Form.Group label="NOTE TO RECIPIENT" className='m-3 mt-5'>
                  <Form.Textarea
                    name="app-note"
                    placeholder="Here's a little reward for supporting us..."
                    rows={6}
                  />
                </Form.Group>
                <Form.Group className='m-3 justify-content-center'>
                  <Button
                    color="primary"
                    type="submit"
                    value="Submit"
                    className="color"
                    icon={"send"}
                    disabled={false}
                    loading={false}
                  >
                    { "Send" }
                  </Button>
                </Form.Group>
              </Card.Body>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default BurnerPaymentPage;