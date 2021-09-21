import Web3 from "web3";
import { INFURA_LINK } from "../config";

export default async function GetInterest(contractAddress,abi,publicKey,decimals=18,interestToken) {
    const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_LINK));
    // get the users erc20 balance of paUSDC
    let erc20Contract = await new web3.eth.Contract(abi,contractAddress);
    var balance = await erc20Contract.methods.balanceOf(publicKey).call({ from: publicKey });
    console.log(balance)
    // get the amount of interest ( ausdc ) in the paUSDC token
    var interest = await erc20Contract.methods.balanceOf(interestToken).call()

    // divide this by the portion of the paUSDC pool they own (balanceOfDepositToken / their balance)
    // return this

    var totalPoolBalance = await erc20Contract.methods.balance().call()

    var usersShare = balance/totalPoolBalance
    
    console.log(`interest : ${interest} users share: ${usersShare} `)
    return 0
  
}