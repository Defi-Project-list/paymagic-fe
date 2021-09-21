export { default as useUserProvider } from "./UserProvider";
export { default as useGasPrice } from "./GasPrice";

export { default as useContractLoader } from "./ContractLoader";
export { default as useContractReader } from "./ContractReader";
// export { default as useCustomContractLoader } from "./CustomContractLoader";
// export { default as useExternalContractLoader } from "./ExternalContractLoader";
// export { default as useContractExistsAtAddress } from "./ContractExistsAtAddress";
// export { default as useExchangePrice } from "./ExchangePrice";

export { useTokenPrices } from "./TokenPrice";
export { default as useLendingMarketMetrics } from "./LendingMarketMetrics";
export {
	getCompoundDaiCoverageMetrics,
	useCompoundDaiCoverageMetrics,
	usePolledCompoundDaiCoverageMetrics } from "./UseCompoundDaiCoverageMetrics";
export{
	useAaveUsdcCoverageMetrics,
} from "./UseAaveUsdcCoverageMetrics";

export {useCapped} from "./UseCapped";

export {
	getAccountBalances,
	useAccountBalances,
	usePolledAccountBalances } from "./UseAccountBalances";
export { getClaimsManager, useClaimsManager } from "./UseClaimsManager";
// export { default as usePoller } from "./Poller";
// export { default as useBalance } from "./Balance";
// export { default as useEventListener } from "./EventListener";
// export { default as useLocalStorage } from "./LocalStorage";
// export { default as useLookupAddress } from "./LookupAddress";
// export { default as useResolveName } from "./ResolveName";
// export { default as useNonce } from "./Nonce";
export { useAddressBalances } from "./UseAddressBalances";
export {useInterval} from "./UseInterval";
export {useWalletContext, getAssets, getDeposits, getTxs} from "./UseWalletContext";
