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
Paymagic allows DAOs, crypto teams, and individuals to send different payments to run their organization. Whether you're rewarding your community, paying contributors, vesting tokens to investors, or anything else, Paymagic has you covered! ✨{"\n\n"}
The app is currently deployed to Polygon and mainnet but will launch on other networks over time. We seek to push the boundaries of what smart contract payments can do and support the further growth of DeFi, NFTs, DAOs, and crypto overall.{"\n\n"}
Paymagic was inspired by the ideas and creations of projects like Disperse.app, SuperFluid, Sabler, MerkleDrops, and many many more. 🙏{"\n\n"}
Feel free to contact us on Twitter if you find the service useful or have feature requests. We'll plan to ship updates, new features, and new networks in the coming months.{"\n\n"}
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