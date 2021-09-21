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

import TokenUsdAmount from "../TokenUsdAmount.react"
import TokenIcon from "../TokenIcon.react"

import {
  shortenAddress,
  shortenTx,
  getEtherscanLink,
  displayTxDatetime,
  getTokenIconUriFromAddress
} from "../../utils"

function returnRowContent(txs) {
  return txs.map((tx, key) => {
    return {
      key: key,
      item: [
        { content: tx.name },
        { content: 
            (
              <TokenUsdAmount
                symbol={tx.symbol}
                amountUsd={tx.amountUsd}
                amountTokens={tx.amount}
              />
            )
        },
        { content: 
            (
              <TokenIcon
                symbol={tx.symbol}
                imageUrl={ getTokenIconUriFromAddress(tx.address) }
              />
            )
        },
        {
          content: 
            (
              <a href="#" target="_blank" target="_blank" className="text-inherit">
                { !tx.details ? `` : tx.details.protocol }
              </a>
            )
        },
        {
          content: 
            tx.txSuccessful ? (
              <React.Fragment>
                <span className="status-icon bg-success" /> Confirmed
              </React.Fragment>
            ) : (
              <React.Fragment>
                <span className="status-icon bg-warning" /> Pending
              </React.Fragment>
            )
        },
        {
          content: (
            <Text RootComponent="span" muted>
              { displayTxDatetime(tx.timeStamp) }
            </Text>
          ),
        },
        {
          content: (
            <a href={getEtherscanLink(1,tx.hash,'transaction')} target="_blank" className="text-muted">
              { shortenTx(tx.hash) }
            </a>
          )
        }
      ]
    }
  })
}

function TxCard(props) {
  const txs = props.txs;



  return (
    <Card className="mb-1"
      title="Transactions"
    >
      <Table
        responsive
        className="card-table table-vcenter text-nowrap"
        headerItems={[
          { content: "Action"},
          { content: "Amount"},
          { content: "Asset"},
          { content: "App" },
          { content: "Status" },
          { content: "Date"},
          { content: "TxHash" }
        ]}
        bodyItems={
          returnRowContent(txs)
        }
      />
    </Card>
  )
}

export default TxCard;