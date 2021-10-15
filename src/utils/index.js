import moment from 'moment';
import _ from 'lodash';
import axios from 'axios';
import { ethers, Contract } from "ethers";
import { getAddress as getAddressEthers } from '@ethersproject/address'
// import { AddressZero } from '@ethersproject/constants'
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers'
// import { BigNumber } from '@ethersproject/bignumber'
// import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
// import { ROUTER_ADDRESS } from '../constants'
// import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHER } from '@uniswap/sdk'
// import { TokenAddressMap } from '../state/lists/hooks'
// import { INFURA_ID } from "./constants";
import { S3_ASSETS, BLOCK_EXPLORER_LINK } from "../config";

export { default as GetBalanceOfERC20ForAddress } from "./GetBalanceOfERC20ForAddress";
export { default as getPricePerFullShare } from "./GetPricePerFullShare";
export { default as GetInterest } from "./GetInterest";
export {default as GetAccountBalances} from "./GetAccountBalances";


export { default as Transactor } from "./Transactor";

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Get tokenLogo URI from address
export function getTokenIconUriFromAddress(tokenAddress) {
  const route = `/blockchains/ethereum/assets`
  const address = getAddressEthers(tokenAddress)

  if(tokenAddress === `0x0000000000000000000000000000000000000000`)
    return getTokenIconUriFromSymbol('ETH')

  return `${S3_ASSETS}${route}/${address}/logo.png`
}

// Get token data from address
export async function getTokenDataFromAddress(tokenAddress) {
  const route = `/blockchains/ethereum/assets`
  const address = getAddressEthers(tokenAddress)

  try {
    const response = await axios.get(`${S3_ASSETS}${route}/${address}/info.json`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Request-Headers": "*",
          "Access-Control-Request-Method": "GET"
        }
      }
    );
    return response.body
  } catch (error) {
    console.error(error);
    return {
      "name": "USD Coin",
      "website": "https://centre.io/usdc",
      "description": "USDC is a fully collateralized US dollar stablecoin, an Ethereum powered coin and is the brainchild of CENTRE, an open source project bootstrapped by contributions from Circle and Coinbase.",
      "explorer": "https://etherscan.io/token/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      "type": "ERC20",
      "symbol": "USDC",
      "decimals": 6,
      "status": "active",
      "id": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"
    }
  }
}

// Get tokenLogo symbol from address
export function getTokenIconUriFromSymbol(symbol) {
  return `/assets/${symbol}-icon.png`
}

// // returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return ethers.utils.isAddress(value)
    // return getAddressEthers(value)
  } catch {
    return false
  }
}

// // returns the checksummed address if the address is valid, otherwise returns input
export function getAddress(value: any): string | false {
  try {
    return getAddressEthers(value)
  } catch {
    return value
  }
}

export async function isToken(value: any, web3Context: any, data: any): boolean | false {
  if(isAddress(value)){
    try {
      const _contract = new Contract(
        getAddress(value),
        data.contracts['ERC20']['abi'],
        web3Context.provider.getSigner()
      );
      const _symbol = await _contract.symbol()
      const _decimals = await _contract.decimals()
      return true
    }
    catch(err) {
      return false
    }    
  }

  return false
}

const ETHERSCAN_PREFIXES = {
  1: '',
  3: 'ropsten.',
  4: 'rinkeby.',
  5: 'goerli.',
  42: 'kovan.'
}

export function getBlockExplorerLink(
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  const prefix = BLOCK_EXPLORER_LINK

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'block': {
      return `${prefix}/block/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

export function getEtherscanLink(
  chainId: ChainId,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  const prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}etherscan.io`

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'block': {
      return `${prefix}/block/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = getAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}


// Input tx to have 0x + 4 characters at start and end
export function shortenTx(tx: string, chars = 4): string {
  return `${tx.substring(0, chars + 2)}...${tx.substring(66 - chars)}`
}

// add 10%
// export function calculateGasMargin(value: BigNumber): BigNumber {
//   return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
// }

// // converts a basis points value to a sdk percent
// export function basisPointsToPercent(num: number): Percent {
//   return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
// }

// export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
//   if (slippage < 0 || slippage > 10000) {
//     throw Error(`Unexpected slippage value: ${slippage}`)
//   }
//   return [
//     JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
//     JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000))
//   ]
// }

// // account is not optional
// export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
//   return library.getSigner(account).connectUnchecked()
// }

// // account is optional
// export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
//   return account ? getSigner(library, account) : library
// }

// // account is optional
// export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
//   if (!isAddress(address) || address === AddressZero) {
//     throw Error(`Invalid 'address' parameter '${address}'.`)
//   }

//   return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
// }

// // account is optional
// export function getRouterContract(_: number, library: Web3Provider, account?: string): Contract {
//   return getContract(ROUTER_ADDRESS, IUniswapV2Router02ABI, library, account)
// }

// export function escapeRegExp(string: string): string {
//   return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
// }

// export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
//   if (currency === ETHER) return true
//   return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
// }

export function displayAmount(amount, decimals) {
  amount = amount / (10 ** decimals)
  return Math.round(amount * 10000) / 10000
}

export function displayTxDatetime(unixTime) {
  return moment.unix(unixTime).fromNow();
}