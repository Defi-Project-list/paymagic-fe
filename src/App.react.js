import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { infuraProvider } from "./config";
import {
  Error400,
  Error401,
  Error403,
  Error404,
  Error500,
  Error503,
} from "./pages";

import AboutPage from "./pages/AboutPage.react";
import PortfolioPage from "./pages/PortfolioPage.react";
import PaymentsPage from "./pages/PaymentsPage.react";
import DispersePaymentPage from "./pages/payments/DispersePaymentPage.react";
import VestingPaymentPage from "./pages/payments/VestingPaymentPage.react";
import BurnerPaymentPage from "./pages/payments/BurnerPaymentPage.react";
import ClaimTokenPage from "./pages/ClaimTokenPage.react";
import TransactionPage from "./pages/TransactionPage.react";

import { useWalletContext } from "./hooks";

import "tabler-react/dist/Tabler.css";
import "./App.css";

type Props = {||};

export const Web3Context = React.createContext({
  provider: {},
  infuraProvider: infuraProvider,
  updateProvider: () => {},
  updateAddress: () => {},
  ready: false,
  address: ''
});

export const WalletContext = React.createContext({
  loading: true,
  assets: [],
  deposits: [],
  txs: [],
  updateWalletData: () => {}
});

function App(props: Props): React.Node {
  const [web3Context, setWeb3Context] = useState({
    ready: false,
    provider: infuraProvider,
    updateProvider: (_provider) => {
      setWeb3Context((prevState) => {
        let temp = Object.assign({}, prevState); 
        temp.provider = _provider;
        temp.ready = true;
        return temp
      })
    },
    updateAddress: (_address) => {
      setWeb3Context((prevState) => {
        let temp = Object.assign({}, prevState); 
        temp.address = _address;
        temp.updateAddress = () => {};
        return temp
      })
    }
  });
  const walletContext = useWalletContext(web3Context.address)

  return (
    <React.StrictMode>
      <Web3Context.Provider value={web3Context}>
        <WalletContext.Provider value={walletContext}>
          <Router>
            <Switch>
              <Route exact path="/400" component={Error400} />
              <Route exact path="/401" component={Error401} />
              <Route exact path="/403" component={Error403} />
              <Route exact path="/404" component={Error404} />
              <Route exact path="/500" component={Error500} />
              <Route exact path="/503" component={Error503} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route exact path="/transactions" component={TransactionPage} />
              <Route exact path="/payments" component={PaymentsPage} />
              <Route exact path="/payments/disperse" component={DispersePaymentPage} />
              <Route exact path="/payments/vesting" component={VestingPaymentPage} />
              <Route exact path="/claim" component={ClaimTokenPage} />
              <Redirect to='/payments' />
              <Route component={Error404} />
            </Switch>
          </Router>
        </WalletContext.Provider>
      </Web3Context.Provider>
    </React.StrictMode>
  );
}

export default App;
