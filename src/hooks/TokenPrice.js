import { useState, useEffect } from "react";
import axios from "axios";

function getPriceAddressForToken(symbol) {
  const addresses = {
    dai: "0x6b175474e89094c44da98b954eedeac495271d0f",
    cdai: "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    cusdc: "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    ausdc: "0x9ba00d6856a4edf4665bca2c2309936572473b7e",
    usdc: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
  }
  return addresses[symbol]
}

export function useTokenPrices(mainnetProvider, tokenSymbols) {
  const [prices, setPrices] = useState({});
  useEffect(() => {
    async function getPrices() {
      let temp = {};
      try {
        for (let i = 0; i < tokenSymbols.length; i++) {
          const contractAddress = getPriceAddressForToken(tokenSymbols[i]);
          const url = `https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=${contractAddress}&vs_currencies=usd%2Ceth`
          const response = await axios.get(url);
          const data = response.data[contractAddress] ? response.data[contractAddress] : {}
          temp[tokenSymbols[i]] = data;
        }
        setPrices(temp);
      } catch (error) {
        console.error(error);
      }
    }
    getPrices();
  },[]);

  return prices;
}
