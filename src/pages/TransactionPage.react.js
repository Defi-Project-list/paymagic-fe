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
  Button,
  Icon,
  Avatar
} from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import TokenBalanceCard from "../components/TokenBalanceCard";
import TxCard from "../components/TxCard";

import { useAddressTx } from "../hooks";
import { Web3Context, WalletContext } from '../App.react';


function Transaction() {
  const web3Context = useContext(Web3Context);
  const walletContext = useContext(WalletContext)

  console.log(walletContext)

  const title = `📄 Transactions`

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
          <Grid.Col lg={12}>
            <TxCard
              txs={walletContext.txs}
            />
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default Transaction;