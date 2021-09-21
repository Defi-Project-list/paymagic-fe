
import { ethers } from "ethers";
import _ from "lodash";

export default async function getAccountBalances(address, tokenPrices, contracts, tokens=[], decimals=[], allowances=[], depositedToken=[]) {
  let _balances = {ready: false};
  console.log('hitting')
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
