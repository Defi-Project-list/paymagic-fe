// @flow

import React, { useContext } from 'react';
import _ from 'lodash';
import numeral from 'numeral';

import {
  Page,
  Grid,
  Card,
  Text,
  Table,
  Avatar
} from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";
import TokenBalanceCard from "../components/TokenBalanceCard";

import { Web3Context, WalletContext } from '../App.react';


function Portfolio() {
  const web3Context = useContext(Web3Context);
  const walletContext = useContext(WalletContext)
  const balances = walletContext.assets

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

  console.log(balances)
  console.log(web3Context)

  return (
    <SiteWrapper>
      <Page.Content title="💰 Portfolio" headerClassName="d-flex justify-content-center">
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col sm={10} lg={8}>
            <Card>
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "DAO"},
                  { content: "Treasury Amount", className: "text-right" },
                  { content: "Utilization %", className: "text-right" },
                  { content: "Market Cap", className: "text-right"}
                ]}
              >
                <Table.Row>
                  <Table.Col>
                    <Avatar
                      imageURL={`assets/${`UNI.png`}`}
                      style={{"verticalAlign":"middle"}}
                    />
                    <Text size="h4" align="center" RootComponent="span" className="ml-2">
                      {
                        `Uniswap`
                      }
                    </Text>
                  </Table.Col>
                  <Table.Col className="text-right">
                    <Text align="right" className="mb-0">
                      {
                        `${numeral(10000000).format('$0,0')}`
                      }
                    </Text>
                  </Table.Col>
                  <Table.Col className="text-right">
                    <Text align="right" className="mb-0">
                      {
                        `${numeral(10000000).format('$0,0')}`
                      }
                    </Text>
                  </Table.Col>
                  <Table.Col className="text-right">
                    <Text align="right" className="mb-0">
                      {
                        `${numeral(10000000).format('$0,0')}`
                      }
                    </Text>
                  </Table.Col>
                </Table.Row>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col lg={8}>
            { !web3Context.ready ? 
              (<Card.Body><Text className="text-center font-italic">Connect Wallet Above<span role="img">👆</span></Text></Card.Body>) : 
              (
                <>
                <Card className="mb-1">
                  <Card.Body className="p-1">
                    <Grid.Row alignItems="center" justifyContent="center">
                      <Grid.Col width={4}>
                        <Text 
                          muted
                        >
                          ASSET
                        </Text>
                      </Grid.Col>
                      <Grid.Col width={2}>
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
                  _.isEmpty(balances) ? <Card><Card.Body><Text className="text-center font-italic">No tokens found in this wallet.</Text></Card.Body></Card> : 
                  returnHolding(balances)
                }
              </>
            )
          }
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default Portfolio;