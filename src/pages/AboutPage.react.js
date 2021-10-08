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
          <Grid.Col sm={8} xl={8}>
            <Card
              statusColor="blue"
              body={(
                <p style={{whiteSpace: "pre-line"}}>
Paymagic empowers DAOs and crypto teams to send specialized crypto payments, like batch transfers, vesting schedules, streaming, escrow, airdrops, etc, on any EVM compatible blockchain or Layer 2’s. 💸✨{"\n\n"}
The app was inspired by the ideas and creations of projects like Disperse.app, SuperFluid, Sabler, MerkleDrops, and many many more. 🙏 More details about Paymagic can be found <a target="_blank" href="https://launch.mirror.xyz/tkvx9MAcsuSag0l5fa_7CmRTKyPSlyRtrMHulwknMUw">on Mirror here</a>. We'll plan to ship updates, new features, and new networks in the coming months.{"\n\n"}

If you have bugs to report, feedback, or feature requests, please <a target="_blank" href="https://airtable.com/shrpR5auT6RUIOrDC">submit them here</a>.🐛{"\n\n"}

If you'd like to join the DAO and contribute to the project, <a target="_blank" href="https://t.me/paymagic">join the Telegram group here</a>.💬{"\n\n"}

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