import { useState, useEffect } from "react";
import _ from 'lodash';

export async function getCapped(contracts, item) {
  let _data = { loading: true };
  if(contracts) {
    try {
      
      let pTokenIsCapped = await contracts[item.pTokenSymbol]["isCapped"]();
      let pTokenCap = null
      if(pTokenIsCapped){
          pTokenCap =  await contracts[item.pTokenSymbol]["maxDeposit"]();
          pTokenCap = Number(pTokenCap.toLocaleString()) / (1*10**item.pTokenDecimals)
      }

      let shieldTokenIsCapped = await contracts[item.shieldTokenSymbol]["isCapped"]();
      let shieldTokenCap = null
      if(shieldTokenIsCapped){
          shieldTokenCap =  await contracts[item.shieldTokenSymbol]["maxDeposit"]();
          shieldTokenCap = Number(shieldTokenCap.toLocaleString()) / (1*10**item.shieldTokenDecimals)
          console.log(shieldTokenCap)
      }
    
      _data = {
        pTokenIsCapped: pTokenIsCapped,
        pTokenCap: pTokenCap,
        shieldTokenIsCapped: shieldTokenIsCapped,
        shieldTokenCap: shieldTokenCap,
      };
    } catch (error) {
      console.error(error);
    }
    _data.loading = false;
  }
  return _data
}

export function useCapped(
  item,
  contracts
) {
  const [output, setOutput] = useState({loading: true});
  useEffect(() => {
    async function run() {
      const tempData = await getCapped(
        contracts,
        item
      );
      setOutput(tempData);
    }

    if(!_.isEmpty(contracts)) {
      run();       
    }
  },[contracts]);

  return output;
}