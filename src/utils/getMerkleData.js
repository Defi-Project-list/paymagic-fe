import { create } from "ipfs-http-client";
import axios from "axios";

export async function getMerkleData(path) {
  const { data } = await axios.get(`https://ipfs.io/ipfs/${path}`);
  return data;
}

const ipfs = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

export const addTreeToIPFS = async tree => {
  const result = await ipfs.add(tree);
  const ipfsURL = `https://gateway.ipfs.io/ipfs/${result.path}`;
  console.log("ipfsURL", ipfsURL);
  return result;
  // const addresses = getAddresses();
  // const addressArray = Object.assign(
  //   addresses.map((v) => ({ address: v, signed: false }))
  // );

  // actions.addContract(result.path, addressArray);
  // setIsDeployed(true);
};
