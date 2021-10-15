import { useState, useEffect } from "react";
import { Contract, BigNumber } from "ethers";

import data from "../data/kovanPaymagic";

export function useMerkleDistributor(
  provider,
  airdropFactory,
  airdropIndex = 0
) {
  const [contract, setContract] = useState(null);
  const { abi } = data.contracts.MerkleDistributor;

  useEffect(() => {
    const getDistributorContract = async () => {
      const distributorAddress = await airdropFactory.getAirdropAddress(
        airdropIndex.toString()
      );
      console.log(distributorAddress);
      setContract(new Contract(distributorAddress, abi, provider.getSigner()));
    };
    if (provider && airdropFactory) {
      getDistributorContract();
    }
  }, [provider, airdropIndex]);

  return contract;
}
