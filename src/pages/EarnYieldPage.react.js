// @flow

import React, { useContext, useState } from 'react';
import _ from 'lodash';

import {
  Page,
  Grid,
  Dimmer,
  Text,
} from "tabler-react";

import {
  Accordion
} from 'react-accessible-accordion';

import Card from "../components/tablerReactAlt/src/components/Card";
import ProtektDepositCard from "../components/ProtektDepositCard";
import SiteWrapper from "../SiteWrapper.react";

import { useTokenPrices, useLendingMarketMetrics } from "../hooks";
import { default as protektData } from "../data";
import { infuraProvider } from "../config";

function EarnYield() {
  const tokenPrices = useTokenPrices(
    infuraProvider,
    ['dai','cdai','weth','cusdc','usdc','ausdc']
  );
  const lendingMarketMetrics = useLendingMarketMetrics(600000);

  function returnCards(items=[], lendingMarketMetrics, tokenPrices) {
    return items.map((item, key) => {
      return (
        <ProtektDepositCard
          key={key}
          item={item}
          lendingMarketMetrics={lendingMarketMetrics}
          tokenPrices={tokenPrices}
        />
      )
    })
  }

  return (
    <SiteWrapper>
      <Page.Content title="🏦 Earn Safe Yield">
        <Grid.Row cards={true}>
          <Grid.Col lg={12}>
            <Card className="mb-1">
              <Card.Body className="p-1">
                <Grid.Row alignItems="center" justifyContent="center">
                  <Grid.Col width={2}>
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
                      PROTOCOL
                    </Text>
                  </Grid.Col>
                  <Grid.Col width={2}>
                    <Text 
                      muted
                      align="center"
                    >
                      YIELD
                    </Text>
                  </Grid.Col>
                  <Grid.Col  width={2}>
                    <Text 
                      muted
                      align="center"
                    >
                      TOTAL DEPOSITS
                    </Text>
                  </Grid.Col>
                  <Grid.Col width={3}>
                    <Text 
                      muted
                      align="center"
                    >
                      PROTECTION
                    </Text>
                  </Grid.Col>
                </Grid.Row>
              </Card.Body>
            </Card>
            <Accordion
              allowZeroExpanded
            >
              { (!lendingMarketMetrics.length || _.isEmpty(tokenPrices)) ? <Card><Card.Body><Dimmer active loader /></Card.Body></Card> : 
                returnCards(protektData.protektContracts, lendingMarketMetrics, tokenPrices)
              }
            </Accordion>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default EarnYield;
