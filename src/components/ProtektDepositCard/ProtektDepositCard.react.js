// @flow

import React, { useState, useEffect, useContext, useReducer, Fragment } from 'react';
import numeral from 'numeral';
import { ethers } from "ethers";
import _ from "lodash";

import Account from "../Account";

import { Accordion, Card } from "react-bootstrap";

import ContentLoader from 'react-content-loader'

import DepositWithdrawTokensForm from "../DepositWithdrawTokensForm";
import ProtektHoldingSection from "./ProtektHoldingSection.react";

import {
  Grid,
  Header,
  Dimmer,
  Button,
  Form,
  Avatar,
  Text,
  Tag
} from "tabler-react";

import {
  useGasPrice,
  useCompoundDaiCoverageMetrics,
  useContractLoader,
  useClaimsManager,
  useInterval,
  useAaveUsdcCoverageMetrics,
  useCapped
} from "../../hooks";
import { GetAccountBalances, Transactor } from "../../utils";
import {Web3Context} from '../../App.react';
import { infuraProvider } from "../../config";

const MyLoader = () => (
  <ContentLoader
    height={20}
    width={30}>
    <rect x="0" y="0" rx="0" ry="0" width="30" height="20" />
  </ContentLoader>
)

const isLoading = (loading, node) => {
  if(!loading) {
    return node;
  }
  return <MyLoader />;
}

type Props = {|
  +children?: React.Node,
  +item?: Object,
  +lendingMarketMetrics?: Object,
  +tokenPrices?: Object,
  +contracts: Object,
|};

