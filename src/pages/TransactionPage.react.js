// @flow

import React, { useContext } from 'react';
import _ from 'lodash';
import numeral from 'numeral';

import {
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
import Page from '../components/tablerReactAlt/src/components/Page'
import TokenBalanceCard from "../components/TokenBalanceCard";
import TxCard from "../components/TxCard";

import { useAddressTx } from "../hooks";
import { Web3Context, WalletContext } from '../App.react';


function Transaction() {
  const web3Context = useContext(Web3Context);
  const walletContext = useContext(WalletContext)

  console.log(walletContext)

  const title = `📄 Transactions`

  return (
    <SiteWrapper>
      <Page.Content title={title} headerClassName="d-flex justify-content-center" web3ContextReady={web3Context.ready} walletContextLoading={walletContext.loading}>
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