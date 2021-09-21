// @flow

import React, { useContext } from 'react';
import { Link } from "react-router-dom";
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
import SiteWrapper from "../../SiteWrapper.react";
import TokenBalanceCard from "../../components/TokenBalanceCard";

import { Web3Context, WalletContext } from '../../App.react';


function BurnerLeaderboardPage() {
  const web3Context = useContext(Web3Context);
  const walletContext = useContext(WalletContext)
  const balances = walletContext.assets

  function returnTableRow(item) {
      return (
        <Table.Row>
          <Table.Col>
            <Link
              to={`#`}
            >
              <Avatar
                imageURL={`image/social/svg/${`twitter.svg`}`}
                style={{"verticalAlign":"middle"}}
                size="sm"
              />
              <Text size="h4" align="center" RootComponent="span" className="ml-2">
                {
                  `elonmusk`
                }
              </Text>
            </Link>
          </Table.Col>
          <Table.Col className="text-right">
            <Text align="right" className="mb-0">
              {
                `${numeral(10000000).format('$0,0')}`
              }
            </Text>
          </Table.Col>
        </Table.Row>
      )
  }

  return (
    <SiteWrapper>
      <Page.Content title="💰 Top 10 Creators" headerClassName="d-flex justify-content-center">
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col sm={10} lg={8}>
            <Card>
              <Table
                responsive
                className="card-table table-vcenter text-nowrap"
                headerItems={[
                  { content: "Creator"},
                  { content: "Cash out Amount", className: "text-right" }
                ]}
              >
                {
                  [1,2,3,4,5,6,7,8,9,1].map((item, key) => {
                    return returnTableRow(item)
                  })
                }
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default BurnerLeaderboardPage;