function ProtektDepositCard({
  children,
  item,
  lendingMarketMetrics,
  tokenPrices,
}: Props): React.Node {
  const web3Context = useContext(Web3Context);
  const gasPrice = useGasPrice("fast");
  const contracts = useContractLoader(web3Context.provider);

  // below should be abstracted to a function to set this when more contracts
  const coverage = item.id == 'Aave-USDC-Manual-kovan' ? useAaveUsdcCoverageMetrics(
    item,
    contracts,
    tokenPrices,
    lendingMarketMetrics[1]
  ) : useCompoundDaiCoverageMetrics(
    item,
    contracts,
    tokenPrices,
    lendingMarketMetrics[0]
  );

  const claimsManager = useClaimsManager(
    item,
    contracts
  );

  const capped = useCapped(
    item,
    contracts
  );


  const [accountBalances, setAccountBalances] = useState({ready:false})

  useInterval(async () => {
    (async function(){
      const newAccountBalances = await GetAccountBalances(
        web3Context.address,
        tokenPrices,
        contracts,
        [item.underlyingTokenSymbol, item.pTokenSymbol, item.reserveTokenSymbol, item.shieldTokenSymbol, item.coreTokenSymbol],
        [item.underlyingTokenDecimals, item.pTokenDecimals, item.reserveTokenDecimals, item.shieldTokenDecimals, item.coreTokenDecimals],
        [item.pTokenAddress, item.pTokenAddress, item.shieldTokenAddress, item.shieldTokenAddress, item.pTokenAddress],
        [null, item.underlyingTokenSymbol, null, item.reserveTokenSymbol, null]
      )

      setAccountBalances({...newAccountBalances})
    })();
  }, 5000)


  async function handleDepositTx(amount, cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      let weiAmount = ethers.utils.parseUnits(amount.toString(), item.coreTokenDecimals);
      const allowanceAmount = await contracts[item.coreTokenSymbol]["allowance"](...[web3Context.address, item.pTokenAddress]);

      if(weiAmount.gt(allowanceAmount)) {
        tx(contracts[item.coreTokenSymbol]["approve"](item.pTokenAddress, ethers.utils.parseUnits('1000000',item.coreTokenDecimals)), cb);
      } else {
        console.log(contracts[item.pTokenSymbol])
        console.log(item.coreTokenSymbol)
       if(item.coreTokenSymbol === "dai" || item.coreTokenSymbol === 'usdc'){
          tx(contracts[item.pTokenSymbol]["depositCoreTokens(uint256)"](weiAmount), cb);
        }else{
          console.log('hit')
          tx(contracts[item.pTokenSymbol]["deposit"](weiAmount), cb);
        }
        
      }
    }
  }

  async function handleWithdrawTx(amount, cb) {
    if(web3Context.ready && amount > 0) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      let weiAmount = ethers.utils.parseUnits(amount.toString(), item.pTokenDecimals);
      console.log(`wei amount: ${weiAmount}`)
      console.log(contracts[item.pTokenSymbol])
      tx(contracts[item.pTokenSymbol]["withdraw"](weiAmount));
    }
  }

  async function handleSubmitClaimTx(cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      tx(contracts[item.claimsContractId]["submitClaim"]());
    }
  }
  
  function renderDepositCard() {
    return (
      <Card.Body>
        <Grid.Row>
          <Grid.Col width={5} >
            <Header.H4>
              Start earning safely
            </Header.H4>
            <DepositWithdrawTokensForm
              item={item}
              accountBalances={accountBalances}
              web3Context={web3Context}
              tokenPrices={tokenPrices}
              contracts={contracts}
              handleSubmit={handleDepositTx}
              label={`Your wallet: ${numeral(ethers.utils.formatUnits(accountBalances[item.coreTokenSymbol]["token"],item.coreTokenDecimals)).format('0.00')} ${item.coreTokenSymbol.toUpperCase()}`}
              buttonIcon={ accountBalances[item.coreTokenSymbol] && 
                            accountBalances[item.coreTokenSymbol]["allowance"] &&
                              accountBalances[item.coreTokenSymbol]["allowance"].gt(0) ?
                                "download" : 
                                  "toggle-left"
                        }
              buttonLabel={ accountBalances[item.coreTokenSymbol] && 
                        accountBalances[item.coreTokenSymbol]["allowance"] &&
                          accountBalances[item.coreTokenSymbol]["allowance"].gt(0) ?
                            "Deposit" : 
                              "Approve"
                    }
              disabled= {accountBalances[item.coreTokenSymbol]["token"] == 0 ? true : false}
            />
          {capped.pTokenIsCapped && <div>
            <h6 className="m-0">Deposits on this contract are currently capped at {capped.pTokenCap} {item.underlyingTokenSymbol}</h6>
          </div>}
          </Grid.Col>
          <Grid.Col width={5} offset={1}>
            <Header.H4>
              Withdraw anytime
            </Header.H4>
            <DepositWithdrawTokensForm
              item={item}
              accountBalances={accountBalances}
              web3Context={web3Context}
              tokenPrices={tokenPrices}
              contracts={contracts}
              handleSubmit={handleWithdrawTx}
              label={`Your deposits: ${numeral(ethers.utils.formatUnits(accountBalances[item.pTokenSymbol]["token"],item.pTokenDecimals)).format('0.00')} ${item.pTokenSymbol}`}
              buttonIcon={ "upload" }
              buttonLabel={ "Withdraw" }
              disabled= {accountBalances[item.pTokenSymbol]["token"] == 0 ? true : false}
            />
          </Grid.Col>
        </Grid.Row>
      </Card.Body>

    )
  }

  return ( (coverage.loading || capped.loading) ? <Card><Card.Body><Dimmer active loader /></Card.Body></Card> : 
    <Accordion>
      <Card className="mb-1">
        <Accordion.Toggle as={Card.Header} eventKey="0">
        <Card.Body className="accordion__button">
              <Grid.Row alignItems="center" justifyContent="center">
                <Grid.Col width={2}>
                  <Avatar
                    imageURL={`assets/${item.coreTokenLogo}.png`}
                    style={{"verticalAlign":"middle"}}
                  />
                  <Text size="h4" align="center" RootComponent="span" className="ml-2">{item.coreToken.toUpperCase()}</Text>
                </Grid.Col>
                <Grid.Col width={3}>
                  <Avatar
                    imageURL={`assets/${item.protocolLogo}.png`}
                    style={{"verticalAlign":"middle"}}
                    size="lg"
                  />
                  <Text size="h4" align="center" RootComponent="span" className="ml-1">{item.underlyingProtocol.toUpperCase()}</Text>
                </Grid.Col>
                <Grid.Col width={2}>
                  <Text size="h4" align="center" className="mb-0">{`${numeral(coverage.netAdjustedAPR).format('0.00')}%`}</Text>
                </Grid.Col>
                <Grid.Col width={2}>
                  <Text align="center">
                    {`${numeral(coverage.pTokenTotalDepositUsd).format('$0,0a')}`}
                  </Text>
                  <Text align="center" size="sm" muted>
                    {`${numeral(parseFloat(ethers.utils.formatUnits(coverage.pTokenTotalDepositTokens,item.underlyingTokenDecimals))).format('0,0a')} ${item.underlyingTokenSymbol.toUpperCase()}`}
                  </Text>
                </Grid.Col>
                <Grid.Col width={3} className="text-center">
                  <Tag.List>
                    <Tag rounded color="purple">{item.riskTag}</Tag>
                  </Tag.List>
                </Grid.Col>
              </Grid.Row>
            </Card.Body>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Fragment>
          <ProtektHoldingSection
            item={item}
            tokenPrices={tokenPrices}
            web3Context={web3Context}
            gasPrice={gasPrice}
            contracts={contracts}
            coverage={coverage}
            claimsManager={claimsManager}
            accountBalances={accountBalances}
            capped={capped}
          />
          <Card.Body>
            <Grid.Row>
              <Grid.Col width={6}>
                <h5 className="m-0 text-muted">{`COST`}</h5>
                <p>{`${numeral(coverage.coverageFeeAPR).format('0.00')}% for ${coverage.coverageRatioDisplay} coverage`}</p>
                <h5 className="m-0 text-muted">{`BACKED BY`}</h5>
                <p>{`${item.backedByDisplay}`}</p>
              </Grid.Col>
              <Grid.Col width={6}>
                <h5 className="m-0 text-muted">{`CLAIMS`}</h5>
                <p>{`${item.claimsManagerDisplay}`}</p>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={12}>
                <h5 className="m-0 text-muted">{`COVERAGE FOR`}</h5>
                <p>{`${item.coverageDisplay}`}</p>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
          { !web3Context.ready ?
              (<Card.Body><Text className="text-center font-italic">Connect Wallet Above<span role="img">👆</span></Text></Card.Body>) : 
                !accountBalances.ready ? <Card.Body><Dimmer active loader /></Card.Body> : 
                  accountBalances[item.pTokenSymbol]["token"] === "0" ?
                    renderDepositCard() :
                      (<div></div>)
          }
          </Fragment>
        </Accordion.Collapse> 
      </Card>
    </Accordion>
      
  )
}

/** @component */
export default ProtektDepositCard;
