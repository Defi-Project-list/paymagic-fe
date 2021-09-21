// @flow

import React, { useState, useEffect, useContext, useReducer, Fragment } from 'react';
import numeral from 'numeral';
import { ethers } from "ethers";
import _ from "lodash";

import { Accordion, Card } from "react-bootstrap";

import {
  Grid,
  Header,
  Dimmer,
  Button,
  Form,
  Avatar,
  Text,
  Tag
} from "tabler-react";

import TokenUsdAmount from "../TokenUsdAmount.react"
import TokenIcon from "../TokenIcon.react"

import { getTokenIconUriFromAddress } from "../../utils"

type Props = {|
  +i?: Object,
  +item?: Object,
|};

function TokenBalanceCard({
  item
}: Props): React.Node {
  return (
      <Card className="mb-1">
        <Card.Body>
          <Grid.Row alignItems="center" justifyContent="center">
            <Grid.Col width={4}>
              <TokenIcon
                symbol={item.symbol}
                imageUrl={ getTokenIconUriFromAddress(item.address) }
              />
            </Grid.Col>
            <Grid.Col width={3}>
              <Text align="center" className="mb-0">
                {
                  `${numeral(item.price).format('$0,0.00')}`
                }
              </Text>
            </Grid.Col>
            <Grid.Col width={3}>
              <TokenUsdAmount
                symbol={item.symbol}
                amountUsd={item.balanceUSD}
                amountTokens={item.balance}
              />
            </Grid.Col>
          </Grid.Row>
        </Card.Body>
      </Card>
  )
}

/** @component */
export default TokenBalanceCard;