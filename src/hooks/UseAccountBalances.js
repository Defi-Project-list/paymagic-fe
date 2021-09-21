import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import _ from "lodash";
import { usePoller } from "eth-hooks";

export async function getAccountBalances(address, tokenPrices, contracts, tokens=[], decimals=[], allowances=[], depositedToken=[]) {
  let _balances = {ready: false};
  if(!_.isEmpty(address) && !_.isEmpty(contracts)) {
    try {
      for (let i = 0; i < tokens.length; i++) {
        let tokenBalance = await contracts[tokens[i]]["balanceOf"](...[address]);
        let tokenAllowance = await contracts[tokens[i]]["allowance"](...[address, allowances[i]]);
        let tokenBalanceUsd = 0;
        let tokenExchangeRate = 1;
        let depositedTokenBalance = 0;
        let depositedTokenSymbol = '';
        let depositedTokenBalanceUsd = 0;

        if(tokenPrices[tokens[i]] && tokenPrices[tokens[i]]["usd"]) {
          tokenBalanceUsd = ethers.utils.formatUnits(tokenBalance.toString(),decimals[i]) * tokenPrices[tokens[i]]["usd"];
        }

        let temp
        if(depositedToken[i]) {
          try {
            temp = await contracts[tokens[i]]["getPricePerFullShare"](...[]);
            tokenExchangeRate = ethers.utils.formatUnits(temp,18);
          } catch (error) {
            console.error("TokenExchangeRateError", tokens[i], error);
          }

          depositedTokenBalance = tokenBalance.mul(parseInt(tokenExchangeRate));
          depositedTokenSymbol = depositedToken[i];
          if(tokenPrices[depositedToken[i]] && tokenPrices[depositedToken[i]]["usd"]) {
            depositedTokenBalanceUsd = 
              ethers.utils.formatUnits(depositedTokenBalance,decimals[i]) * 
                tokenPrices[depositedTokenSymbol]["usd"]
          }
        }

        _balances[tokens[i]] = {
          token: tokenBalance.toString(),
          usd: tokenBalanceUsd,
          allowance: tokenAllowance,
          tokenExchangeRate: tokenExchangeRate,
          depositedTokenBalance: depositedTokenBalance,
          depositedTokenSymbol: depositedTokenSymbol,
          depositedTokenBalanceUsd: depositedTokenBalanceUsd
        };
      };
      _balances.ready = true;
    } catch (error) {
      console.error(error);
    }
  }
  return _balances
}

export function useAccountBalances(
  requery,
  web3Context,
  tokenPrices,
  contracts,
  tokens=[],
  decimals=[],
  allowances=[],
  depositedToken=[]) {
  const [balances, setBalances] = useState({ready: false});
  useEffect(() => {
    async function run() {
      const bal = await getAccountBalances(
        web3Context.address,
        tokenPrices,
        contracts,
        tokens,
        decimals,
        allowances,
        depositedToken
      );
      console.log(bal)
      setBalances(bal);
    }
    run();      
  },[contracts, web3Context,requery]);

  return balances;
}

export function usePolledAccountBalances(
  web3Context,
  tokenPrices,
  contracts,
  tokens=[],
  decimals=[],
  allowances=[],
  depositedToken=[]) {
  const [balances, setBalances] = useState({ready: false});
  async function run() {
    if(!_.isEmpty(contracts) && !_.isEmpty(tokenPrices) && web3Context.ready) {
      setBalances({ready: false});
      const bal = await getAccountBalances(
        web3Context.address,
        tokenPrices,
        contracts,
        tokens,
        decimals,
        allowances,
        depositedToken
      );
      setBalances(bal);
    }
  }
  usePoller(run, 2000);      

  return balances;
}