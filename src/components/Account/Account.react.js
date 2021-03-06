import React, { useCallback, useEffect, useState, useContext } from "react";
// import { Button } from "antd";
import {
  Button,
  Text
} from "tabler-react";

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import {  Web3Provider } from "@ethersproject/providers";
import { useUserAddress } from "eth-hooks";
import { isAddress, shortenAddress } from "../../utils"
import { Web3Context } from '../../App.react';
import { INFURA_ID, NETWORK } from "../../config";

// const mainnetProvider = new JsonRpcProvider("https://mainnet.infura.io/v3/"+INFURA_ID)
// const localProviderUrl = "http://"+window.location.hostname+":8545";
// const localProviderUrlFromEnv = process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : localProviderUrl;
// const localProvider = new JsonRpcProvider(localProviderUrlFromEnv);

let hasNotRun = true

function Account() {
  const [injectedProvider, setInjectedProvider] = useState();
  const web3Context = useContext(Web3Context);
  const modalButtons = [];
  let address = useUserAddress(injectedProvider);
  if(web3Context.ready && hasNotRun && address !== "") {
    web3Context.updateAddress(address);
    hasNotRun = false
  }
  
  const loadWeb3Modal = useCallback(async () => {
    const provider = await web3Modal.connect();
    const newProvider = new Web3Provider(provider);
    let userNetwork = await newProvider.getNetwork();
    
    userNetwork.name = (userNetwork.name === 'homestead') ? 'mainnet' : userNetwork.name

    if(NETWORK !== userNetwork.name) {
      console.error(`${NETWORK} !== user's network: ${userNetwork.name}`)
      alert(`Wrong network! Please connect to ${NETWORK}`);
    } else {
      web3Context.updateProvider(newProvider);
      setInjectedProvider(newProvider);
    }
  }, [setInjectedProvider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      loadWeb3Modal();
    }
  }, [loadWeb3Modal]);

  if (web3Modal) {
    if (web3Modal.cachedProvider) {
      modalButtons.push(
        <div className="text-center">
          <Text.Small>{isAddress(address) ? shortenAddress(address) : ''}</Text.Small>
          <Button
            size="sm"
            color="secondary"
            outline
            RootComponent="a"
            className="d-none d-md-flex"
            key="logoutbutton"
            onClick={logoutOfWeb3Modal}
            square
          >
            Disconnect 
          </Button>
        </div>
      );
    } else {
      modalButtons.push(
        <Button
          size="md"
          color="purple"
          className="d-none d-md-flex"
          key="loginbutton"
          onClick={loadWeb3Modal}
        >
          Connect Wallet
        </Button>
      );
    }
  }

  return (
    <React.Fragment>
      {modalButtons}
    </React.Fragment>
  );
}

/*
  Web3 modal helps us "connect" external wallets:
*/
const web3Modal = new Web3Modal({
  // network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions: {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: INFURA_ID,
      },
    },
  },
});

const logoutOfWeb3Modal = async () => {
  await web3Modal.clearCachedProvider();
  setTimeout(() => {
    window.location.reload();
  }, 1);
};

export default Account;