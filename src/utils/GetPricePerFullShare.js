import Web3 from "web3";
import { INFURA_LINK } from "../config";

export default async function GetBalancePricePerFullShare(contractAddress,abi,decimals=18) {
    const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_LINK));
    let erc20Contract = await new web3.eth.Contract(abi,contractAddress);
    let pricePerFullShare = await erc20Contract.methods.getPricePerFullShare().call();
    pricePerFullShare = await web3.utils.fromWei(pricePerFullShare)
    return pricePerFullShare
}