// @flow

import React, { useState, useEffect } from 'react';
import numeral from 'numeral';

import {
  Grid,
  // Card,
  Form,
  Button,
  Header,
} from "tabler-react";

import Card from "../tablerReactAlt/src/components/Card";
import DisplayToken from "../DisplayToken";

type Props = {|
  +children?: React.Node,
  +item?: Object,
|};

function DashboardProtektCard({
  children,
  item,
}: Props): React.Node {

  let sideColor = (item.protocol === 'compound') ? 'teal' : 'purple';

  return (
    <Card>
      <Card.Header>
        <Card.Title>
          { `${numeral(10000).format('$0,0')} earning ${numeral(item.apr).format('0.00')}% APR in ${item.protocol.toUpperCase()}` }
        </Card.Title>
        <Card.Options>
          <Button
            RootComponent="a"
            color="primary"
            size="sm"
            icon="dollar-sign"
            href="http://www.google.com"
          >
            Redeem COMP Rewards
          </Button>
        </Card.Options>
      <Card.Status color={sideColor} side />
      </Card.Header>
      <Card.Body>
        <Grid.Row>
          <Grid.Col width={6}>
            <h5 className="m-0 text-muted">{`COVERAGE`}</h5>
            <p>{`Currently 100% covered`}</p>
            <h5 className="m-0 text-muted">{`BACKED BY`}</h5>
            <p>{`wETH (Not invested)`}</p>
          </Grid.Col>
          <Grid.Col width={6}>
            <h5 className="m-0 text-muted">{`CLAIMS`}</h5>
            <p>{`Claims are investigated for a period of 1 week, and the payout decision is made by a DAO vote.`}</p>
            <h5 className="m-0 text-muted">{`STATUS`}</h5>
            <p>{`No claim submitted`}</p>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col width={12}>
            <h5 className="m-0 text-muted">{`COVERAGE FOR`}</h5>
            <p>{`Protection against 1) smart contract bugs that allow hackers to steal or lock DAI and 2) risk that admin keys are stolen or used to withdraw DAI. Not covered: 1) Risk of a Maker hack or DAI lossing its peg. 2) Risk of flash loan or other financial exploit.`}</p>
          </Grid.Col>
        </Grid.Row>
      </Card.Body>
      <Card.Body>
        <Grid.Row>
          <Grid.Col width={5}>
            <Header.H4>
              Withdraw
            </Header.H4>
            <Form.Group label="Deposited: 0.0000 cDAI">
              <Form.InputGroup>
                <Form.Input
                  disabled={true}
                  placeholder="0.00"
                />
                <Form.InputGroupAppend>
                  <Button
                    disabled={true}
                    RootComponent="a"
                    color="primary"
                    icon="upload"
                    href="http://www.google.com"
                  >
                    Withdraw
                  </Button>
                </Form.InputGroupAppend>
              </Form.InputGroup>
            </Form.Group>
          </Grid.Col>
          <Grid.Col width={5} offset={1}>
            <Header.H4>
              Submit Claim
            </Header.H4>
            <Form.Group label="No Payout Event found">
              <Form.InputGroup>
                <Form.InputGroupAppend>
                  <Button
                    disabled={true}
                    RootComponent="a"
                    color="primary"
                    icon="edit-3"
                    href="http://www.google.com"
                  >
                    Submit
                  </Button>
                </Form.InputGroupAppend>
              </Form.InputGroup>
            </Form.Group>
          </Grid.Col>
        </Grid.Row>
      </Card.Body>
    </Card>
  )
}

/** @component */
export default DashboardProtektCard;
