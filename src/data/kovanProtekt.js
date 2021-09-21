/*
        KOVAN NETWORK TEST
*/

const data = {
      protektContracts: [
        {
          // Compound-DAI-Manual-kovan
          id: 'Compound-DAI-Manual-kovan',
          name: 'Compound DAI Manual (Kovan) ',
          coreToken: 'dai',
          coreTokenLogo: 'dai-logo',
          underlyingProtocol: 'compound',
          protocolLogo: 'compound-logo',
          logo: 'cDAI-logo',
          maxBlockFeeAPR: 2.60,
          riskTag: 'Smart Contract Bugs',


          // Display fields
          backedByDisplay: 'wETH (Not re-invested)',
          strategyDisplay: 'Deposits not re-invested',
          claimsManagerDisplay: 'Claims are investigated for a period of 1 week, and the payout decision is made by a DAO vote.',
          coverageDisplay: `Protection against 1) smart contract bugs that allow hackers to steal or lock DAI and 2) risk that admin keys are stolen or used to withdraw DAI. Not covered: 1) Risk of a Maker hack or DAI lossing its peg. 2) Risk of flash loan or other financial exploit.`,
  
          // pToken
          underlyingTokenSymbol: 'cdai',
          underlyingTokenAddress: '0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad',
          underlyingTokenDecimals: 8, // Kovan cDai [compound]
          coreTokenSymbol:'dai',
          coreTokenAddress: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa', // Kovan Dai [compound]
          coreTokenDecimals: 18,
          pTokenDecimals: 8,
          pTokenSymbol: 'pcdai',
          pTokenAddress: '0xe05807E20B8a6C46e8bdB6fe353875eE393D51F9',
          feeModelAddress: '0xDF1b1c58FC59cbCe9e11c37aD239B37Cf56e7a5A',
  
          // Shield Token
          reserveTokenSymbol: 'weth',
          reserveTokenLogo: 'weth-logo',
          reserveTokenAddress: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
          reserveTokenDecimals: 18,
          shieldTokenSymbol: 'shpcdai',
          shieldTokenDecimals: 18,
          shieldTokenAddress: '0x46D664333a841050Ee126C54f5568b63aacb8963',
          controllerAddress: '0xf065334f3800bC460fAD7b345F5ade5AA9df5F73',
          strategyAddress: '0xF269DF4cb634E574c968Dc2d16aAfA2571042CBD',
  
          // Rewards
          rewardToken: 'tcomp',
          rewardTokenDecimals: 18,
          protektRedeemId: 'protekt-redeem-tcomp-kovan',

          // Claims Fields
          claimsContractId: 'compound-dai-manual-claims',
          claimsManagerAddress: '0x2676c96A67202e306E50D29213E412aF4137D60D'
        },
        {
        //   // Aave-USDC-Manual-kovan
          id: 'Aave-USDC-Manual-kovan',
          name: 'Aave USDC Manual (Kovan) ',
          underlyingProtocol: 'aave',
          protocolLogo: 'aave-logo',
          logo: 'aUSDC-logo',
          maxBlockFeeAPR: 2.60,
          riskTag: 'Smart Contract Bugs',

          // Display fields
          backedByDisplay: 'wETH (Not re-invested)',
          strategyDisplay: 'Deposits not re-invested',
          claimsManagerDisplay: 'Claims are investigated for a period of 1 week, and the payout decision is made by a DAO vote.',
          coverageDisplay: `Protection against 1) smart contract bugs that allow hackers to steal or lock USDC and 2) risk that admin keys are stolen or used to withdraw USDC. Not covered: USDC lossing its peg. 2) Risk of flash loan or other financial exploit.`,
  
        //   // Core Token
          coreToken: 'usdc',
          coreTokenSymbol: 'usdc',
          coreTokenAddress: '0xe22da380ee6b445bb8273c81944adeb6e8450422',
          coreTokenDecimals: 6,
          coreTokenLogo: 'usdc-logo',

          // pToken
          underlyingTokenSymbol: 'ausdc',
          underlyingTokenAddress: '0xe12afec5aa12cf614678f9bfeeb98ca9bb95b5b0',
          underlyingTokenDecimals: 6,
          pTokenDecimals: 6,
          pTokenSymbol: 'pausdc',
          pTokenAddress: '0x00424829E11C55cA9307444C1828CA9Ea6F6B56E',
          feeModelAddress: '0xDF1b1c58FC59cbCe9e11c37aD239B37Cf56e7a5A',
  
          // Shield Token
          reserveTokenSymbol: 'weth',
          reserveTokenLogo: 'weth-logo',
          reserveTokenAddress: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
          reserveTokenDecimals: 18,
          shieldTokenSymbol: 'shpausdc',
          shieldTokenDecimals: 18,
          shieldTokenAddress: '0xe0d1D1cBB5c0a85C7951420795Aca19162eAcB35',
          controllerAddress: '0x2E5547aCadad249665EC3b7c76929DB1EA8eABF8',
          strategyAddress: '0xf45B928cEF8D7549EBFf4530610bD976806C5536',
  
          // Rewards
          rewardToken: 'ausdc',
          rewardTokenDecimals: 6,
          protektRedeemId: 'protekt-redeem-ausdc-kovan',

          // Claims Fields
          claimsContractId: 'aave-usdc-manual-claims',
          claimsManagerAddress:'0xC593A2A8283C0c54fE624C7668796161A20e8956'
        }
      ],
      contracts: {
        dai: {
          address: '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa', // kovan DAI [compound]
          abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: '0x60e0604052602260808181529061067a60a039805161002691600091602090910190610039565b5034801561003357600080fd5b506100d4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061007a57805160ff19168380011785556100a7565b828001600101855582156100a7579182015b828111156100a757825182559160200191906001019061008c565b506100b39291506100b7565b5090565b6100d191905b808211156100b357600081556001016100bd565b90565b610597806100e36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806370740aab1461003b578063eb68757f146100b8575b600080fd5b610043610160565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561007d578181015183820152602001610065565b50505050905090810190601f1680156100aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015e600480360360208110156100ce57600080fd5b8101906020810181356401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ee945050505050565b005b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101e65780601f106101bb576101008083540402835291602001916101e6565b820191906000526020600020905b8154815290600101906020018083116101c957829003601f168201915b505050505081565b80516102019060009060208401906104c6565b50604080518082018252600e81526d73657420707572706f736520746f60901b60208083019190915260008054845160026001831615610100026000190190921691909104601f81018490048402820184019095528481526102be943394939192918301828280156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b5050505050610379565b60408051338082526020820183815260008054600260001961010060018416150201909116049484018590527f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de94929390929091906060830190849080156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b5050935050505060405180910390a150565b6104a083838360405160240180846001600160a01b03166001600160a01b031681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103db5781810151838201526020016103c3565b50505050905090810190601f1680156104085780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561043b578181015183820152602001610423565b50505050905090810190601f1680156104685780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b17905295506104a5945050505050565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050757805160ff1916838001178555610534565b82800160010185558215610534579182015b82811115610534578251825591602001919060010190610519565b50610540929150610544565b5090565b61055e91905b80821115610540576000815560010161054a565b9056fea264697066735822122037cf5aa5463ff264432526c10096a7a77bc7e0c9351b07923e87731b91e78ae664736f6c63430006070033f09f9ba02050726f6772616d6d696e6720556e73746f707061626c65204d6f6e6579',
        },
        cdai: {
          address: "0xf0d0eb522cfa50b716b3b1604c4f0fa6f04376ad", // kovan cDai
          abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: "0x60e0604052602260808181529061067a60a039805161002691600091602090910190610039565b5034801561003357600080fd5b506100d4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061007a57805160ff19168380011785556100a7565b828001600101855582156100a7579182015b828111156100a757825182559160200191906001019061008c565b506100b39291506100b7565b5090565b6100d191905b808211156100b357600081556001016100bd565b90565b610597806100e36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806370740aab1461003b578063eb68757f146100b8575b600080fd5b610043610160565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561007d578181015183820152602001610065565b50505050905090810190601f1680156100aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015e600480360360208110156100ce57600080fd5b8101906020810181356401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ee945050505050565b005b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101e65780601f106101bb576101008083540402835291602001916101e6565b820191906000526020600020905b8154815290600101906020018083116101c957829003601f168201915b505050505081565b80516102019060009060208401906104c6565b50604080518082018252600e81526d73657420707572706f736520746f60901b60208083019190915260008054845160026001831615610100026000190190921691909104601f81018490048402820184019095528481526102be943394939192918301828280156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b5050505050610379565b60408051338082526020820183815260008054600260001961010060018416150201909116049484018590527f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de94929390929091906060830190849080156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b5050935050505060405180910390a150565b6104a083838360405160240180846001600160a01b03166001600160a01b031681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103db5781810151838201526020016103c3565b50505050905090810190601f1680156104085780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561043b578181015183820152602001610423565b50505050905090810190601f1680156104685780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b17905295506104a5945050505050565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050757805160ff1916838001178555610534565b82800160010185558215610534579182015b82811115610534578251825591602001919060010190610519565b50610540929150610544565b5090565b61055e91905b80821115610540576000815560010161054a565b9056fea264697066735822122037cf5aa5463ff264432526c10096a7a77bc7e0c9351b07923e87731b91e78ae664736f6c63430006070033f09f9ba02050726f6772616d6d696e6720556e73746f707061626c65204d6f6e6579"
        },
        pcdai: {
          address: "0xe05807E20B8a6C46e8bdB6fe353875eE393D51F9",
          abi: [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_depositToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_feeModel",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_claimsManager",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "HarvestRewards",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "cDaiTokenAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "claimsManager",
              "outputs": [
                {
                  "internalType": "contract IClaimsManagerCore",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "comp",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "compComptroller",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "daiTokenAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "depositToken",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "feeModel",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "governance",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "isCapped",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "maxDeposit",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "balance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_governance",
                  "type": "address"
                }
              ],
              "name": "setGovernance",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_feeModel",
                  "type": "address"
                }
              ],
              "name": "setFeeModel",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "depositAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "deposit",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "depositor",
                  "type": "address"
                }
              ],
              "name": "depositCoreTokens",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "depositCoreTokens",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "withdrawAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "harvestRewards",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_feeModel",
                  "type": "address"
                }
              ],
              "name": "harvestRewards",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_shares",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "getPricePerFullShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "capDeposits",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "uncapDeposits",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],  
          bytecode: "0x60806040523480156200001157600080fd5b5060405162003dcd38038062003dcd833981810160405260608110156200003757600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050508273ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015620000a357600080fd5b505afa158015620000b8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620000e357600080fd5b81019080805160405193929190846401000000008211156200010457600080fd5b838201915060208201858111156200011b57600080fd5b82518660018202830111640100000000821117156200013957600080fd5b8083526020830192505050908051906020019080838360005b838110156200016f57808201518184015260208101905062000152565b50505050905090810190601f1680156200019d5780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f70726f74656b742000000000000000000000000000000000000000000000000081525060080182805190602001908083835b60208310620002045780518252602082019150602081019050602083039250620001df565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528373ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200027f57600080fd5b505afa15801562000294573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620002bf57600080fd5b8101908080516040519392919084640100000000821115620002e057600080fd5b83820191506020820185811115620002f757600080fd5b82518660018202830111640100000000821117156200031557600080fd5b8083526020830192505050908051906020019080838360005b838110156200034b5780820151818401526020810190506200032e565b50505050905090810190601f168015620003795780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f700000000000000000000000000000000000000000000000000000000000000081525060010182805190602001908083835b60208310620003e05780518252602082019150602081019050602083039250620003bb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200045b57600080fd5b505afa15801562000470573d6000803e3d6000fd5b505050506040513d60208110156200048757600080fd5b81019080805190602001909291905050508260039080519060200190620004b092919062000610565b508160049080519060200190620004c992919062000610565b5080600560006101000a81548160ff021916908360ff16021790555050505082600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600860146101000a81548160ff021916908315150217905550505050620006bf565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200065357805160ff191683800117855562000684565b8280016001018555821562000684579182015b828111156200068357825182559160200191906001019062000666565b5b50905062000693919062000697565b5090565b620006bc91905b80821115620006b85760008160009055506001016200069e565b5090565b90565b6136fe80620006cf6000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c806370a0823111610125578063ab033ea9116100ad578063cb6c64a41161007c578063cb6c64a414610a22578063d3daa67a14610a50578063dd62ed3e14610a5a578063de5f626814610ad2578063f015912014610adc57610211565b8063ab033ea914610948578063b69ef8a81461098c578063b6b55f25146109aa578063c89039c5146109d857610211565b806397ee1144116100f457806397ee1144146107a4578063a03a60f1146107ee578063a457c2d714610838578063a5a9504e1461089e578063a9059cbb146108e257610211565b806370a08231146106a157806377c7b8fc146106f9578063853828b61461071757806395d89b411461072157610211565b80632e1a7d4d116101a8578063452773321161017757806345277332146105a5578063515ce517146105d35780635aa6e675146106175780636083e59a14610661578063671528d41461067f57610211565b80632e1a7d4d146104a35780632eaee35e146104d1578063313ce5671461051b578063395093511461053f57610211565b80631eb08ba9116101e45780631eb08ba91461036757806323b872dd146103b15780632be11ae2146104375780632d2620001461044157610211565b806306fdde0314610216578063095ea7b314610299578063109d0af8146102ff57806318160ddd14610349575b600080fd5b61021e610b26565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561025e578082015181840152602081019050610243565b50505050905090810190601f16801561028b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102e5600480360360408110156102af57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bc8565b604051808215151515815260200191505060405180910390f35b610307610be6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610351610bfe565b6040518082815260200191505060405180910390f35b61036f610c08565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61041d600480360360608110156103c757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c2e565b604051808215151515815260200191505060405180910390f35b61043f610d07565b005b61048d6004803603604081101561045757600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d34565b6040518082815260200191505060405180910390f35b6104cf600480360360208110156104b957600080fd5b8101908080359060200190929190505050610f4f565b005b6104d9610fe9565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610523611001565b604051808260ff1660ff16815260200191505060405180910390f35b61058b6004803603604081101561055557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611018565b604051808215151515815260200191505060405180910390f35b6105d1600480360360208110156105bb57600080fd5b81019080803590602001909291905050506110cb565b005b610615600480360360208110156105e957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611374565b005b61061f61156f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610669611595565b6040518082815260200191505060405180910390f35b61068761159b565b604051808215151515815260200191505060405180910390f35b6106e3600480360360208110156106b757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115ae565b6040518082815260200191505060405180910390f35b6107016115f6565b6040518082815260200191505060405180910390f35b61071f611638565b005b61072961164b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561076957808201518184015260208101905061074e565b50505050905090810190601f1680156107965780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107ac6116ed565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6107f6611713565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6108846004803603604081101561084e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061172b565b604051808215151515815260200191505060405180910390f35b6108e0600480360360208110156108b457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117f8565b005b61092e600480360360408110156108f857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118ff565b604051808215151515815260200191505060405180910390f35b61098a6004803603602081101561095e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061191d565b005b610994611a24565b6040518082815260200191505060405180910390f35b6109d6600480360360208110156109c057600080fd5b8101908080359060200190929190505050611b05565b005b6109e0611f35565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610a4e60048036036020811015610a3857600080fd5b8101908080359060200190929190505050611f5b565b005b610a58612043565b005b610abc60048036036040811015610a7057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612123565b6040518082815260200191505060405180910390f35b610ada6121aa565b005b610ae461228e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bbe5780601f10610b9357610100808354040283529160200191610bbe565b820191906000526020600020905b815481529060010190602001808311610ba157829003601f168201915b5050505050905090565b6000610bdc610bd56122a6565b84846122ae565b6001905092915050565b7361460874a7196d6a22d1ee4922473664b3e9527081565b6000600254905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c3b8484846124a5565b610cfc84610c476122a6565b610cf7856040518060600160405280602881526020016135b360289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610cad6122a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461275b9092919063ffffffff16565b6122ae565b600190509392505050565b610d32600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611374565b565b6000610d77823085734f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa73ffffffffffffffffffffffffffffffffffffffff1661281b909392919063ffffffff16565b610dca73f0d0eb522cfa50b716b3b1604c4f0fa6f04376ad84734f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa73ffffffffffffffffffffffffffffffffffffffff166129219092919063ffffffff16565b600073f0d0eb522cfa50b716b3b1604c4f0fa6f04376ad73ffffffffffffffffffffffffffffffffffffffff1663a0712d68856040518263ffffffff1660e01b815260040180828152602001915050602060405180830381600087803b158015610e3357600080fd5b505af1158015610e47573d6000803e3d6000fd5b505050506040513d6020811015610e5d57600080fd5b810190808051906020019092919050505014610e7557fe5b600073f0d0eb522cfa50b716b3b1604c4f0fa6f04376ad73ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610f0857600080fd5b505afa158015610f1c573d6000803e3d6000fd5b505050506040513d6020811015610f3257600080fd5b810190808051906020019092919050505090508091505092915050565b610f57610d07565b6000610f8c610f64610bfe565b610f7e84610f70611a24565b612b4190919063ffffffff16565b612bc790919063ffffffff16565b9050610f983383612c11565b610fe53382600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612dc99092919063ffffffff16565b5050565b734f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa81565b6000600560009054906101000a900460ff16905090565b60006110c16110256122a6565b846110bc85600160006110366122a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e9a90919063ffffffff16565b6122ae565b6001905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a094a0316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561113557600080fd5b505af1158015611149573d6000803e3d6000fd5b505050506040513d602081101561115f57600080fd5b81019080805190602001909291905050506111e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f215265616479000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6111ea610d07565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561128b57600080fd5b505afa15801561129f573d6000803e3d6000fd5b505050506040513d60208110156112b557600080fd5b8101908080519060200190929190505050905060006112d48333610d34565b9050600860149054906101000a900460ff161561136457600954811115611363576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436170206578636565646564000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b61136f818333612f22565b505050565b6000735eae89dc1c671724a672ff0630122ee83409865790508073ffffffffffffffffffffffffffffffffffffffff1663e9af0292306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050600060405180830381600087803b15801561140c57600080fd5b505af1158015611420573d6000803e3d6000fd5b5050505060007361460874a7196d6a22d1ee4922473664b3e9527073ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156114b757600080fd5b505afa1580156114cb573d6000803e3d6000fd5b505050506040513d60208110156114e157600080fd5b8101908080519060200190929190505050905061153383827361460874a7196d6a22d1ee4922473664b3e9527073ffffffffffffffffffffffffffffffffffffffff16612dc99092919063ffffffff16565b7fc8004e996aeb9ddf998debb2ef732f1fc90ad7ef353fc45c0559b81497429904816040518082815260200191505060405180910390a1505050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60095481565b600860149054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000611633611603610bfe565b611625670de0b6b3a7640000611617611a24565b612b4190919063ffffffff16565b612bc790919063ffffffff16565b905090565b611649611644336115ae565b610f4f565b565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e35780601f106116b8576101008083540402835291602001916116e3565b820191906000526020600020905b8154815290600101906020018083116116c657829003601f168201915b5050505050905090565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73f0d0eb522cfa50b716b3b1604c4f0fa6f04376ad81565b60006117ee6117386122a6565b846117e9856040518060600160405280602581526020016136a560259139600160006117626122a6565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461275b9092919063ffffffff16565b6122ae565b6001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146118bb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600061191361190c6122a6565b84846124a5565b6001905092915050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146119e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611ac557600080fd5b505afa158015611ad9573d6000803e3d6000fd5b505050506040513d6020811015611aef57600080fd5b8101908080519060200190929190505050905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a094a0316040518163ffffffff1660e01b8152600401602060405180830381600087803b158015611b6f57600080fd5b505af1158015611b83573d6000803e3d6000fd5b505050506040513d6020811015611b9957600080fd5b8101908080519060200190929190505050611c1c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f215265616479000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000611c26611a24565b90506000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611cc957600080fd5b505afa158015611cdd573d6000803e3d6000fd5b505050506040513d6020811015611cf357600080fd5b81019080805190602001909291905050509050600860149054906101000a900460ff1615611d96576009548382011115611d95576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436170206578636565646564000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b611de5333085600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661281b909392919063ffffffff16565b6000600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611e8657600080fd5b505afa158015611e9a573d6000803e3d6000fd5b505050506040513d6020811015611eb057600080fd5b81019080805190602001909291905050509050611ed68282612fa390919063ffffffff16565b935060008090506000611ee7610bfe565b1415611ef557849050611f24565b611f2184611f13611f04610bfe565b88612b4190919063ffffffff16565b612bc790919063ffffffff16565b90505b611f2e3382612fed565b5050505050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461201e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600860146101000a81548160ff0219169083151502179055508060098190555050565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614612106576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000600860146101000a81548160ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61228c600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561224c57600080fd5b505afa158015612260573d6000803e3d6000fd5b505050506040513d602081101561227657600080fd5b8101908080519060200190929190505050611b05565b565b735eae89dc1c671724a672ff0630122ee83409865781565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612334576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806136216024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156123ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061354a6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561252b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806135fc6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156125b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806135056023913960400191505060405180910390fd5b61261c8160405180606001604052806026815260200161356c602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461275b9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506126af816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e9a90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290612808576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156127cd5780820151818401526020810190506127b2565b50505050905090810190601f1680156127fa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b61291b848573ffffffffffffffffffffffffffffffffffffffff166323b872dd905060e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506131a8565b50505050565b6000811480612a1b575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156129de57600080fd5b505afa1580156129f2573d6000803e3d6000fd5b505050506040513d6020811015612a0857600080fd5b8101908080519060200190929190505050145b612a70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018061366f6036913960400191505060405180910390fd5b612b3c838473ffffffffffffffffffffffffffffffffffffffff1663095ea7b3905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506131a8565b505050565b600080831415612b545760009050612bc1565b6000828402905082848281612b6557fe5b0414612bbc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806135926021913960400191505060405180910390fd5b809150505b92915050565b6000612c0983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506133f3565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612c97576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806135db6021913960400191505060405180910390fd5b612d0281604051806060016040528060228152602001613528602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461275b9092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612d5981600254612fa390919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b612e95838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506131a8565b505050565b600080828401905083811015612f18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000612f2c611a24565b90506000612f438486612fa390919063ffffffff16565b905060008090506000612f54610bfe565b1415612f6257819050612f91565b612f8e83612f80612f71610bfe565b85612b4190919063ffffffff16565b612bc790919063ffffffff16565b90505b612f9b8482612fed565b505050505050565b6000612fe583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061275b565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415613090576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6130a581600254612e9a90919063ffffffff16565b6002819055506130fc816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612e9a90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6131c78273ffffffffffffffffffffffffffffffffffffffff166134b9565b613239576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083106132885780518252602082019150602081019050602083039250613265565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146132ea576040519150601f19603f3d011682016040523d82523d6000602084013e6132ef565b606091505b509150915081613367576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b6000815111156133ed5780806020019051602081101561338657600080fd5b81019080805190602001909291905050506133ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613645602a913960400191505060405180910390fd5b5b50505050565b6000808311829061349f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613464578082015181840152602081019050613449565b50505050905090810190601f1680156134915780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816134ab57fe5b049050809150509392505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156134fb57506000801b8214155b9250505091905056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a7231582059d157647241686be2e74164b3d694e13b300b5b0d6f67d29b1414bc202ed4b664736f6c63430005110032"
        },
        shpcdai: {
          address: "0x46D664333a841050Ee126C54f5568b63aacb8963",
          abi: [{"inputs":[{"internalType":"address","name":"_protektToken","type":"address"},{"internalType":"address","name":"_depositToken","type":"address"},{"internalType":"address","name":"_controller","type":"address"},{"internalType":"address","name":"_claimsManager","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"claimsManager","outputs":[{"internalType":"contract IClaimsManagerCore","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"controller","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"depositToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isCapped","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"max","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxDeposit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"min","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"protektToken","outputs":[{"internalType":"contract IProtektToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"}],"name":"setMin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_protektToken","type":"address"}],"name":"setProtektToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_controller","type":"address"}],"name":"setController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"depositAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdrawAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getPricePerFullShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"payout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"capDeposits","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"uncapDeposits","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],
          bytecode: "0x608060405261251c6007553480156200001757600080fd5b5060405162003f2838038062003f28833981810160405260808110156200003d57600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291905050508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015620000b357600080fd5b505afa158015620000c8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620000f357600080fd5b81019080805160405193929190846401000000008211156200011457600080fd5b838201915060208201858111156200012b57600080fd5b82518660018202830111640100000000821117156200014957600080fd5b8083526020830192505050908051906020019080838360005b838110156200017f57808201518184015260208101905062000162565b50505050905090810190601f168015620001ad5780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f736869656c64200000000000000000000000000000000000000000000000000081525060070182805190602001908083835b60208310620002145780518252602082019150602081019050602083039250620001ef565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528473ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200028f57600080fd5b505afa158015620002a4573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620002cf57600080fd5b8101908080516040519392919084640100000000821115620002f057600080fd5b838201915060208201858111156200030757600080fd5b82518660018202830111640100000000821117156200032557600080fd5b8083526020830192505050908051906020019080838360005b838110156200035b5780820151818401526020810190506200033e565b50505050905090810190601f168015620003895780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f736800000000000000000000000000000000000000000000000000000000000081525060020182805190602001908083835b60208310620003f05780518252602082019150602081019050602083039250620003cb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200046b57600080fd5b505afa15801562000480573d6000803e3d6000fd5b505050506040513d60208110156200049757600080fd5b81019080805190602001909291905050508260039080519060200190620004c09291906200067d565b508160049080519060200190620004d99291906200067d565b5080600560006101000a81548160ff021916908360ff1602179055505050506000600560016101000a81548160ff02191690831515021790555083600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600a60146101000a81548160ff021916908315150217905550505050506200072c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620006c057805160ff1916838001178555620006f1565b82800160010185558215620006f1579182015b82811115620006f0578251825591602001919060010190620006d3565b5b50905062000700919062000704565b5090565b6200072991905b80821115620007255760008160009055506001016200070b565b5090565b90565b6137ec806200073c6000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c806377c7b8fc11610125578063b6b55f25116100ad578063d3daa67a1161007c578063d3daa67a14610983578063dd62ed3e1461098d578063de5f626814610a05578063f77c479114610a0f578063f889794514610a595761021c565b8063b6b55f2514610899578063c89039c5146108c7578063cb6c64a414610911578063d39921e51461093f5761021c565b806395d89b41116100f457806395d89b41146106e8578063a457c2d71461076b578063a9059cbb146107d1578063ab033ea914610837578063b69ef8a81461087b5761021c565b806377c7b8fc146106725780638456cb5914610690578063853828b61461069a57806392eefe9b146106a45761021c565b806345dc3dd8116101a857806360d7f8e31161017757806360d7f8e31461057257806363bd1d4a146105bc578063671528d4146105da5780636ac5db19146105fc57806370a082311461061a5761021c565b806345dc3dd8146104ba5780635aa6e675146104e85780635c975abb146105325780636083e59a146105545761021c565b806323b872dd116101ef57806323b872dd146103725780632e1a7d4d146103f8578063313ce56714610426578063395093511461044a5780633f4ba83a146104b05761021c565b806306fdde0314610221578063095ea7b3146102a457806318160ddd1461030a5780631eb08ba914610328575b600080fd5b610229610a77565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026957808201518184015260208101905061024e565b50505050905090810190601f1680156102965780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102f0600480360360408110156102ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b19565b604051808215151515815260200191505060405180910390f35b610312610b37565b6040518082815260200191505060405180910390f35b610330610b41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103de6004803603606081101561038857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b67565b604051808215151515815260200191505060405180910390f35b6104246004803603602081101561040e57600080fd5b8101908080359060200190929190505050610c40565b005b61042e61104d565b604051808260ff1660ff16815260200191505060405180910390f35b6104966004803603604081101561046057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611064565b604051808215151515815260200191505060405180910390f35b6104b8611117565b005b6104e6600480360360208110156104d057600080fd5b81019080803590602001909291905050506111e4565b005b6104f06112b1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61053a6112d7565b604051808215151515815260200191505060405180910390f35b61055c6112ee565b6040518082815260200191505060405180910390f35b61057a6112f4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105c461131a565b6040518082815260200191505060405180910390f35b6105e26115b5565b604051808215151515815260200191505060405180910390f35b6106046115c8565b6040518082815260200191505060405180910390f35b61065c6004803603602081101561063057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115ce565b6040518082815260200191505060405180910390f35b61067a611616565b6040518082815260200191505060405180910390f35b610698611658565b005b6106a2611725565b005b6106e6600480360360208110156106ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611738565b005b6106f061183f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610730578082015181840152602081019050610715565b50505050905090810190601f16801561075d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107b76004803603604081101561078157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118e1565b604051808215151515815260200191505060405180910390f35b61081d600480360360408110156107e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506119ae565b604051808215151515815260200191505060405180910390f35b6108796004803603602081101561084d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119cc565b005b610883611ad3565b6040518082815260200191505060405180910390f35b6108c5600480360360208110156108af57600080fd5b8101908080359060200190929190505050611cc1565b005b6108cf611fda565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61093d6004803603602081101561092757600080fd5b8101908080359060200190929190505050612000565b005b6109816004803603602081101561095557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120e8565b005b61098b6121ef565b005b6109ef600480360360408110156109a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506122cf565b6040518082815260200191505060405180910390f35b610a0d612356565b005b610a1761243a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610a61612460565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b0f5780601f10610ae457610100808354040283529160200191610b0f565b820191906000526020600020905b815481529060010190602001808311610af257829003601f168201915b5050505050905090565b6000610b2d610b26612466565b848461246e565b6001905092915050565b6000600254905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610b74848484612665565b610c3584610b80612466565b610c30856040518060600160405280602881526020016136d760289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610be6612466565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b61246e565b600190509392505050565b600560019054906101000a900460ff1615610cc3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6000610cf8610cd0610b37565b610cea84610cdc611ad3565b6129db90919063ffffffff16565b612a6190919063ffffffff16565b9050610d043383612aab565b6000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610da557600080fd5b505afa158015610db9573d6000803e3d6000fd5b505050506040513d6020811015610dcf57600080fd5b8101908080519060200190929190505050905081811015610ffb576000610dff8284612c6390919063ffffffff16565b9050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f3fef3a3600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015610ecc57600080fd5b505af1158015610ee0573d6000803e3d6000fd5b505050506000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610f8557600080fd5b505afa158015610f99573d6000803e3d6000fd5b505050506040513d6020811015610faf57600080fd5b810190808051906020019092919050505090506000610fd78483612c6390919063ffffffff16565b905082811015610ff757610ff48185612cad90919063ffffffff16565b94505b5050505b6110483383600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612d359092919063ffffffff16565b505050565b6000600560009054906101000a900460ff16905090565b600061110d611071612466565b846111088560016000611082612466565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612cad90919063ffffffff16565b61246e565b6001905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6111e2612e06565b565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b8060078190555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560019054906101000a900460ff16905090565b600b5481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f21636c61696d734d616e6167657200000000000000000000000000000000000081525060200191505060405180910390fd5b6000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561148057600080fd5b505afa158015611494573d6000803e3d6000fd5b505050506040513d60208110156114aa57600080fd5b810190808051906020019092919050505090506115ae600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166397ee11446040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561152a57600080fd5b505af115801561153e573d6000803e3d6000fd5b505050506040513d602081101561155457600080fd5b810190808051906020019092919050505082600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612d359092919063ffffffff16565b8091505090565b600a60149054906101000a900460ff1681565b61271081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000611653611623610b37565b611645670de0b6b3a7640000611637611ad3565b6129db90919063ffffffff16565b612a6190919063ffffffff16565b905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461171b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b611723612f08565b565b611736611731336115ce565b610c40565b565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118d75780601f106118ac576101008083540402835291602001916118d7565b820191906000526020600020905b8154815290600101906020018083116118ba57829003601f168201915b5050505050905090565b60006119a46118ee612466565b8461199f856040518060600160405280602581526020016137936025913960016000611918612466565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b61246e565b6001905092915050565b60006119c26119bb612466565b8484612665565b6001905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000611cbc600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611b9957600080fd5b505afa158015611bad573d6000803e3d6000fd5b505050506040513d6020811015611bc357600080fd5b8101908080519060200190929190505050600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611c7357600080fd5b505afa158015611c87573d6000803e3d6000fd5b505050506040513d6020811015611c9d57600080fd5b8101908080519060200190929190505050612cad90919063ffffffff16565b905090565b6000611ccb611ad3565b90506000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611d6e57600080fd5b505afa158015611d82573d6000803e3d6000fd5b505050506040513d6020811015611d9857600080fd5b81019080805190602001909291905050509050600a60149054906101000a900460ff1615611e3b57600b548382011115611e3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436170206578636565646564000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b611e8a333085600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661300b909392919063ffffffff16565b6000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f2b57600080fd5b505afa158015611f3f573d6000803e3d6000fd5b505050506040513d6020811015611f5557600080fd5b81019080805190602001909291905050509050611f7b8282612c6390919063ffffffff16565b935060008090506000611f8c610b37565b1415611f9a57849050611fc9565b611fc684611fb8611fa9610b37565b886129db90919063ffffffff16565b612a6190919063ffffffff16565b90505b611fd33382613111565b5050505050565b600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146120c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600a60146101000a81548160ff02191690831515021790555080600b8190555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146121ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146122b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000600a60146101000a81548160ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b612438600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156123f857600080fd5b505afa15801561240c573d6000803e3d6000fd5b505050506040513d602081101561242257600080fd5b8101908080519060200190929190505050611cc1565b565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156124f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806137456024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561257a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061366e6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156126eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806137206025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806136296023913960400191505060405180910390fd5b6127dc81604051806060016040528060268152602001613690602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061286f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612cad90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008383111582906129c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561298d578082015181840152602081019050612972565b50505050905090810190601f1680156129ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000808314156129ee5760009050612a5b565b60008284029050828482816129ff57fe5b0414612a56576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806136b66021913960400191505060405180910390fd5b809150505b92915050565b6000612aa383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506132cc565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612b31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806136ff6021913960400191505060405180910390fd5b612b9c8160405180606001604052806022815260200161364c602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612bf381600254612c6390919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000612ca583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061291b565b905092915050565b600080828401905083811015612d2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b612e01838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613392565b505050565b600560019054906101000a900460ff16612e88576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600560016101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600560019054906101000a900460ff1615612f8b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600560016101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b61310b848573ffffffffffffffffffffffffffffffffffffffff166323b872dd905060e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613392565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156131b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6131c981600254612cad90919063ffffffff16565b600281905550613220816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612cad90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008083118290613378576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561333d578082015181840152602081019050613322565b50505050905090810190601f16801561336a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161338457fe5b049050809150509392505050565b6133b18273ffffffffffffffffffffffffffffffffffffffff166135dd565b613423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310613472578051825260208201915060208101905060208303925061344f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146134d4576040519150601f19603f3d011682016040523d82523d6000602084013e6134d9565b606091505b509150915081613551576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b6000815111156135d75780806020019051602081101561357057600080fd5b81019080805190602001909291905050506135d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613769602a913960400191505060405180910390fd5b5b50505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561361f57506000801b8214155b9250505091905056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a7231582046f44304871543c3e33b108fd808a45b74016ccc36912176e87f33faaabf9f4f64736f6c63430005110032"
        },
        weth: {
          address: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
          abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: "0x60e0604052602260808181529061067a60a039805161002691600091602090910190610039565b5034801561003357600080fd5b506100d4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061007a57805160ff19168380011785556100a7565b828001600101855582156100a7579182015b828111156100a757825182559160200191906001019061008c565b506100b39291506100b7565b5090565b6100d191905b808211156100b357600081556001016100bd565b90565b610597806100e36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806370740aab1461003b578063eb68757f146100b8575b600080fd5b610043610160565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561007d578181015183820152602001610065565b50505050905090810190601f1680156100aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015e600480360360208110156100ce57600080fd5b8101906020810181356401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ee945050505050565b005b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101e65780601f106101bb576101008083540402835291602001916101e6565b820191906000526020600020905b8154815290600101906020018083116101c957829003601f168201915b505050505081565b80516102019060009060208401906104c6565b50604080518082018252600e81526d73657420707572706f736520746f60901b60208083019190915260008054845160026001831615610100026000190190921691909104601f81018490048402820184019095528481526102be943394939192918301828280156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b5050505050610379565b60408051338082526020820183815260008054600260001961010060018416150201909116049484018590527f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de94929390929091906060830190849080156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b5050935050505060405180910390a150565b6104a083838360405160240180846001600160a01b03166001600160a01b031681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103db5781810151838201526020016103c3565b50505050905090810190601f1680156104085780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561043b578181015183820152602001610423565b50505050905090810190601f1680156104685780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b17905295506104a5945050505050565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050757805160ff1916838001178555610534565b82800160010185558215610534579182015b82811115610534578251825591602001919060010190610519565b50610540929150610544565b5090565b61055e91905b80821115610540576000815560010161054a565b9056fea264697066735822122037cf5aa5463ff264432526c10096a7a77bc7e0c9351b07923e87731b91e78ae664736f6c63430006070033f09f9ba02050726f6772616d6d696e6720556e73746f707061626c65204d6f6e6579"
        },
        "protekt-redeem-tcomp-kovan": {
          address: "0x1EEfB801C34348136B49704f18C66B38bB541fC7",
          abi: [{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"_balance","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"claimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"weekMerkleRoots","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_liquidityProvider","type":"address"},{"internalType":"uint256","name":"_week","type":"uint256"},{"internalType":"uint256","name":"_claimedBalance","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"claimWeek","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_liquidityProvider","type":"address"},{"components":[{"internalType":"uint256","name":"week","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"internalType":"struct ProtektRedeem.Claim[]","name":"claims","type":"tuple[]"}],"name":"claimWeeks","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_liquidityProvider","type":"address"},{"internalType":"uint256","name":"_begin","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"claimStatus","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_begin","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"}],"name":"merkleRoots","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_liquidityProvider","type":"address"},{"internalType":"uint256","name":"_week","type":"uint256"},{"internalType":"uint256","name":"_claimedBalance","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"verifyClaim","outputs":[{"internalType":"bool","name":"valid","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_week","type":"uint256"},{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"},{"internalType":"uint256","name":"_totalAllocation","type":"uint256"}],"name":"seedAllocations","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],
          bytecode: "0x60806040523480156200001157600080fd5b5060405162001c9d38038062001c9d83398181016040526200003791908101906200014e565b6000620000496200012f60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620001c8565b600033905090565b6000815190506200014881620001ae565b92915050565b6000602082840312156200016157600080fd5b6000620001718482850162000137565b91505092915050565b600062000187826200018e565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001b9816200017a565b8114620001c557600080fd5b50565b611ac580620001d86000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063dd8c9c9d11610066578063dd8c9c9d146101fe578063eb0d07f51461022e578063f2fde38b1461025e578063fc0c546a1461027a576100cf565b80638da5cb5b146101a65780638f32d59b146101c4578063c804c39a146101e2576100cf565b8063120aa877146100d457806339436b001461010457806347fb23c1146101345780634cd488ab1461016457806358b4e4b414610180578063715018a61461019c575b600080fd5b6100ee60048036036100e9919081019061122f565b610298565b6040516100fb919061171c565b60405180910390f35b61011e600480360361011991908101906112ba565b6102c7565b60405161012b91906116fa565b60405180910390f35b61014e60048036036101499190810190611113565b61035c565b60405161015b91906116d8565b60405180910390f35b61017e6004803603610179919081019061126b565b610442565b005b61019a60048036036101959190810190611162565b6105ee565b005b6101a461071a565b005b6101ae610820565b6040516101bb919061165d565b60405180910390f35b6101cc610849565b6040516101d9919061171c565b60405180910390f35b6101fc60048036036101f791908101906110bf565b6108a7565b005b61021860048036036102139190810190611206565b610a30565b6040516102259190611737565b60405180910390f35b61024860048036036102439190810190611162565b610a48565b604051610255919061171c565b60405180910390f35b61027860048036036102739190810190611096565b610a9f565b005b610282610af2565b60405161028f9190611752565b60405180910390f35b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b6060600083836001010390506060816040519080825280602002602001820160405280156103045781602001602082028038833980820191505090505b50905060008090505b82811015610350576002600082880181526020019081526020016000205482828151811061033757fe5b602002602001018181525050808060010191505061030d565b50809250505092915050565b6060600083836001010390506060816040519080825280602002602001820160405280156103995781602001602082028038833980820191505090505b50905060008090505b828110156104355760036000828801815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1682828151811061041657fe5b60200260200101901515908115158152505080806001019150506103a2565b5080925050509392505050565b61044a610849565b610489576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610480906117ad565b60405180910390fd5b6000801b6002600085815260200190815260200160002054146104e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d8906117ed565b60405180910390fd5b816002600085815260200190815260200160002081905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330846040518463ffffffff1660e01b815260040161055893929190611678565b602060405180830381600087803b15801561057257600080fd5b505af1158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506105aa91908101906111dd565b6105e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e0906117cd565b60405180910390fd5b505050565b6003600084815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561065657600080fd5b61066284848484610a48565b6106a1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106989061178d565b60405180910390fd5b60016003600085815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506107148483610b18565b50505050565b610722610849565b610761576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610758906117ad565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661088b610c4d565b73ffffffffffffffffffffffffffffffffffffffff1614905090565b60008090506108b4610e2f565b60008090505b8351811015610a1f578381815181106108cf57fe5b60200260200101519150600360008360000151815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561094557600080fd5b61095d85836000015184602001518560400151610a48565b61099c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109939061178d565b60405180910390fd5b8160200151830192506001600360008460000151815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555080806001019150506108ba565b50610a2a8483610b18565b50505050565b60026020528060005260406000206000915090505481565b6000808584604051602001610a5e929190611605565b604051602081830303815290604052805190602001209050610a9483600260008881526020019081526020016000205483610c55565b915050949350505050565b610aa7610849565b610ae6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610add906117ad565b60405180910390fd5b610aef81610d01565b50565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000811115610c49577fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a8282604051610b529291906116af565b60405180910390a1600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb83836040518363ffffffff1660e01b8152600401610bb79291906116af565b602060405180830381600087803b158015610bd157600080fd5b505af1158015610be5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250610c0991908101906111dd565b610c48576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3f906117cd565b60405180910390fd5b5b5050565b600033905090565b60008082905060008090505b8551811015610cf3576000868281518110610c7857fe5b60200260200101519050808311610cb9578281604051602001610c9c929190611631565b604051602081830303815290604052805190602001209250610ce5565b8083604051602001610ccc929190611631565b6040516020818303038152906040528051906020012092505b508080600101915050610c61565b508381149150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610d71576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d689061176d565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60405180606001604052806000815260200160008152602001606081525090565b600081359050610e5f81611a26565b92915050565b600082601f830112610e7657600080fd5b8135610e89610e848261183a565b61180d565b91508181835260208401935060208101905083856020840282011115610eae57600080fd5b60005b83811015610ede5781610ec48882610ff4565b845260208401935060208301925050600181019050610eb1565b5050505092915050565b600082601f830112610ef957600080fd5b8135610f0c610f0782611862565b61180d565b91508181835260208401935060208101905083856020840282011115610f3157600080fd5b60005b83811015610f615781610f478882610ff4565b845260208401935060208301925050600181019050610f34565b5050505092915050565b600082601f830112610f7c57600080fd5b8135610f8f610f8a8261188a565b61180d565b9150818183526020840193506020810190508360005b83811015610fd55781358601610fbb8882611009565b845260208401935060208301925050600181019050610fa5565b5050505092915050565b600081519050610fee81611a3d565b92915050565b60008135905061100381611a54565b92915050565b60006060828403121561101b57600080fd5b611025606061180d565b9050600061103584828501611081565b600083015250602061104984828501611081565b602083015250604082013567ffffffffffffffff81111561106957600080fd5b61107584828501610e65565b60408301525092915050565b60008135905061109081611a6b565b92915050565b6000602082840312156110a857600080fd5b60006110b684828501610e50565b91505092915050565b600080604083850312156110d257600080fd5b60006110e085828601610e50565b925050602083013567ffffffffffffffff8111156110fd57600080fd5b61110985828601610f6b565b9150509250929050565b60008060006060848603121561112857600080fd5b600061113686828701610e50565b935050602061114786828701611081565b925050604061115886828701611081565b9150509250925092565b6000806000806080858703121561117857600080fd5b600061118687828801610e50565b945050602061119787828801611081565b93505060406111a887828801611081565b925050606085013567ffffffffffffffff8111156111c557600080fd5b6111d187828801610ee8565b91505092959194509250565b6000602082840312156111ef57600080fd5b60006111fd84828501610fdf565b91505092915050565b60006020828403121561121857600080fd5b600061122684828501611081565b91505092915050565b6000806040838503121561124257600080fd5b600061125085828601611081565b925050602061126185828601610e50565b9150509250929050565b60008060006060848603121561128057600080fd5b600061128e86828701611081565b935050602061129f86828701610ff4565b92505060406112b086828701611081565b9150509250925092565b600080604083850312156112cd57600080fd5b60006112db85828601611081565b92505060206112ec85828601611081565b9150509250929050565b60006113028383611417565b60208301905092915050565b600061131a8383611435565b60208301905092915050565b61132f81611987565b82525050565b61133e81611935565b82525050565b61135561135082611935565b6119e1565b82525050565b6000611366826118d2565b6113708185611902565b935061137b836118b2565b8060005b838110156113ac57815161139388826112f6565b975061139e836118e8565b92505060018101905061137f565b5085935050505092915050565b60006113c4826118dd565b6113ce8185611913565b93506113d9836118c2565b8060005b8381101561140a5781516113f1888261130e565b97506113fc836118f5565b9250506001810190506113dd565b5085935050505092915050565b61142081611947565b82525050565b61142f81611947565b82525050565b61143e81611953565b82525050565b61144d81611953565b82525050565b61146461145f82611953565b6119f3565b82525050565b61147381611999565b82525050565b6000611486602683611924565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006114ec601683611924565b91507f496e636f7272656374206d65726b6c652070726f6f66000000000000000000006000830152602082019050919050565b600061152c602083611924565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b600061156c601383611924565b91507f4552525f5452414e534645525f4641494c4544000000000000000000000000006000830152602082019050919050565b60006115ac601a83611924565b91507f63616e6e6f742072657772697465206d65726b6c6520726f6f740000000000006000830152602082019050919050565b6115e88161197d565b82525050565b6115ff6115fa8261197d565b611a0f565b82525050565b60006116118285611344565b60148201915061162182846115ee565b6020820191508190509392505050565b600061163d8285611453565b60208201915061164d8284611453565b6020820191508190509392505050565b60006020820190506116726000830184611335565b92915050565b600060608201905061168d6000830186611326565b61169a6020830185611335565b6116a760408301846115df565b949350505050565b60006040820190506116c46000830185611335565b6116d160208301846115df565b9392505050565b600060208201905081810360008301526116f2818461135b565b905092915050565b6000602082019050818103600083015261171481846113b9565b905092915050565b60006020820190506117316000830184611426565b92915050565b600060208201905061174c6000830184611444565b92915050565b6000602082019050611767600083018461146a565b92915050565b6000602082019050818103600083015261178681611479565b9050919050565b600060208201905081810360008301526117a6816114df565b9050919050565b600060208201905081810360008301526117c68161151f565b9050919050565b600060208201905081810360008301526117e68161155f565b9050919050565b600060208201905081810360008301526118068161159f565b9050919050565b6000604051905081810181811067ffffffffffffffff8211171561183057600080fd5b8060405250919050565b600067ffffffffffffffff82111561185157600080fd5b602082029050602081019050919050565b600067ffffffffffffffff82111561187957600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156118a157600080fd5b602082029050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b60006119408261195d565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611992826119bd565b9050919050565b60006119a4826119ab565b9050919050565b60006119b68261195d565b9050919050565b60006119c8826119cf565b9050919050565b60006119da8261195d565b9050919050565b60006119ec826119fd565b9050919050565b6000819050919050565b6000611a0882611a19565b9050919050565b6000819050919050565b60008160601b9050919050565b611a2f81611935565b8114611a3a57600080fd5b50565b611a4681611947565b8114611a5157600080fd5b50565b611a5d81611953565b8114611a6857600080fd5b50565b611a748161197d565b8114611a7f57600080fd5b5056fea365627a7a72315820972e4343806a32e80bade01bd686c1266c1af785e1d27847b915236d7f5669966c6578706572696d656e74616cf564736f6c63430005110040"
        },
        "compound-dai-manual-claims": {  
          address: "0x2676c96A67202e306E50D29213E412aF4137D60D",
          abi: [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"InvestigationPeriodEnd","type":"uint256"}],"name":"ClaimInvestigationStarted","type":"event"},{"anonymous":false,"inputs":[],"name":"Payout","type":"event"},{"constant":true,"inputs":[],"name":"activePayoutEvent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentInvestigationPeriodEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"investigationPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"shieldToken","outputs":[{"internalType":"contract IShieldToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"status","outputs":[{"internalType":"enum ClaimsManagerSingleAccount.ClaimsStatus","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_shieldToken","type":"address"}],"name":"setShieldToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setInvestigationPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"checkPayoutEvent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_activePayoutEvent","type":"bool"}],"name":"setActivePayoutEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"submitClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payoutClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"resetClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isReady","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: "0x608060405234801561001057600080fd5b5061a8c060028190555060006003819055506000600460006101000a81548160ff02191690831515021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160146101000a81548160ff0219169083600281111561009d57fe5b0217905550610db2806100b16000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636d3c3d4011610097578063ab033ea911610066578063ab033ea914610278578063d999e6ee146102bc578063ee8ba5c514610300578063f82cbde41461034a576100f5565b80636d3c3d40146101fe57806380000dc51461021c5780639d55ce561461024c578063a094a03114610256576100f5565b8063200d2ed2116100d3578063200d2ed21461015c578063264c7f4014610188578063553ea3e9146101aa5780635aa6e675146101b4576100f5565b80630d540408146100fa5780631afbd128146101185780631bb7eef41461013a575b600080fd5b610102610378565b6040518082815260200191505060405180910390f35b61012061037e565b604051808215151515815260200191505060405180910390f35b610142610492565b604051808215151515815260200191505060405180910390f35b6101646104a5565b6040518082600281111561017457fe5b60ff16815260200191505060405180910390f35b6101906104b8565b604051808215151515815260200191505060405180910390f35b6101b26104cf565b005b6101bc6106bf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102066106e5565b6040518082815260200191505060405180910390f35b61024a6004803603602081101561023257600080fd5b810190808035151590602001909291905050506106eb565b005b6102546107cb565b005b61025e610a4f565b604051808215151515815260200191505060405180910390f35b6102ba6004803603602081101561028e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7e565b005b6102fe600480360360208110156102d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b85565b005b610308610c8b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103766004803603602081101561036057600080fd5b8101908080359060200190929190505050610cb0565b005b60025481565b600080600281111561038c57fe5b600160149054906101000a900460ff1660028111156103a757fe5b1461041a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f215265616479000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6104226104b8565b1561048f57600254430160038190555060018060146101000a81548160ff0219169083600281111561045057fe5b02179055507fa64bb3be94822c94a1b10353c9cda615e3c092c8857f979e6082f7b60da490f46003546040518082815260200191505060405180910390a15b90565b600460009054906101000a900460ff1681565b600160149054906101000a900460ff1681565b6000600460009054906101000a900460ff16905090565b436003541115610547576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f21446f6e6520496e7665737469676174696e670000000000000000000000000081525060200191505060405180910390fd5b60028081111561055357fe5b600160149054906101000a900460ff16600281111561056e57fe5b14806105b057506001600281111561058257fe5b600160149054906101000a900460ff16600281111561059d57fe5b1480156105af57506105ad6104b8565b155b5b610622576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f2150616964206f722021496e7665737469676174696e672b5061796f7574000081525060200191505060405180910390fd5b60028081111561062e57fe5b600160149054906101000a900460ff16600281111561064957fe5b148061068b57506001600281111561065d57fe5b600160149054906101000a900460ff16600281111561067857fe5b14801561068a57506106886104b8565b155b5b156106bd5760006003819055506000600160146101000a81548160ff021916908360028111156106b757fe5b02179055505b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600460006101000a81548160ff02191690831515021790555050565b600160028111156107d857fe5b600160149054906101000a900460ff1660028111156107f357fe5b14610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f21496e7665737469676174696e6700000000000000000000000000000000000081525060200191505060405180910390fd5b4360035411156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f21446f6e6520496e7665737469676174696e670000000000000000000000000081525060200191505060405180910390fd5b6108e66104b8565b610958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f215061796f7574204576656e740000000000000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166363bd1d4a6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156109c157600080fd5b505af11580156109d5573d6000803e3d6000fd5b505050506040513d60208110156109eb57600080fd5b8101908080519060200190929190505050506002600160146101000a81548160ff02191690836002811115610a1c57fe5b02179055507f354d7e40465161205ea9dee6ebfe67aee9bc460c83cd2397a35e68c5f6ef5e5160405160405180910390a1565b6000806002811115610a5d57fe5b600160149054906101000a900460ff166002811115610a7857fe5b14905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b806002819055505056fea265627a7a72315820768b518ac1007b3557548f0802aa22cbe6311debc0dfd1af6b8dee192ec5a71064736f6c63430005110032"
        },
        "aave-usdc-manual-claims":{
          address: "0xC593A2A8283C0c54fE624C7668796161A20e8956",
          abi: [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"InvestigationPeriodEnd","type":"uint256"}],"name":"ClaimInvestigationStarted","type":"event"},{"anonymous":false,"inputs":[],"name":"Payout","type":"event"},{"constant":true,"inputs":[],"name":"activePayoutEvent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentInvestigationPeriodEnd","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"governance","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"investigationPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"shieldToken","outputs":[{"internalType":"contract IShieldToken","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"status","outputs":[{"internalType":"enum ClaimsManagerSingleAccount.ClaimsStatus","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_shieldToken","type":"address"}],"name":"setShieldToken","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_governance","type":"address"}],"name":"setGovernance","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setInvestigationPeriod","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"checkPayoutEvent","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bool","name":"_activePayoutEvent","type":"bool"}],"name":"setActivePayoutEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"submitClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"payoutClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"resetClaim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"isReady","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: "0x608060405234801561001057600080fd5b5061a8c060028190555060006003819055506000600460006101000a81548160ff02191690831515021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160146101000a81548160ff0219169083600281111561009d57fe5b0217905550610db2806100b16000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636d3c3d4011610097578063ab033ea911610066578063ab033ea914610278578063d999e6ee146102bc578063ee8ba5c514610300578063f82cbde41461034a576100f5565b80636d3c3d40146101fe57806380000dc51461021c5780639d55ce561461024c578063a094a03114610256576100f5565b8063200d2ed2116100d3578063200d2ed21461015c578063264c7f4014610188578063553ea3e9146101aa5780635aa6e675146101b4576100f5565b80630d540408146100fa5780631afbd128146101185780631bb7eef41461013a575b600080fd5b610102610378565b6040518082815260200191505060405180910390f35b61012061037e565b604051808215151515815260200191505060405180910390f35b610142610492565b604051808215151515815260200191505060405180910390f35b6101646104a5565b6040518082600281111561017457fe5b60ff16815260200191505060405180910390f35b6101906104b8565b604051808215151515815260200191505060405180910390f35b6101b26104cf565b005b6101bc6106bf565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102066106e5565b6040518082815260200191505060405180910390f35b61024a6004803603602081101561023257600080fd5b810190808035151590602001909291905050506106eb565b005b6102546107cb565b005b61025e610a4f565b604051808215151515815260200191505060405180910390f35b6102ba6004803603602081101561028e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610a7e565b005b6102fe600480360360208110156102d257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b85565b005b610308610c8b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103766004803603602081101561036057600080fd5b8101908080359060200190929190505050610cb0565b005b60025481565b600080600281111561038c57fe5b600160149054906101000a900460ff1660028111156103a757fe5b1461041a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f215265616479000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b6104226104b8565b1561048f57600254430160038190555060018060146101000a81548160ff0219169083600281111561045057fe5b02179055507fa64bb3be94822c94a1b10353c9cda615e3c092c8857f979e6082f7b60da490f46003546040518082815260200191505060405180910390a15b90565b600460009054906101000a900460ff1681565b600160149054906101000a900460ff1681565b6000600460009054906101000a900460ff16905090565b436003541115610547576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f21446f6e6520496e7665737469676174696e670000000000000000000000000081525060200191505060405180910390fd5b60028081111561055357fe5b600160149054906101000a900460ff16600281111561056e57fe5b14806105b057506001600281111561058257fe5b600160149054906101000a900460ff16600281111561059d57fe5b1480156105af57506105ad6104b8565b155b5b610622576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f2150616964206f722021496e7665737469676174696e672b5061796f7574000081525060200191505060405180910390fd5b60028081111561062e57fe5b600160149054906101000a900460ff16600281111561064957fe5b148061068b57506001600281111561065d57fe5b600160149054906101000a900460ff16600281111561067857fe5b14801561068a57506106886104b8565b155b5b156106bd5760006003819055506000600160146101000a81548160ff021916908360028111156106b757fe5b02179055505b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146107ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600460006101000a81548160ff02191690831515021790555050565b600160028111156107d857fe5b600160149054906101000a900460ff1660028111156107f357fe5b14610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f21496e7665737469676174696e6700000000000000000000000000000000000081525060200191505060405180910390fd5b4360035411156108de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f21446f6e6520496e7665737469676174696e670000000000000000000000000081525060200191505060405180910390fd5b6108e66104b8565b610958576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600d8152602001807f215061796f7574204576656e740000000000000000000000000000000000000081525060200191505060405180910390fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166363bd1d4a6040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156109c157600080fd5b505af11580156109d5573d6000803e3d6000fd5b505050506040513d60208110156109eb57600080fd5b8101908080519060200190929190505050506002600160146101000a81548160ff02191690836002811115610a1c57fe5b02179055507f354d7e40465161205ea9dee6ebfe67aee9bc460c83cd2397a35e68c5f6ef5e5160405160405180910390a1565b6000806002811115610a5d57fe5b600160149054906101000a900460ff166002811115610a7857fe5b14905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610b41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b806002819055505056fea265627a7a72315820768b518ac1007b3557548f0802aa22cbe6311debc0dfd1af6b8dee192ec5a71064736f6c63430005110032"
        },
       usdc: {
          address: '0xe22da380ee6B445bb8273C81944ADEB6E8450422',
          abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: '0x60e0604052602260808181529061067a60a039805161002691600091602090910190610039565b5034801561003357600080fd5b506100d4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061007a57805160ff19168380011785556100a7565b828001600101855582156100a7579182015b828111156100a757825182559160200191906001019061008c565b506100b39291506100b7565b5090565b6100d191905b808211156100b357600081556001016100bd565b90565b610597806100e36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806370740aab1461003b578063eb68757f146100b8575b600080fd5b610043610160565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561007d578181015183820152602001610065565b50505050905090810190601f1680156100aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015e600480360360208110156100ce57600080fd5b8101906020810181356401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ee945050505050565b005b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101e65780601f106101bb576101008083540402835291602001916101e6565b820191906000526020600020905b8154815290600101906020018083116101c957829003601f168201915b505050505081565b80516102019060009060208401906104c6565b50604080518082018252600e81526d73657420707572706f736520746f60901b60208083019190915260008054845160026001831615610100026000190190921691909104601f81018490048402820184019095528481526102be943394939192918301828280156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b5050505050610379565b60408051338082526020820183815260008054600260001961010060018416150201909116049484018590527f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de94929390929091906060830190849080156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b5050935050505060405180910390a150565b6104a083838360405160240180846001600160a01b03166001600160a01b031681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103db5781810151838201526020016103c3565b50505050905090810190601f1680156104085780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561043b578181015183820152602001610423565b50505050905090810190601f1680156104685780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b17905295506104a5945050505050565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050757805160ff1916838001178555610534565b82800160010185558215610534579182015b82811115610534578251825591602001919060010190610519565b50610540929150610544565b5090565b61055e91905b80821115610540576000815560010161054a565b9056fea264697066735822122037cf5aa5463ff264432526c10096a7a77bc7e0c9351b07923e87731b91e78ae664736f6c63430006070033f09f9ba02050726f6772616d6d696e6720556e73746f707061626c65204d6f6e6579',
        },
        ausdc: {
          address: "0xe12AFeC5aa12Cf614678f9bFeeB98cA9Bb95b5B0",
          abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"showMeTheMoney","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
          bytecode: '0x60e0604052602260808181529061067a60a039805161002691600091602090910190610039565b5034801561003357600080fd5b506100d4565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061007a57805160ff19168380011785556100a7565b828001600101855582156100a7579182015b828111156100a757825182559160200191906001019061008c565b506100b39291506100b7565b5090565b6100d191905b808211156100b357600081556001016100bd565b90565b610597806100e36000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806370740aab1461003b578063eb68757f146100b8575b600080fd5b610043610160565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561007d578181015183820152602001610065565b50505050905090810190601f1680156100aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61015e600480360360208110156100ce57600080fd5b8101906020810181356401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184600183028401116401000000008311171561011d57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506101ee945050505050565b005b6000805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156101e65780601f106101bb576101008083540402835291602001916101e6565b820191906000526020600020905b8154815290600101906020018083116101c957829003601f168201915b505050505081565b80516102019060009060208401906104c6565b50604080518082018252600e81526d73657420707572706f736520746f60901b60208083019190915260008054845160026001831615610100026000190190921691909104601f81018490048402820184019095528481526102be943394939192918301828280156102b45780601f10610289576101008083540402835291602001916102b4565b820191906000526020600020905b81548152906001019060200180831161029757829003601f168201915b5050505050610379565b60408051338082526020820183815260008054600260001961010060018416150201909116049484018590527f6ea5d6383a120235c7728a9a6751672a8ac068e4ed34dcca2ee444182c1812de94929390929091906060830190849080156103675780601f1061033c57610100808354040283529160200191610367565b820191906000526020600020905b81548152906001019060200180831161034a57829003601f168201915b5050935050505060405180910390a150565b6104a083838360405160240180846001600160a01b03166001600160a01b031681526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156103db5781810151838201526020016103c3565b50505050905090810190601f1680156104085780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561043b578181015183820152602001610423565b50505050905090810190601f1680156104685780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b031663fb77226560e01b17905295506104a5945050505050565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061050757805160ff1916838001178555610534565b82800160010185558215610534579182015b82811115610534578251825591602001919060010190610519565b50610540929150610544565b5090565b61055e91905b80821115610540576000815560010161054a565b9056fea264697066735822122037cf5aa5463ff264432526c10096a7a77bc7e0c9351b07923e87731b91e78ae664736f6c63430006070033f09f9ba02050726f6772616d6d696e6720556e73746f707061626c65204d6f6e6579',
        },
        pausdc: {
          address: "0x00424829E11C55cA9307444C1828CA9Ea6F6B56E",
          abi: [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_depositToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_feeModel",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_claimsManager",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "HarvestRewards",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "ausdcTokenAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "balanceLastHarvest",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "claimsManager",
              "outputs": [
                {
                  "internalType": "contract IClaimsManagerCore",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "depositToken",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "feeModel",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "governance",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "isCapped",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "lendingPoolAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "maxDeposit",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "shieldTokenAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "usdcTokenAddress",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "balance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_governance",
                  "type": "address"
                }
              ],
              "name": "setGovernance",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_shieldTokenAddress",
                  "type": "address"
                }
              ],
              "name": "setShieldToken",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "depositor",
                  "type": "address"
                }
              ],
              "name": "depositCoreTokens",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "depositCoreTokens",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "depositAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "deposit",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "withdrawAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "harvestRewards",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "depositToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "shieldTokenAddress",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "balanceLastHarvest",
                  "type": "uint256"
                }
              ],
              "name": "harvestRewards",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_shares",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "getPricePerFullShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "capDeposits",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "uncapDeposits",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
          "bytecode": "0x608060405260146006553480156200001657600080fd5b50604051620040bd380380620040bd833981810160405260608110156200003c57600080fd5b810190808051906020019092919080519060200190929190805190602001909291905050508273ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015620000a857600080fd5b505afa158015620000bd573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620000e857600080fd5b81019080805160405193929190846401000000008211156200010957600080fd5b838201915060208201858111156200012057600080fd5b82518660018202830111640100000000821117156200013e57600080fd5b8083526020830192505050908051906020019080838360005b838110156200017457808201518184015260208101905062000157565b50505050905090810190601f168015620001a25780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f70726f74656b742000000000000000000000000000000000000000000000000081525060080182805190602001908083835b60208310620002095780518252602082019150602081019050602083039250620001e4565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528373ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200028457600080fd5b505afa15801562000299573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620002c457600080fd5b8101908080516040519392919084640100000000821115620002e557600080fd5b83820191506020820185811115620002fc57600080fd5b82518660018202830111640100000000821117156200031a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200035057808201518184015260208101905062000333565b50505050905090810190601f1680156200037e5780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f700000000000000000000000000000000000000000000000000000000000000081525060010182805190602001908083835b60208310620003e55780518252602082019150602081019050602083039250620003c0565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200046057600080fd5b505afa15801562000475573d6000803e3d6000fd5b505050506040513d60208110156200048c57600080fd5b81019080805190602001909291905050508260039080519060200190620004b592919062000630565b508160049080519060200190620004ce92919062000630565b5080600560006101000a81548160ff021916908360ff1602179055505050506001600760006101000a81548160ff02191690831515021790555082600760016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600b60146101000a81548160ff021916908315150217905550505050620006df565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200067357805160ff1916838001178555620006a4565b82800160010185558215620006a4579182015b82811115620006a357825182559160200191906001019062000686565b5b509050620006b39190620006b7565b5090565b620006dc91905b80821115620006d8576000816000905550600101620006be565b5090565b90565b6139ce80620006ef6000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c806377c7b8fc11610125578063b69ef8a8116100ad578063d3ae26b31161007c578063d3ae26b314610a5f578063d3daa67a14610aa9578063d999e6ee14610ab3578063dd62ed3e14610af7578063de5f626814610b6f5761021c565b8063b69ef8a81461099b578063b6b55f25146109b9578063c89039c5146109e7578063cb6c64a414610a315761021c565b806397ee1144116100f457806397ee1144146107f7578063a457c2d714610841578063a8f43ad7146108a7578063a9059cbb146108f1578063ab033ea9146109575761021c565b806377c7b8fc1461072e578063853828b61461074c57806391784f431461075657806395d89b41146107745761021c565b806339509351116101a85780636083e59a116101775780636083e59a14610602578063671528d41461062057806370a0823114610642578063714bcf101461069a57806377b53ece146106e45761021c565b806339509351146104b6578063452773321461051c578063526049731461054a5780635aa6e675146105b85761021c565b806323b872dd116101ef57806323b872dd146103725780632be11ae2146103f85780632d262000146104025780632e1a7d4d14610464578063313ce567146104925761021c565b806306fdde0314610221578063095ea7b3146102a457806318160ddd1461030a5780631eb08ba914610328575b600080fd5b610229610b79565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026957808201518184015260208101905061024e565b50505050905090810190601f1680156102965780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102f0600480360360408110156102ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c1b565b604051808215151515815260200191505060405180910390f35b610312610c39565b6040518082815260200191505060405180910390f35b610330610c43565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103de6004803603606081101561038857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c69565b604051808215151515815260200191505060405180910390f35b610400610d42565b005b61044e6004803603604081101561041857600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d95565b6040518082815260200191505060405180910390f35b6104906004803603602081101561047a57600080fd5b8101908080359060200190929190505050610f39565b005b61049a611099565b604051808260ff1660ff16815260200191505060405180910390f35b610502600480360360408110156104cc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110b0565b604051808215151515815260200191505060405180910390f35b6105486004803603602081101561053257600080fd5b8101908080359060200190929190505050611163565b005b6105b66004803603606081101561056057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061161d565b005b6105c06117a2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61060a6117c8565b6040518082815260200191505060405180910390f35b6106286117ce565b604051808215151515815260200191505060405180910390f35b6106846004803603602081101561065857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117e1565b6040518082815260200191505060405180910390f35b6106a2611829565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106ec611841565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610736611859565b6040518082815260200191505060405180910390f35b61075461189b565b005b61075e6118ae565b6040518082815260200191505060405180910390f35b61077c6118b4565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156107bc5780820151818401526020810190506107a1565b50505050905090810190601f1680156107e95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107ff611956565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61088d6004803603604081101561085757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061197c565b604051808215151515815260200191505060405180910390f35b6108af611a49565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61093d6004803603604081101561090757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611a6f565b604051808215151515815260200191505060405180910390f35b6109996004803603602081101561096d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a8d565b005b6109a3611b94565b6040518082815260200191505060405180910390f35b6109e5600480360360208110156109cf57600080fd5b8101908080359060200190929190505050611c75565b005b6109ef611d41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610a5d60048036036020811015610a4757600080fd5b8101908080359060200190929190505050611d67565b005b610a67611e4f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610ab1611e67565b005b610af560048036036020811015610ac957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611f47565b005b610b5960048036036040811015610b0d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061204e565b6040518082815260200191505060405180910390f35b610b776120d5565b005b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c115780601f10610be657610100808354040283529160200191610c11565b820191906000526020600020905b815481529060010190602001808311610bf457829003601f168201915b5050505050905090565b6000610c2f610c286121b9565b84846121c1565b6001905092915050565b6000600254905090565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610c768484846123b8565b610d3784610c826121b9565b610d328560405180606001604052806028815260200161388360289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610ce86121b9565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461266e9092919063ffffffff16565b6121c1565b600190509392505050565b610d93600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600d5461161d565b565b6000610dd882308573a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff1661272e909392919063ffffffff16565b610e2b737d2768de32b0b80b7a3454c06bdac94a69ddc7a98473a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4873ffffffffffffffffffffffffffffffffffffffff166128349092919063ffffffff16565b737d2768de32b0b80b7a3454c06bdac94a69ddc7a973ffffffffffffffffffffffffffffffffffffffff1663e8eda9df73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48853060006040518563ffffffff1660e01b8152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff168152602001945050505050600060405180830381600087803b158015610f1b57600080fd5b505af1158015610f2f573d6000803e3d6000fd5b5050505092915050565b600760009054906101000a900460ff16610fbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6000600760006101000a81548160ff021916908315150217905550610fde610d42565b6000611013610feb610c39565b61100584610ff7611b94565b612a5490919063ffffffff16565b612ada90919063ffffffff16565b905061101f3383612b24565b61106c3382600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612cdc9092919063ffffffff16565b611074611b94565b600d81905550506001600760006101000a81548160ff02191690831515021790555050565b6000600560009054906101000a900460ff16905090565b60006111596110bd6121b9565b8461115485600160006110ce6121b9565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612dad90919063ffffffff16565b6121c1565b6001905092915050565b600760009054906101000a900460ff166111e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6000600760006101000a81548160ff021916908315150217905550600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a094a0316040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561126a57600080fd5b505af115801561127e573d6000803e3d6000fd5b505050506040513d602081101561129457600080fd5b8101908080519060200190929190505050611317576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f215265616479000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b61131f610d42565b6000611329611b94565b90506000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156113cc57600080fd5b505afa1580156113e0573d6000803e3d6000fd5b505050506040513d60208110156113f657600080fd5b81019080805190602001909291905050509050600b60149054906101000a900460ff161561149957600c548382011115611498576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436170206578636565646564000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b6114a38333610d95565b506000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561154557600080fd5b505afa158015611559573d6000803e3d6000fd5b505050506040513d602081101561156f57600080fd5b810190808051906020019092919050505090506115958282612e3590919063ffffffff16565b9350600080905060006115a6610c39565b14156115b4578490506115e3565b6115e0846115d26115c3610c39565b88612a5490919063ffffffff16565b612ada90919063ffffffff16565b90505b6115ed3382612e7f565b6115f5611b94565b600d81905550505050506001600760006101000a81548160ff02191690831515021790555050565b60006116e9828573ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156116a057600080fd5b505afa1580156116b4573d6000803e3d6000fd5b505050506040513d60208110156116ca57600080fd5b8101908080519060200190929190505050612e3590919063ffffffff16565b90506000611715606461170760065485612a5490919063ffffffff16565b612ada90919063ffffffff16565b9050600061172c8284612e3590919063ffffffff16565b905060008211156117635761176285838873ffffffffffffffffffffffffffffffffffffffff16612cdc9092919063ffffffff16565b5b7fc8004e996aeb9ddf998debb2ef732f1fc90ad7ef353fc45c0559b81497429904836040518082815260200191505060405180910390a1505050505050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600c5481565b600b60149054906101000a900460ff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b73bcca60bb61934080951369a648fb03df4f96263c81565b73a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4881565b6000611896611866610c39565b611888670de0b6b3a764000061187a611b94565b612a5490919063ffffffff16565b612ada90919063ffffffff16565b905090565b6118ac6118a7336117e1565b610f39565b565b600d5481565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561194c5780601f106119215761010080835404028352916020019161194c565b820191906000526020600020905b81548152906001019060200180831161192f57829003601f168201915b5050505050905090565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000611a3f6119896121b9565b84611a3a8560405180606001604052806025815260200161397560259139600160006119b36121b9565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461266e9092919063ffffffff16565b6121c1565b6001905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000611a83611a7c6121b9565b84846123b8565b6001905092915050565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611b50576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611c3557600080fd5b505afa158015611c49573d6000803e3d6000fd5b505050506040513d6020811015611c5f57600080fd5b8101908080519060200190929190505050905090565b600760009054906101000a900460ff16611cf7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0081525060200191505060405180910390fd5b6000600760006101000a81548160ff021916908315150217905550611d1a610d42565b611d238161303a565b6001600760006101000a81548160ff02191690831515021790555050565b600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611e2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600b60146101000a81548160ff02191690831515021790555080600c8190555050565b737d2768de32b0b80b7a3454c06bdac94a69ddc7a981565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611f2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000600b60146101000a81548160ff021916908315150217905550565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461200a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6121b7600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561217757600080fd5b505afa15801561218b573d6000803e3d6000fd5b505050506040513d60208110156121a157600080fd5b8101908080519060200190929190505050611c75565b565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415612247576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806138f16024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156122cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061381a6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561243e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806138cc6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156124c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806137d56023913960400191505060405180910390fd5b61252f8160405180606001604052806026815260200161383c602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461266e9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506125c2816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612dad90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600083831115829061271b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156126e05780820151818401526020810190506126c5565b50505050905090810190601f16801561270d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b61282e848573ffffffffffffffffffffffffffffffffffffffff166323b872dd905060e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613478565b50505050565b600081148061292e575060008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156128f157600080fd5b505afa158015612905573d6000803e3d6000fd5b505050506040513d602081101561291b57600080fd5b8101908080519060200190929190505050145b612983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603681526020018061393f6036913960400191505060405180910390fd5b612a4f838473ffffffffffffffffffffffffffffffffffffffff1663095ea7b3905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613478565b505050565b600080831415612a675760009050612ad4565b6000828402905082848281612a7857fe5b0414612acf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806138626021913960400191505060405180910390fd5b809150505b92915050565b6000612b1c83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506136c3565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612baa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806138ab6021913960400191505060405180910390fd5b612c15816040518060600160405280602281526020016137f8602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461266e9092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612c6c81600254612e3590919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b612da8838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613478565b505050565b600080828401905083811015612e2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000612e7783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061266e565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612f22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b612f3781600254612dad90919063ffffffff16565b600281905550612f8e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612dad90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a094a0316040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156130a457600080fd5b505af11580156130b8573d6000803e3d6000fd5b505050506040513d60208110156130ce57600080fd5b8101908080519060200190929190505050613151576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260068152602001807f215265616479000000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b600061315b611b94565b90506000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156131fe57600080fd5b505afa158015613212573d6000803e3d6000fd5b505050506040513d602081101561322857600080fd5b81019080805190602001909291905050509050600b60149054906101000a900460ff16156132cb57600c5483820111156132ca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436170206578636565646564000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b61331a333085600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661272e909392919063ffffffff16565b6000600760019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156133bb57600080fd5b505afa1580156133cf573d6000803e3d6000fd5b505050506040513d60208110156133e557600080fd5b8101908080519060200190929190505050905061340b8282612e3590919063ffffffff16565b93506000809050600061341c610c39565b141561342a57849050613459565b61345684613448613439610c39565b88612a5490919063ffffffff16565b612ada90919063ffffffff16565b90505b6134633382612e7f565b61346b611b94565b600d819055505050505050565b6134978273ffffffffffffffffffffffffffffffffffffffff16613789565b613509576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b602083106135585780518252602082019150602081019050602083039250613535565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146135ba576040519150601f19603f3d011682016040523d82523d6000602084013e6135bf565b606091505b509150915081613637576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b6000815111156136bd5780806020019051602081101561365657600080fd5b81019080805190602001909291905050506136bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613915602a913960400191505060405180910390fd5b5b50505050565b6000808311829061376f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613734578082015181840152602081019050613719565b50505050905090810190601f1680156137615780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161377b57fe5b049050809150509392505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156137cb57506000801b8214155b9250505091905056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a7231582090798db0de7c0430ef8493807fc3ea3c1f83c5c49547a819578cb8c56505e74f64736f6c63430005110032"
        },
        shpausdc: {
          address: "0xe0d1D1cBB5c0a85C7951420795Aca19162eAcB35",
          abi: [
            {
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_protektToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_depositToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_controller",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "_claimsManager",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "constructor"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Approval",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "Paused",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "to",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "uint256",
                  "name": "value",
                  "type": "uint256"
                }
              ],
              "name": "Transfer",
              "type": "event"
            },
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": false,
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "Unpaused",
              "type": "event"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                }
              ],
              "name": "allowance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "approve",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                }
              ],
              "name": "balanceOf",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "claimsManager",
              "outputs": [
                {
                  "internalType": "contract IClaimsManagerCore",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "controller",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "decimals",
              "outputs": [
                {
                  "internalType": "uint8",
                  "name": "",
                  "type": "uint8"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "subtractedValue",
                  "type": "uint256"
                }
              ],
              "name": "decreaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "depositToken",
              "outputs": [
                {
                  "internalType": "contract IERC20",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "governance",
              "outputs": [
                {
                  "internalType": "address",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "spender",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "addedValue",
                  "type": "uint256"
                }
              ],
              "name": "increaseAllowance",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "isCapped",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "max",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "maxDeposit",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "min",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "name",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "paused",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "protektToken",
              "outputs": [
                {
                  "internalType": "contract IProtektToken",
                  "name": "",
                  "type": "address"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "symbol",
              "outputs": [
                {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transfer",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "recipient",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                }
              ],
              "name": "transferFrom",
              "outputs": [
                {
                  "internalType": "bool",
                  "name": "",
                  "type": "bool"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "balance",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_min",
                  "type": "uint256"
                }
              ],
              "name": "setMin",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_protektToken",
                  "type": "address"
                }
              ],
              "name": "setProtektToken",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_governance",
                  "type": "address"
                }
              ],
              "name": "setGovernance",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "address",
                  "name": "_controller",
                  "type": "address"
                }
              ],
              "name": "setController",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "depositAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "deposit",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "withdrawAll",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_shares",
                  "type": "uint256"
                }
              ],
              "name": "withdraw",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": true,
              "inputs": [],
              "name": "getPricePerFullShare",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "payout",
              "outputs": [
                {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
                }
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "pause",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "unpause",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [
                {
                  "internalType": "uint256",
                  "name": "_amount",
                  "type": "uint256"
                }
              ],
              "name": "capDeposits",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            },
            {
              "constant": false,
              "inputs": [],
              "name": "uncapDeposits",
              "outputs": [],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
         "bytecode": "0x608060405261251c6007553480156200001757600080fd5b5060405162003f2838038062003f28833981810160405260808110156200003d57600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291905050508373ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b158015620000b357600080fd5b505afa158015620000c8573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620000f357600080fd5b81019080805160405193929190846401000000008211156200011457600080fd5b838201915060208201858111156200012b57600080fd5b82518660018202830111640100000000821117156200014957600080fd5b8083526020830192505050908051906020019080838360005b838110156200017f57808201518184015260208101905062000162565b50505050905090810190601f168015620001ad5780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f736869656c64200000000000000000000000000000000000000000000000000081525060070182805190602001908083835b60208310620002145780518252602082019150602081019050602083039250620001ef565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528473ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b1580156200028f57600080fd5b505afa158015620002a4573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f820116820180604052506020811015620002cf57600080fd5b8101908080516040519392919084640100000000821115620002f057600080fd5b838201915060208201858111156200030757600080fd5b82518660018202830111640100000000821117156200032557600080fd5b8083526020830192505050908051906020019080838360005b838110156200035b5780820151818401526020810190506200033e565b50505050905090810190601f168015620003895780820380516001836020036101000a031916815260200191505b5060405250505060405160200180807f736800000000000000000000000000000000000000000000000000000000000081525060020182805190602001908083835b60208310620003f05780518252602082019150602081019050602083039250620003cb565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528473ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200046b57600080fd5b505afa15801562000480573d6000803e3d6000fd5b505050506040513d60208110156200049757600080fd5b81019080805190602001909291905050508260039080519060200190620004c09291906200067d565b508160049080519060200190620004d99291906200067d565b5080600560006101000a81548160ff021916908360ff1602179055505050506000600560016101000a81548160ff02191690831515021790555083600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600a60146101000a81548160ff021916908315150217905550505050506200072c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620006c057805160ff1916838001178555620006f1565b82800160010185558215620006f1579182015b82811115620006f0578251825591602001919060010190620006d3565b5b50905062000700919062000704565b5090565b6200072991905b80821115620007255760008160009055506001016200070b565b5090565b90565b6137ec806200073c6000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c806377c7b8fc11610125578063b6b55f25116100ad578063d3daa67a1161007c578063d3daa67a14610983578063dd62ed3e1461098d578063de5f626814610a05578063f77c479114610a0f578063f889794514610a595761021c565b8063b6b55f2514610899578063c89039c5146108c7578063cb6c64a414610911578063d39921e51461093f5761021c565b806395d89b41116100f457806395d89b41146106e8578063a457c2d71461076b578063a9059cbb146107d1578063ab033ea914610837578063b69ef8a81461087b5761021c565b806377c7b8fc146106725780638456cb5914610690578063853828b61461069a57806392eefe9b146106a45761021c565b806345dc3dd8116101a857806360d7f8e31161017757806360d7f8e31461057257806363bd1d4a146105bc578063671528d4146105da5780636ac5db19146105fc57806370a082311461061a5761021c565b806345dc3dd8146104ba5780635aa6e675146104e85780635c975abb146105325780636083e59a146105545761021c565b806323b872dd116101ef57806323b872dd146103725780632e1a7d4d146103f8578063313ce56714610426578063395093511461044a5780633f4ba83a146104b05761021c565b806306fdde0314610221578063095ea7b3146102a457806318160ddd1461030a5780631eb08ba914610328575b600080fd5b610229610a77565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026957808201518184015260208101905061024e565b50505050905090810190601f1680156102965780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102f0600480360360408110156102ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b19565b604051808215151515815260200191505060405180910390f35b610312610b37565b6040518082815260200191505060405180910390f35b610330610b41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103de6004803603606081101561038857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b67565b604051808215151515815260200191505060405180910390f35b6104246004803603602081101561040e57600080fd5b8101908080359060200190929190505050610c40565b005b61042e61104d565b604051808260ff1660ff16815260200191505060405180910390f35b6104966004803603604081101561046057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611064565b604051808215151515815260200191505060405180910390f35b6104b8611117565b005b6104e6600480360360208110156104d057600080fd5b81019080803590602001909291905050506111e4565b005b6104f06112b1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61053a6112d7565b604051808215151515815260200191505060405180910390f35b61055c6112ee565b6040518082815260200191505060405180910390f35b61057a6112f4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105c461131a565b6040518082815260200191505060405180910390f35b6105e26115b5565b604051808215151515815260200191505060405180910390f35b6106046115c8565b6040518082815260200191505060405180910390f35b61065c6004803603602081101561063057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115ce565b6040518082815260200191505060405180910390f35b61067a611616565b6040518082815260200191505060405180910390f35b610698611658565b005b6106a2611725565b005b6106e6600480360360208110156106ba57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611738565b005b6106f061183f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610730578082015181840152602081019050610715565b50505050905090810190601f16801561075d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6107b76004803603604081101561078157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506118e1565b604051808215151515815260200191505060405180910390f35b61081d600480360360408110156107e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506119ae565b604051808215151515815260200191505060405180910390f35b6108796004803603602081101561084d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506119cc565b005b610883611ad3565b6040518082815260200191505060405180910390f35b6108c5600480360360208110156108af57600080fd5b8101908080359060200190929190505050611cc1565b005b6108cf611fda565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61093d6004803603602081101561092757600080fd5b8101908080359060200190929190505050612000565b005b6109816004803603602081101561095557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506120e8565b005b61098b6121ef565b005b6109ef600480360360408110156109a357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506122cf565b6040518082815260200191505060405180910390f35b610a0d612356565b005b610a1761243a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610a61612460565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b0f5780601f10610ae457610100808354040283529160200191610b0f565b820191906000526020600020905b815481529060010190602001808311610af257829003601f168201915b5050505050905090565b6000610b2d610b26612466565b848461246e565b6001905092915050565b6000600254905090565b600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610b74848484612665565b610c3584610b80612466565b610c30856040518060600160405280602881526020016136d760289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610be6612466565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b61246e565b600190509392505050565b600560019054906101000a900460ff1615610cc3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6000610cf8610cd0610b37565b610cea84610cdc611ad3565b6129db90919063ffffffff16565b612a6190919063ffffffff16565b9050610d043383612aab565b6000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610da557600080fd5b505afa158015610db9573d6000803e3d6000fd5b505050506040513d6020811015610dcf57600080fd5b8101908080519060200190929190505050905081811015610ffb576000610dff8284612c6390919063ffffffff16565b9050600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f3fef3a3600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015610ecc57600080fd5b505af1158015610ee0573d6000803e3d6000fd5b505050506000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610f8557600080fd5b505afa158015610f99573d6000803e3d6000fd5b505050506040513d6020811015610faf57600080fd5b810190808051906020019092919050505090506000610fd78483612c6390919063ffffffff16565b905082811015610ff757610ff48185612cad90919063ffffffff16565b94505b5050505b6110483383600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612d359092919063ffffffff16565b505050565b6000600560009054906101000a900460ff16905090565b600061110d611071612466565b846111088560016000611082612466565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612cad90919063ffffffff16565b61246e565b6001905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146111da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6111e2612e06565b565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146112a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b8060078190555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600560019054906101000a900460ff16905090565b600b5481565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146113df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600e8152602001807f21636c61696d734d616e6167657200000000000000000000000000000000000081525060200191505060405180910390fd5b6000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561148057600080fd5b505afa158015611494573d6000803e3d6000fd5b505050506040513d60208110156114aa57600080fd5b810190808051906020019092919050505090506115ae600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166397ee11446040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561152a57600080fd5b505af115801561153e573d6000803e3d6000fd5b505050506040513d602081101561155457600080fd5b810190808051906020019092919050505082600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16612d359092919063ffffffff16565b8091505090565b600a60149054906101000a900460ff1681565b61271081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000611653611623610b37565b611645670de0b6b3a7640000611637611ad3565b6129db90919063ffffffff16565b612a6190919063ffffffff16565b905090565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461171b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b611723612f08565b565b611736611731336115ce565b610c40565b565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146117fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118d75780601f106118ac576101008083540402835291602001916118d7565b820191906000526020600020905b8154815290600101906020018083116118ba57829003601f168201915b5050505050905090565b60006119a46118ee612466565b8461199f856040518060600160405280602581526020016137936025913960016000611918612466565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b61246e565b6001905092915050565b60006119c26119bb612466565b8484612665565b6001905092915050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614611a8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600860006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000611cbc600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611b9957600080fd5b505afa158015611bad573d6000803e3d6000fd5b505050506040513d6020811015611bc357600080fd5b8101908080519060200190929190505050600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611c7357600080fd5b505afa158015611c87573d6000803e3d6000fd5b505050506040513d6020811015611c9d57600080fd5b8101908080519060200190929190505050612cad90919063ffffffff16565b905090565b6000611ccb611ad3565b90506000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611d6e57600080fd5b505afa158015611d82573d6000803e3d6000fd5b505050506040513d6020811015611d9857600080fd5b81019080805190602001909291905050509050600a60149054906101000a900460ff1615611e3b57600b548382011115611e3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600c8152602001807f436170206578636565646564000000000000000000000000000000000000000081525060200191505060405180910390fd5b5b611e8a333085600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1661300b909392919063ffffffff16565b6000600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015611f2b57600080fd5b505afa158015611f3f573d6000803e3d6000fd5b505050506040513d6020811015611f5557600080fd5b81019080805190602001909291905050509050611f7b8282612c6390919063ffffffff16565b935060008090506000611f8c610b37565b1415611f9a57849050611fc9565b611fc684611fb8611fa9610b37565b886129db90919063ffffffff16565b612a6190919063ffffffff16565b90505b611fd33382613111565b5050505050565b600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146120c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6001600a60146101000a81548160ff02191690831515021790555080600b8190555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146121ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b80600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600860009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146122b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252600b8152602001807f21676f7665726e616e636500000000000000000000000000000000000000000081525060200191505060405180910390fd5b6000600a60146101000a81548160ff021916908315150217905550565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b612438600560029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156123f857600080fd5b505afa15801561240c573d6000803e3d6000fd5b505050506040513d602081101561242257600080fd5b8101908080519060200190929190505050611cc1565b565b600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156124f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806137456024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561257a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061366e6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156126eb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806137206025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612771576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806136296023913960400191505060405180910390fd5b6127dc81604051806060016040528060268152602001613690602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061286f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612cad90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008383111582906129c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561298d578082015181840152602081019050612972565b50505050905090810190601f1680156129ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000808314156129ee5760009050612a5b565b60008284029050828482816129ff57fe5b0414612a56576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806136b66021913960400191505060405180910390fd5b809150505b92915050565b6000612aa383836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506132cc565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612b31576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806136ff6021913960400191505060405180910390fd5b612b9c8160405180606001604052806022815260200161364c602291396000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461291b9092919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612bf381600254612c6390919063ffffffff16565b600281905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000612ca583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061291b565b905092915050565b600080828401905083811015612d2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b612e01838473ffffffffffffffffffffffffffffffffffffffff1663a9059cbb905060e01b8484604051602401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613392565b505050565b600560019054906101000a900460ff16612e88576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600560016101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600560019054906101000a900460ff1615612f8b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600560016101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25833604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b61310b848573ffffffffffffffffffffffffffffffffffffffff166323b872dd905060e01b858585604051602401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050613392565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156131b4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6131c981600254612cad90919063ffffffff16565b600281905550613220816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612cad90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008083118290613378576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561333d578082015181840152602081019050613322565b50505050905090810190601f16801561336a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161338457fe5b049050809150509392505050565b6133b18273ffffffffffffffffffffffffffffffffffffffff166135dd565b613423576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e74726163740081525060200191505060405180910390fd5b600060608373ffffffffffffffffffffffffffffffffffffffff16836040518082805190602001908083835b60208310613472578051825260208201915060208101905060208303925061344f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146134d4576040519150601f19603f3d011682016040523d82523d6000602084013e6134d9565b606091505b509150915081613551576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481525060200191505060405180910390fd5b6000815111156135d75780806020019051602081101561357057600080fd5b81019080805190602001909291905050506135d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613769602a913960400191505060405180910390fd5b5b50505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561361f57506000801b8214155b9250505091905056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a7231582046f44304871543c3e33b108fd808a45b74016ccc36912176e87f33faaabf9f4f64736f6c63430005110032"
        }
      }
    }
  
  export default data;