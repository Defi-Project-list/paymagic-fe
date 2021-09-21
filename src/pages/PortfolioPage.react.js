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


function Portfolio() {
  const web3Context = useContext(Web3Context)
  const walletContext = useContext(WalletContext)

  console.log(walletContext)

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

  const title = `💰 Portfolio`

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
          <Grid.Col lg={6}>
            <Card className="mb-1"
              title="Assets"
            >
              <Card.Body className="p-1">
                <Grid.Row alignItems="center" justifyContent="center">
                  <Grid.Col width={4}>
                    <Text 
                      muted
                      align="center"
                    >
                      ASSET
                    </Text>
                  </Grid.Col>
                  <Grid.Col width={3}>
                    <Text 
                      muted
                      align="center"
                    >
                      PRICE
                    </Text>
                  </Grid.Col>
                  <Grid.Col  width={3}>
                    <Text 
                      muted
                      align="center"
                    >
                      BALANCE
                    </Text>
                  </Grid.Col>
                </Grid.Row>
              </Card.Body>
            </Card>
            { 
              _.isEmpty(walletContext.assets) ? <Card><Card.Body><Text className="text-center font-italic">No tokens found in this wallet.</Text></Card.Body></Card> : 
              returnHolding(walletContext.assets)
            }
          </Grid.Col>
          <Grid.Col lg={6}>
            { _.isEmpty(walletContext.deposits) ? 
              (<Card className="mb-1" title="Deposits"><Card.Body><Text className="text-center font-italic">No deposits found in this wallet.</Text></Card.Body></Card>) : 
              (
                <Card className="mb-1"
                  title="Deposits"
                >
                  <Card.Body className="p-1">
                    
                  </Card.Body>
                </Card>
              )
            }
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default Portfolio;