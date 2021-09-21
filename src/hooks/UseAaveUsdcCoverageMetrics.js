import { useState, useEffect } from "react";
import _ from 'lodash';
import numeral from 'numeral';
import { ethers } from "ethers";
import { usePoller } from "eth-hooks";

import {  getAaveV2Rate } from '../utils/Aave'


// async function getProtocolAPR(item) {
//   let apr = 0;
//   try{
//     apr = await getAaveV2Rate(item.coreTokenSymbol)
//   }catch(e){
//     console.log(e)
//   }
//   return apr;
// }


export async function getAaveUsdcCoverageMetrics(item, contracts, tokenPrices, lendingMarket) {

  let tokenAPR = await getAaveV2Rate(item.coreTokenSymbol);
  console.log(item)
  let _coverage = {
    loading: true,
    pTokenTotalDepositTokens: 0,
    pTokenTotalDepositUsd: 0,
    shieldTokenTotalDepositTokens: 0,
    shieldTokenTotalDepositUsd: 0,
    coverageRatio: 100,
    coverageRatioDisplay: '100%',
    coverageFeeAPR: item.maxBlockFeeAPR,
    tempCoverage: 0,
    protocolAPR: 0,
    netAdjustedAPR: tokenAPR - item.maxBlockFeeAPR
  };


  if(!_.isEmpty(contracts)) {
    try {
      _coverage.pTokenTotalDepositTokens = await contracts[item.underlyingTokenSymbol]["balanceOf"](...[item.pTokenAddress]);
      _coverage.pTokenTotalDepositUsd = parseFloat(ethers.utils.formatUnits(_coverage.pTokenTotalDepositTokens,item.pTokenDecimals)) * tokenPrices[item.underlyingTokenSymbol]['usd'];
      _coverage.shieldTokenTotalDepositTokens = await contracts[item.reserveTokenSymbol]["balanceOf"](...[item.shieldTokenAddress]);
      _coverage.shieldTokenTotalDepositUsd = parseFloat(ethers.utils.formatUnits(_coverage.shieldTokenTotalDepositTokens,item.shieldTokenDecimals)) * tokenPrices[item.reserveTokenSymbol]['usd'];
      _coverage.coverageRatio = _coverage.shieldTokenTotalDepositUsd / _coverage.pTokenTotalDepositUsd;
      _coverage.coverageRatioDisplay = _coverage.coverageRatio > 1 ? '100%' : `${numeral(_coverage.coverageRatio * 100).format('0.00')}%`;
      _coverage.coverageFeeAPR = _coverage.coverageRatio > 1 ? item.maxBlockFeeAPR : item.maxBlockFeeAPR / _coverage.coverageRatio;
      _coverage.netAdjustedAPR = parseFloat(tokenAPR) + parseFloat(_coverage.protocolAPR) - parseFloat(_coverage.coverageFeeAPR);
      _coverage.loading = false;
      // console.log('----Coverage----')
      // console.log('pTokens',_coverage.pTokenTotalDepositTokens.toString())
      // console.log('Price',_coverage.pTokenTotalDepositUsd)
      // console.log('shieldTokens',_coverage.shieldTokenTotalDepositTokens.toString())
      // console.log('Price',_coverage.shieldTokenTotalDepositUsd)
      // console.log('Coverage',_coverage.coverageRatio)
      // console.log('Supply APR',lendingMarket.apr)
      // console.log('protocolAPR',_coverage.protocolAPR)
      // console.log('CoverageFee',_coverage.coverageFeeAPR)
      // console.log('Adjusted APR',_coverage.netAdjustedAPR)

    } catch (error) {
      console.error(error);
    }
  }
  return _coverage
}

export function useAaveUsdcCoverageMetrics(
  item,
  contracts,
  tokenPrices,
  lendingMarket
) {
  const [metrics, setMetrics] = useState({
    loading: true,
    pTokenTotalDepositTokens: 0,
    pTokenTotalDepositUsd: 0,
    shieldTokenTotalDepositTokens: 0,
    shieldTokenTotalDepositUsd: 0,
    coverageRatio: 100,
    coverageRatioDisplay: '100%',
    coverageFeeAPR: 0,
    tempCoverage: 0,
    compAPR: 0,
    netAdjustedAPR: 0
  });
  useEffect(() => {
    async function run() {
      const data = await getAaveUsdcCoverageMetrics(
        item,
        contracts,
        tokenPrices,
        lendingMarket
      );
      setMetrics(data);
    }

    if(!_.isEmpty(contracts) && !_.isEmpty(tokenPrices)) {
      run();       
    }
  },[contracts, tokenPrices]);

  return metrics;
}

export function usePolledAaveUsdcCoverageMetrics(
  item,
  contracts,
  tokenPrices,
  lendingMarket) {
  const [metrics, setMetrics] = useState({
    loading: true,
    pTokenTotalDepositTokens: 0,
    pTokenTotalDepositUsd: 0,
    shieldTokenTotalDepositTokens: 0,
    shieldTokenTotalDepositUsd: 0,
    coverageRatio: 100,
    coverageRatioDisplay: '100%',
    coverageFeeAPR: 0,
    tempCoverage: 0,
    compAPR: 0,
    netAdjustedAPR: 0
  });

  async function run() {
    if(!_.isEmpty(contracts) && !_.isEmpty(tokenPrices)) {
      const data = await getAaveUsdcCoverageMetrics(
        item,
        contracts,
        tokenPrices,
        lendingMarket
      );
      setMetrics(data);
    }
  }
  usePoller(run, 2000);

  return metrics;
}
