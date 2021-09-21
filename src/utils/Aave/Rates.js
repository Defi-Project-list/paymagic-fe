import { aavev1client } from "./Aavev1Client.js"
import { aavev2client } from "./Aavev2Client.js"
import { V1_RESERVES, V2_RESERVES } from './Query.js'

import BigNumber from "bignumber.js";

const setOps = (opsArray, element) => {
    let borrow = round(parseRay(element.variableBorrowRate), 2)
    let stableborrow = round(parseRay(element.stableBorrowRate), 2)
    let deposit = round(parseRay(element.liquidityRate), 2)
    if (deposit > opsArray[0]) {
        opsArray[0] = deposit
        opsArray[1] = element.symbol
    }
    if (borrow < opsArray[2]) {
        opsArray[2] = borrow
        opsArray[3] = element.symbol
    }
    if (stableborrow < opsArray[4] && stableborrow > 0) {
        opsArray[4] = stableborrow
        opsArray[5] = element.symbol
    }
}

const parseRay = (input) => {
    return input / 10000000000000000000000000
}

const round = (value, decimals) => {
    return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

const getAppend = (element) => {
    console.log(element)
    return [round(parseRay(element.liquidityRate), 2), round(parseRay(element.variableBorrowRate), 2), round(parseRay(element.stableBorrowRate), 2)]
}


/*
    Use this if want to fetch multiple v1 and v2 rates
*/  
export async function getAllAaveRates() {
    try {
        const v1Reserves = await aavev1client.query({
            query: V1_RESERVES,
            fetchPolicy: "cache-first",
        });

        const v2Reserves = await aavev2client.query({
            query: V2_RESERVES,
            fetchPolicy: "cache-first",
        });
        const v1Data = v1Reserves.data.reserves
        const v2Data = v2Reserves.data.reserves
        let reserveObj = { "usdc": [[], []], "usdt": [[], []], "dai": [[], []], "tusd": [[], []], "susd": [[], []], "busd": [[], []], "gusd": [[0, 0, 0], []] }
        let v1ops = [0.00, "na", 100.00, "na", 100.00, "na"]
        let v2ops = [0.00, "na", 100.00, "na", 100.00, "na"]
        v1Data.forEach(element => {
            if (element.symbol === "USDC") {
                reserveObj["usdc"][0] = getAppend(element)
                setOps(v1ops, element)
            }
            else if (element.symbol === "USDT") {
                reserveObj["usdt"][0] = getAppend(element)
                setOps(v1ops, element)
            }
            else if (element.symbol === "DAI") {
                reserveObj["dai"][0] = getAppend(element)
                setOps(v1ops, element)
            }
            else if (element.symbol === "TUSD") {
                reserveObj["tusd"][0] = getAppend(element)
                setOps(v1ops, element)
            }
            else if (element.symbol === "SUSD") {
                reserveObj["susd"][0] = getAppend(element)
                setOps(v1ops, element)
            }
            else if (element.symbol === "BUSD") {
                reserveObj["busd"][0] = getAppend(element)
                setOps(v1ops, element)
            }
        })
        v2Data.forEach(element => {
            if (element.symbol === "USDC") {
                reserveObj["usdc"][1] = getAppend(element)
                setOps(v2ops, element)
            }
            else if (element.symbol === "USDT") {
                reserveObj["usdt"][1] = getAppend(element)
                setOps(v2ops, element)
            }
            else if (element.symbol === "DAI") {
                reserveObj["dai"][1] = getAppend(element)
                setOps(v2ops, element)
            }
            else if (element.symbol === "TUSD") {
                reserveObj["tusd"][1] = getAppend(element)
                setOps(v2ops, element)
            }
            else if (element.symbol === "SUSD") {
                reserveObj["susd"][1] = getAppend(element)
                setOps(v2ops, element)
            }
            else if (element.symbol === "BUSD") {
                reserveObj["busd"][1] = getAppend(element)
                setOps(v2ops, element)
            }
            else if (element.symbol === "GUSD") {
                reserveObj["gusd"][1] = getAppend(element)
                setOps(v2ops, element)
            }
        })
        return [reserveObj, v1ops, v2ops]
        //return [false, reserveObj, aavetrageOps]
    }
    catch (error) {
        let errorMessage = ""
        if (error.response) {
            errorMessage = "Received " + error.response.status + " error in AAVE Graph API response. Try refreshing data again."
        } if (error.request) {
            errorMessage = "Received no response from AAVE Graph API request. Try refreshing data again."
        }
        else {
            errorMessage = "AAVE Graph API Error, try refreshing data again. Message: " + error.message
        }
        return [true, errorMessage]
    }
}

/*
    Use this if want to fetch a specific token rate on V2
*/  
export async function getAaveV2Rate(tokenSymbol) {
    try {
        const v2Reserves = await aavev2client.query({
            query: V2_RESERVES,
            fetchPolicy: "cache-first",
        });
        const v2Data = v2Reserves.data.reserves
        let v2RequestedDataObject = v2Data.filter(item => item.symbol.toLowerCase() === tokenSymbol.toLowerCase())
        let liquidityRateRay = new BigNumber(v2RequestedDataObject[0].liquidityRate)
        console.log(liquidityRateRay)
        let APY = liquidityRateRay.div(Number(10**25))
        return Number(APY.toString())
    }
    catch (error) {
        let errorMessage = ""
        if (error.response) {
            errorMessage = "Received " + error.response.status + " error in AAVE Graph API response. Try refreshing data again."
        } if (error.request) {
            errorMessage = "Received no response from AAVE Graph API request. Try refreshing data again."
        }
        else {
            errorMessage = "AAVE Graph API Error, try refreshing data again. Message: " + error.message
        }
        return [true, errorMessage]
    }
}