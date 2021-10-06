// @flow

import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import _ from 'lodash';
import numeral from 'numeral';
import { env } from '../config'

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

import Stamp from "../components/tablerReactAlt/src/components/Stamp";

import SiteWrapper from "../SiteWrapper.react";
import TokenBalanceCard from "../components/TokenBalanceCard";
import TxCard from "../components/TxCard";

import { useAddressTx } from "../hooks";

const paymentTypes = [
  {
    title: 'Disperse',
    summary: 'Send tokens to multiple recipients at once',
    examples: 'Great for rewarding followers or paying contributors',
    image: '/image/split-payment.png',
    link: '/payments/disperse',
    disabled: false
  },
  {
    title: 'Vesting',
    summary: 'Create a token vesting schedule for a recipient',
    examples: 'Great for distributing tokens over time to your team or investors',
    image: '/image/vesting-payment.png',
    link: '/payments/vesting',
    disabled: false
  },
  {
    title: 'Stream',
    summary: 'Send tokens continuously by the second',
    examples: 'Create real-time subscriptions, salaries, or vesting',
    image: '/image/stream-payment.png',
    link: '/payments/stream',
    disabled: false
  },
  {
    title: 'Airdrop',
    summary: 'Send token rewards for recipients to claim',
    examples: 'Reward liquidity providers, users, or communities',
    image: '/image/airdrop-payment.png',
    link: '/payments/airdrop',
    disabled: true
  },
  {
    title: 'Escrow',
    summary: 'Collect yield in an escrow account until redemption',
    examples: 'Partnerships, security deposits & pools',
    image: '/image/escrow-payment.png',
    link: '/payments/escrow',
    disabled: true
  },
  {
    title: 'Private payment',
    summary: 'Send tokens secretly',
    examples: 'Use for private transactions or avoiding censorship',
    image: '/image/private-payment.png',
    link: '/payments/private',
    disabled: true
  },
  {
    title: 'Loot box',
    summary: 'Send a fun collection of tokens & NFTs',
    examples: 'Reward friends and potentially win millions...',
    image: '/image/lootbox-payment.png',
    link: '/payments/lootbox',
    disabled: true
  },
  {
    title: 'Dustbuster',
    summary: 'Sell random tokens in your wallet',
    examples: 'Clean up random tokens from airdrops or old apps',
    image: '/image/dustbuster-payment.png',
    link: '/payments/dustbuster',
    disabled: true
  }
]



function PaymentsPage() {

  function returnPaymentTypeCard(items) {
    return items.map((item, key) => {
      return (
        <Grid.Col lg={4} md={6} sm={6} xs={12} key={key}>
          <Link to={item.disabled ? '#' : item.link} className={item.disabled ? 'no-decoration disabled' : 'no-decoration'}>
            <Card className="mb-1 text-center">
              <Card.Body className="p-3">
                <img className="card-payment-type-image my-2" alt="Icon" src={item.image} />
                <Header size={2}>{item.title}</Header>
                <div className="card-payment-type-summary">
                  <Text size="h4" style={{"fontWeight": "100"}} className="mx-1">{item.summary}</Text>
                  <Text muted className="mx-1 mt-2">{item.examples}</Text>
                  {
                    item.disabled &&
                    <em><Text className="mx-1 mt-2">(Coming Soon)</Text></em>
                  }
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Grid.Col>
      )
    })
  }

  const title = `💳 Payment Types`

  return (
    <SiteWrapper>
      <Page.Content title={title} headerClassName="d-flex justify-content-center">
        <Grid.Row className="d-flex justify-content-center">
          {
            returnPaymentTypeCard(paymentTypes.slice(0,2))
          }
        </Grid.Row>
        <Grid.Row className="mt-5 d-flex justify-content-center ">
          {
            returnPaymentTypeCard(paymentTypes.slice(2,4))
          }
        </Grid.Row>
        <Grid.Row className="mt-5 d-flex justify-content-center ">
          {
            returnPaymentTypeCard(paymentTypes.slice(4,6))
          }
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default PaymentsPage;