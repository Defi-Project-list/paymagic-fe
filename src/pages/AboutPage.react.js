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
Paymagic is a payment tool for DAOs and crypto teams. Send batch token transfers, airdrops, vesting schedules, streaming payments, escrow, and more on any blockchain or Layer 2’s. 💸✨{"\n\n"}
The app was inspired by the ideas and creations of projects like Disperse.app, SuperFluid, Sabler, MerkleDrops, and many more. 🙏 {"\n\n"}

🐛 Submit <a target="_blank" href="https://airtable.com/shrpR5auT6RUIOrDC">bugs or feature requests here.</a>.{"\n"}
💬 To contact or contribute to the DAO, <a target="_blank" href="https://t.me/paymagic">join on Telegram</a>.{"\n"}
🪞 More details can be <a target="_blank" href="https://launch.mirror.xyz/tkvx9MAcsuSag0l5fa_7CmRTKyPSlyRtrMHulwknMUw"> found on Mirror</a>.{"\n"}

{"\n"}Cheers,{"\n"}
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