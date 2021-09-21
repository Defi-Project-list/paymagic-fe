// @flow

import React from 'react';

import {
  Page,
  Grid,
  Card,
  // Text,
  // Header,
  // List
} from "tabler-react";
import SiteWrapper from "../SiteWrapper.react";


function About() {

  return (
    <SiteWrapper>
      <Page.Content title="ℹ️ About" headerClassName="d-flex justify-content-center">
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col sm={6} xl={6}>
            <Card
              statusColor="blue"
              body={(
                <p style={{whiteSpace: "pre-line"}}>
Paymagic allows DAOs, crypto teams, and individuals to access different types of popular payments on Ethereum chains like mainnet, Polygon, Arbitrum, and Optimism. We seek to push the boundaries of crypto payments and support the further growth of DeFi, NFTs, and DAOs.{"\n\n"}
The app is inspired by the ideas and creations of projects like Disperse.app, SuperFluid, Sabler, and many more.{"\n\n"}
Feel free to contact us on Twitter if you find the service useful or have feature requests. We'll plan to ship updates and new features as soon as we can.{"\n\n"}
Cheers,{"\n"}
✨ 💸 ✨ Paymagic Team ✨ 💸 ✨
                </p>
                )}
            />
            <Card.Header>
            </Card.Header>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  )
}

export default About;