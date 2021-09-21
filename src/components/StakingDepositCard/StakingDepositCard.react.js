// @flow

import React, { useState, useEffect, useContext, Fragment } from 'react';
import numeral from 'numeral';
import { ethers } from "ethers";
import _ from "lodash";

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

// import Card from "../tablerReactAlt/src/components/Card";
import DepositWithdrawTokensForm from "../DepositWithdrawTokensForm";

import {
  useGasPrice,
  useCompoundDaiCoverageMetrics,
  useAaveUsdcCoverageMetrics,
  useInterval,
  useClaimsManager,
  useContractLoader,
  useCapped
} from "../../hooks";
import { Transactor } from "../../utils";
import { Web3Context } from '../../App.react';
import { infuraProvider } from "../../config";

import { Accordion, Card } from "react-bootstrap";

import {GetAccountBalances} from '../../utils/';


type Props = {|
  +children?: React.Node,
  +item?: Object,
  +lendingMarketMetrics?: Object,
  +tokenPrices?: Object,
  +contracts?: Object,
|};

function StakingDepositCard({
  children,
  item,
  lendingMarketMetrics,
  tokenPrices
}: Props): React.Node {
  const web3Context = useContext(Web3Context);
  const gasPrice = useGasPrice("fast");
  const contracts = useContractLoader(web3Context.provider);

  // below should be abstracted to a function to set this when more contracts
  const coverage = item.id === 'Aave-USDC-Manual-kovan' ? useAaveUsdcCoverageMetrics(
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

  const capped = useCapped(
    item,
    contracts
  )

  const claimsManager = useClaimsManager(
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


  // Called after a successful transaction

  async function handleDepositTx(amount, cb) {
    if(web3Context.ready) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      let weiAmount = ethers.utils.parseUnits(amount.toString(), item.reserveTokenDecimals);
      const allowanceAmount = await contracts[item.reserveTokenSymbol]["allowance"](...[web3Context.address, item.shieldTokenAddress]);

      if(weiAmount.gt(allowanceAmount)) {
        tx(contracts[item.reserveTokenSymbol]["approve"](item.shieldTokenAddress, ethers.utils.parseUnits('10000000',item.reserveTokenDecimals)),cb);
      } else {
        console.log(allowanceAmount)
        // let symbol = await contracts[item.shieldTokenSymbol].symbol()
        console.log(contracts[item.shieldTokenSymbol])
        tx(contracts[item.shieldTokenSymbol]["deposit"](weiAmount),cb);
      }
    }
  }

  async function handleWithdrawTx(amount,cb) {
    if(web3Context.ready && amount > 0) {
      const tx = Transactor(web3Context.provider, cb, gasPrice);
      let weiAmount = ethers.utils.parseUnits(amount.toString(), item.shieldTokenDecimals);
      tx(contracts[item.shieldTokenSymbol]["withdraw"](weiAmount),cb);
    }
  }

  function renderDepositCard() {
    return (
      <Card.Body>
        <Grid.Row>
          <Grid.Col width={5} >
            <Header.H4>
              Stake to start earning
            </Header.H4>
            <DepositWithdrawTokensForm
              item={item}
              accountBalances={accountBalances}
              web3Context={web3Context}
              tokenPrices={tokenPrices}
              contracts={contracts}
              handleSubmit={handleDepositTx}
              label={`Your wallet: ${numeral(ethers.utils.formatUnits(accountBalances[item.reserveTokenSymbol]["token"],item.reserveTokenDecimals)).format('0.00')} ${item.reserveTokenSymbol.toUpperCase()}`}
              buttonIcon={ accountBalances[item.reserveTokenSymbol] && 
                            accountBalances[item.reserveTokenSymbol]["allowance"] &&
                              accountBalances[item.reserveTokenSymbol]["allowance"].gt(0) ?
                                "download" : 
                                  "toggle-left"
                        }
              buttonLabel={ accountBalances[item.reserveTokenSymbol] && 
                        accountBalances[item.reserveTokenSymbol]["allowance"] &&
                          accountBalances[item.reserveTokenSymbol]["allowance"].gt(0) ?
                            "Deposit" : 
                              "Approve"
                    }
              disabled= {accountBalances[item.reserveTokenSymbol]["token"] == 0 ? true : false}
            />
            {capped.shieldTokenIsCapped && <div>
              <h6 className="m-0">Deposits on this contract are currently capped at {capped.shieldTokenCap} {item.reserveTokenSymbol}</h6>
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
              label={`Your deposits: ${numeral(ethers.utils.formatUnits(accountBalances[item.shieldTokenSymbol]["token"],item.shieldTokenDecimals)).format('0.00')} ${item.shieldTokenSymbol.toUpperCase()}`}
              buttonIcon={ "upload" }
              buttonLabel={ "Withdraw" }
              disabled= {accountBalances[item.shieldTokenSymbol]["token"] == 0 ? true : false}
            />
          </Grid.Col>
        </Grid.Row>
      </Card.Body>
    )
  }

  function renderHoldingsCard() {
    return (
      <Card.Body>
        <Grid.Row>
          <Grid.Col width={6}>
            <h5 className="m-0 text-muted">{`YOUR DEPOSITS`}</h5>
            <p>{`${numeral(ethers.utils.formatUnits(accountBalances[item.shieldTokenSymbol]["depositedTokenBalance"],item.reserveTokenDecimals)).format('0.00')} ${item.reserveTokenSymbol.toUpperCase()} (${numeral(accountBalances[item.shieldTokenSymbol]["depositedTokenBalanceUsd"]).format('$0.00')})`}</p>
          </Grid.Col>
          <Grid.Col width={6}>
            <h5 className="m-0 text-muted">{`CLAIMS STATUS`}</h5>
            <Form.Group label={claimsManager.loading ? `` : 
              claimsManager.activePayoutEvent ? `Payout Event found` :
                `No Payout Event found`
            }/>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col width={5} >
            <h5 className="m-0 text-muted">{`DEPOSIT`}</h5>
            <DepositWithdrawTokensForm
              item={item}
              accountBalances={accountBalances}
              web3Context={web3Context}
              tokenPrices={tokenPrices}
              contracts={contracts}
              handleSubmit={handleDepositTx}
              label={`Your wallet: ${numeral(ethers.utils.formatUnits(accountBalances[item.reserveTokenSymbol]["token"],item.reserveTokenDecimals)).format('0.00')} ${item.reserveTokenSymbol.toUpperCase()}`}
              buttonIcon={ accountBalances[item.reserveTokenSymbol] && 
                            accountBalances[item.reserveTokenSymbol]["allowance"] &&
                              accountBalances[item.reserveTokenSymbol]["allowance"].gt(0) ?
                                "download" : 
                                  "toggle-left"
                        }
              buttonLabel={ accountBalances[item.reserveTokenSymbol] && 
                        accountBalances[item.reserveTokenSymbol]["allowance"] &&
                          accountBalances[item.reserveTokenSymbol]["allowance"].gt(0) ?
                            "Deposit" : 
                              "Approve"
                    }
              disabled= {accountBalances[item.reserveTokenSymbol]["token"] == 0 ? true : false}
            />
            {capped.shieldTokenIsCapped && <div>
              <h6 className="m-0">Deposits on this contract are currently capped at {capped.shieldTokenCap} {item.reserveTokenSymbol}</h6>
              <br/>
            </div>}
            <h5 className="m-0 text-muted">{`REDEEM EARNINGS`}</h5>
            <Form.Group label={`Check & collect your rewards!`}>
              <Button
                RootComponent="a"
                color="cyan"
                className="color mt-1 mb-3"
                icon={ "award" }
                href={`https://${item.protektRedeemId}.herokuapp.com`}
                target="_blank"
              >
                { `Go to Redeem App` }
              </Button>
            </Form.Group>
          </Grid.Col>
          <Grid.Col width={5} offset={1}>
            <h5 className="m-0 text-muted">{`WITHDRAW`}</h5>
            <DepositWithdrawTokensForm
              item={item}
              accountBalances={accountBalances}
              web3Context={web3Context}
              tokenPrices={tokenPrices}
              contracts={contracts}
              handleSubmit={handleWithdrawTx}
              label={`Your deposits: ${numeral(ethers.utils.formatUnits(accountBalances[item.shieldTokenSymbol]["token"],item.shieldTokenDecimals)).format('0.00')} ${item.shieldTokenSymbol.toUpperCase()}`}
              buttonIcon={ "upload" }
              buttonLabel={ "Withdraw" }
              disabled= {accountBalances[item.shieldTokenSymbol]["token"] == 0 ? true : false}
            />
          </Grid.Col>
        </Grid.Row>
      </Card.Body>
    )
  }

  return ( (coverage.loading || capped.loading) ? <Card><Card.Body><Dimmer active loader /></Card.Body></Card> : 
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          <Card.Body className="accordion__button">
              <Grid.Row alignItems="center" justifyContent="center">
                <Grid.Col width={2} className="text-center">
                  <Text>{item.id}</Text>
                </Grid.Col>
                <Grid.Col width={2} className="text-center">
                  <Text size="h4" RootComponent="div">{`${numeral(coverage.coverageFeeAPR).format('0.00')}%`}</Text>
                  <Text muted RootComponent="span">{` ON`}</Text><br/>
                  <Avatar
                    imageURL={`assets/${item.reserveTokenLogo}.png`}
                    style={{"verticalAlign":"middle"}}
                  />
                  <Text size="h4" align="center" RootComponent="span" className="ml-2">{item.reserveTokenSymbol.toUpperCase()}</Text>
                </Grid.Col>
                <Grid.Col width={3} className="text-center">
                  <Avatar
                    imageURL={`assets/${item.coreTokenLogo}.png`}
                    style={{"verticalAlign":"middle"}}
                  />
                  <Text size="h4" align="center" RootComponent="span" className="ml-2">{item.coreToken.toUpperCase()}</Text>
                  <Text muted>IN</Text>
                  <Avatar
                    imageURL={`assets/${item.protocolLogo}.png`}
                    style={{"verticalAlign":"middle"}}
                    size="lg"
                  />
                  <Text size="h4" align="center" RootComponent="span" className="ml-0">{item.underlyingProtocol.toUpperCase()}</Text>
                </Grid.Col>
                <Grid.Col width={3} className="text-center">
                  <Tag.List>
                    <Tag rounded color="purple">{item.riskTag}</Tag>
                  </Tag.List>
                </Grid.Col>
                <Grid.Col width={2} className="text-center">
                  <Text align="center">
                    {`${numeral(coverage.shieldTokenTotalDepositUsd).format('$0,0.00a')}`}
                  </Text>
                  <Text align="center" size="sm" muted>
                    {`${numeral(parseFloat(ethers.utils.formatUnits(coverage.shieldTokenTotalDepositTokens,item.reserveTokenDecimals))).format('0,0.00a')} ${item.reserveTokenSymbol.toUpperCase()}`}
                  </Text>
                </Grid.Col>
              </Grid.Row>
            </Card.Body>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Fragment>
        { (web3Context.ready &&
              accountBalances.ready &&
                accountBalances[item.shieldTokenSymbol]["token"] !== "0") ?
                  renderHoldingsCard() : <div></div>
          }
          <Card.Body>
            <Grid.Row>
              <Grid.Col width={6}>
                <h5 className="m-0 text-muted">{`TOTAL AMOUNT STAKED`}</h5>
                <p>{`${numeral(parseFloat(ethers.utils.formatUnits(coverage.shieldTokenTotalDepositTokens,item.shieldTokenDecimals))).format('0,0.00')} ${item.reserveTokenSymbol.toUpperCase()} (${numeral(coverage.shieldTokenTotalDepositUsd).format('$0,0')})`}</p>
                <h5 className="m-0 text-muted">{`REINVESTED`}</h5>
                <p>{`${item.strategyDisplay}`}</p>
              </Grid.Col>
              <Grid.Col width={6}>
                <h5 className="m-0 text-muted">{`CLAIMS`}</h5>
                <p>{`Claims are investigated for a period of 1 week, and the payout decision is made by a DAO vote.`}</p>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={12}>
                <h5 className="m-0 text-muted">{`COVERAGE FOR`}</h5>
                <p>{`Protection against 1) smart contract bugs that allow hackers to steal or lock DAI and 2) risk that admin keys are stolen or used to withdraw DAI. Not covered: 1) Risk of a Maker hack or DAI lossing its peg. 2) Risk of flash loan or other financial exploit.`}</p>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
          { !web3Context.ready ?
              (<Card.Body><Text className="text-center font-italic">Connect Wallet Above<span role="img">👆</span></Text></Card.Body>) : 
                !accountBalances.ready ? <Card.Body><Dimmer active loader /></Card.Body> : (
                  <div>
                    {
                      accountBalances[item.shieldTokenSymbol]["token"] === "0" ?
                        renderDepositCard() :
                          <div></div>
                    }
                  </div>      
                )
          }
          </Fragment>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

/** @component */
export default StakingDepositCard;
