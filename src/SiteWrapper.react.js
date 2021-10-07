// @flow

import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import _ from 'lodash';

import {
  Grid,
  List,
  RouterContextProvider,
  Text
} from "tabler-react";
import Select from 'react-select'

import Site from "./components/tablerReactAlt/src/components/Site";
import Nav from "./components/tablerReactAlt/src/components/Nav";
import Account from "./components/Account";
import { env } from "./config";

import type { NotificationProps } from "tabler-react";

type Props = {|
  +children: React.Node,
|};

type State = {|
  notificationsObjects: Array<NotificationProps>,
|};

type subNavItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +LinkComponent?: React.ElementType,
  +useExact?: boolean,
|};

type navItem = {|
  +value: string,
  +to?: string,
  +icon?: string,
  +active?: boolean,
  +LinkComponent?: React.ElementType,
  +subItems?: Array<subNavItem>,
  +useExact?: boolean,
|};

const navBarItems: Array<navItem> = [
  {
    value: "PayMagic",
    to: "/payments",
    icon: "credit-card",
    LinkComponent: withRouter(NavLink),
  },
  // {
  //   value: "Portfolio",
  //   to: "/portfolio",
  //   icon: "dollar-sign",
  //   LinkComponent: withRouter(NavLink),
  // },
  {
    value: "Transactions",
    to: "/transactions",
    icon: "layers",
    LinkComponent: withRouter(NavLink),
  },

  // {
  //   value: "DeFi Data",
  //   to: "/defi",
  //   icon: "eye",
  //   LinkComponent: withRouter(NavLink),
  // },
  // {
  //   value: "App Store",
  //   to: "/app-store",
  //   icon: "grid",
  //   LinkComponent: withRouter(NavLink),
  // },
  // {
  //   value: "Stake to Shield Mine",
  //   to: "/staking",
  //   icon: "shield",
  //   LinkComponent: withRouter(NavLink),
  // },
  {
    value: "About",
    to: "/about",
    icon: "info",
    LinkComponent: withRouter(NavLink),
  }
];

const networkOptions = [
  { value: 'https://mainnet.paymagic.xyz', label: 'Mainnet' },
  { value: 'https://polygon.paymagic.xyz', label: 'Polygon' },
  { value: 'https://kovan.paymagic.xyz', label: 'Kovan' }
]

function SiteWrapper(props: Props): React.Component {

  return (
    <Site.Wrapper
      headerProps={{
        href: "/",
        alt: "Paymagic",
        imageURL: `${process.env.PUBLIC_URL}/static/logo_512x512.png`,
        navItems:
          (
            <>
            <Nav.Item type="div" className="d-flex" key={2}>
              <Account />
            </Nav.Item>
            <Nav.Item hasSubNav value={_.capitalize(env)} icon="globe" type = "div" position="bottom-end">
              <Nav.SubItem value="Mainnet" to="https://mainnet.paymagic.xyz"/>
              <Nav.SubItem value="Polygon" to="https://polygon.paymagic.xyz"/>
              <Nav.SubItem value="Kovan" to="https://kovan.paymagic.xyz"/>
            </Nav.Item>
            </>
          )
        
      }}
      navProps={{ itemsObjects: navBarItems }}
      routerContextComponentType={withRouter(RouterContextProvider)}
      footerProps={{
        copyright: (
          <React.Fragment>
            {false && <Text>
              Copyright © 2021
              <a href="https://twitter.com/0xViabull" target="_blank" rel="noopener noreferrer"> Paymagic</a>. All rights reserved.
            </Text>}
          </React.Fragment>
        ),
        nav: (
          <React.Fragment>
            <Grid.Col auto={true} className="d-flex">
              <List className="list-inline list-inline-dots mb-0 d-none d-md-flex">
                <List.Item className="list-inline-item">
                  <a href="https://t.me/paymagics" target="_blank" rel="noopener noreferrer">Telegram</a>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col auto={true} className="d-flex">
              <List className="list-inline list-inline-dots mb-0 d-none d-md-flex">
                <List.Item className="list-inline-item">
                  <a href="https://twitter.com/0xViabull" target="_blank" rel="noopener noreferrer">Twitter</a>
                </List.Item>
              </List>
            </Grid.Col>
            <Grid.Col auto={true} className="d-flex">
              <List className="list-inline list-inline-dots mb-0 d-none d-md-flex">
                <List.Item className="list-inline-item">
                  <a href="https://github.com/corbinpage/paymagic-fe" target="_blank" rel="noopener noreferrer">Github</a>
                </List.Item>
              </List>
            </Grid.Col>
          </React.Fragment>
        ),
      }}
    >
      {props.children}
    </Site.Wrapper>
  )
}

export default SiteWrapper;
