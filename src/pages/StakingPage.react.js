// @flow

import React, { useContext } from 'react';

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
import StakingDepositCard from "../components/StakingDepositCard";
import SiteWrapper from "../SiteWrapper.react";

import { useTokenPrices, useLendingMarketMetrics } from "../hooks";
import { default as protektData } from "../data";
import { infuraProvider } from "../config";

function Staking() {
  const tokenPrices = useTokenPrices(
    infuraProvider,
    ['dai','cdai','weth','cusdc','usdc','ausdc']
  );
  const lendingMarketMetrics = useLendingMarketMetrics(600000);

  function returnCards(items=[], lendingMarketMetrics, tokenPrices) {
    return items.map((item, key) => {
      return (
        <StakingDepositCard
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
      <Page.Content title="🛡 Stake to Shield Mine">
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
                      TRAUNCH
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
                  <Grid.Col width={3}>
                    <Text 
                      muted
                      align="center"
                    >
                      PROTECTING
                    </Text>
                  </Grid.Col>
                  <Grid.Col width={3}>
                    <Text 
                      muted
                      align="center"
                    >
                      FROM
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
                </Grid.Row>
              </Card.Body>
            </Card>
            <Accordion
              allowZeroExpanded
            >
            { (!lendingMarketMetrics.length && tokenPrices) ? <Card><Card.Body><Dimmer active loader /></Card.Body></Card> : 
              returnCards(protektData.protektContracts, lendingMarketMetrics, tokenPrices)
            }
            </Accordion>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default Staking;