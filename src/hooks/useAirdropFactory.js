import { useState, useEffect } from "react";
import { Contract } from "ethers";

import data from "../data/kovanPaymagic";

export function useAirdropFactory(provider) {
  const [contract, setContract] = useState(null);
  const { address, abi } = data.contracts.AirdropFactory;

  useEffect(() => {
    if (provider) setContract(new Contract(address, abi, provider.getSigner()));
  }, [provider]);

  return contract;
}
