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
      <Page.Content title="βΉοΈ About" headerClassName="d-flex justify-content-center">
        <Grid.Row className="d-flex justify-content-center">
          <Grid.Col sm={8} xl={8}>
            <Card
              statusColor="blue"
              body={(
                <p style={{whiteSpace: "pre-line"}}>
Paymagic is a payment tool for DAOs and crypto teams. Send batch transfers, airdrops, vesting schedules, streaming payments, and more all from one easy app. πΈβ¨{"\n\n"}
The app was inspired by the ideas and creations of projects like Disperse.app, SuperFluid, Sabler, MerkleDrops, and many more. π {"\n\n"}

π Submit <a target="_blank" href="https://airtable.com/shrpR5auT6RUIOrDC">bugs or feature requests here</a>.{"\n"}
π¬ To contact or contribute to the DAO, <a target="_blank" href="https://t.me/paymagic">join on Telegram</a>.{"\n"}
πͺ More details can be <a target="_blank" href="https://launch.mirror.xyz/tkvx9MAcsuSag0l5fa_7CmRTKyPSlyRtrMHulwknMUw"> found on Mirror</a>.{"\n"}

{"\n"}Cheers,{"\n"}
β¨ πΈ β¨ Paymagic Team β¨ πΈ β¨
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