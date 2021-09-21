import Web3 from "web3";
import { INFURA_LINK } from "../config";

export default async function GetBalanceOfERC20ForAddress(contractAddress,abi,publicKey,decimals=18) {
    const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_LINK));
    let erc20Contract = await new web3.eth.Contract(abi,contractAddress);
    var balance = await erc20Contract.methods.balanceOf(publicKey).call({ from: publicKey });
    balance = parseFloat(balance)/ (10**decimals) // if not using pausdc (6 decimals ) - will need to change this to using bignumbers
    return balance
}