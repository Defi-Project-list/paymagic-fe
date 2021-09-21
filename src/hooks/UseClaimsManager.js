import { useState, useEffect } from "react";
import _ from 'lodash';

export async function getClaimsManager(contracts, claimsContractId) {
  let _data = { loading: true };

  if(contracts) {
    try {
      let claimsStatus = await contracts[claimsContractId]["status"](...[]);
      let claimsStatusDisplay = claimsStatus === 0 ? 'Ready' : 
        claimsStatus === 1 ? 'Investigating' :
          claimsStatus === 2 ? 'Paid' : 'Unknown';
      let investigationPeriod = await contracts[claimsContractId]["investigationPeriod"](...[]);
      // let investigationPeriodDisplay = ;
      let currentInvestigationPeriodEnd = await contracts[claimsContractId]["currentInvestigationPeriodEnd"](...[]);
      let activePayoutEvent = await contracts[claimsContractId]["activePayoutEvent"](...[]);

      _data = {
        claimsStatus: claimsStatus,
        claimsStatusDisplay: claimsStatusDisplay,
        investigationPeriod: investigationPeriod,
        currentInvestigationPeriodEnd: currentInvestigationPeriodEnd,
        activePayoutEvent: activePayoutEvent
      };
    } catch (error) {
      console.error(error);
    }
    _data.loading = false;
  }
  return _data
}

export function useClaimsManager(
  item,
  contracts) {
  const [output, setOutput] = useState({loading: true});
  useEffect(() => {
    async function run() {
      const tempData = await getClaimsManager(
        contracts,
        item.claimsContractId
      );
      setOutput(tempData);
    }

    if(!_.isEmpty(contracts)) {
      run();       
    }
  },[contracts]);

  return output;
}