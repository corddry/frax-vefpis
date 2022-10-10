const path = require('path');
const envPath = path.join(__dirname, '../../.env');
require('dotenv').config({ path: envPath });

require('hardhat-deploy');
require('hardhat-contract-sizer');
require('hardhat-gas-reporter');
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require("@nomiclabs/hardhat-vyper");
require('hardhat-spdx-license-identifier');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
		hardhat: {
			// chainId: 1337, // Ethereum (alternate / frontend testing)
			forking: {
				// url: `${process.env.ARBITRUM_NETWORK_ENDPOINT}`, // Arbitrum
				// url: `${process.env.AURORA_NETWORK_ENDPOINT}`, // Aurora
				// url: `${process.env.AVALANCHE_FORKING_NETWORK_ENDPOINT}`, // Avalanche
				// url: `${process.env.BOBA_NETWORK_ENDPOINT}`, // Boba
				// url: `${process.env.BSC_NETWORK_ENDPOINT}`, // BSC
				url: `${process.env.ETHEREUM_NETWORK_ENDPOINT}`, // Ethereum
				// url: `${process.env.EVMOS_NETWORK_ENDPOINT}`, // Evmos
				// url: `${process.env.FANTOM_FORKING_NETWORK_ENDPOINT}`, // Fantom
				// url: `${process.env.FUSE_NETWORK_ENDPOINT}`, // Fuse
				// url: `${process.env.HARMONY_NETWORK_ENDPOINT}`, // Harmony
				// url: `${process.env.MOONBEAM_NETWORK_ENDPOINT}`, // Moonbeam
				// url: `${process.env.MOONRIVER_NETWORK_ENDPOINT}`, // Moonriver
				// url: `${process.env.OPTIMISM_NETWORK_ENDPOINT}`, // Optimism
				// url: `${process.env.POLYGON_NETWORK_ENDPOINT}`, // Polygon
				// url: `${process.env.ZKSYNC_NETWORK_ENDPOINT}`, // zkSync

				// TESTING (npx hardhat node --hostname 0.0.0.0)
				// Also see src/hardhat/justin-scripts/instructions.txt
				// url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`, // Ethereum (alternate)
				// blockNumber: 14806990 // Ethereum (alternate)
				
			},
			accounts: {
				mnemonic: process.env.ROPSTEN_HARDHAT_PHRASE
			},
		},
		
		ethereum: {
			url:`${process.env.ETHEREUM_NETWORK_ENDPOINT}`,
			accounts: {
				mnemonic: process.env.MNEMONIC_PHRASE,
			},
			chainId: 1,
			gas: "auto",
			gasPrice: 20000000000, // 20 Gwei
			gasMultiplier: 1.2,
		},
		
    },
	solidity: {
		compilers: [
			{
				version: "0.5.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.6.11",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.6.12",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.7.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.4",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.6",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.10",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.13",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.15",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.16",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			},
			{
				version: "0.8.17",
				settings: {
					optimizer: {
						enabled: true,
						runs: 100000
					}
				  }
			}
		],
	},
    paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    },
    mocha: {
      timeout: 50000000
	},
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY, // ETH Mainnet
	},
	gasReporter: {
		currency: 'USD',
		gasPrice: 80,
		enabled: true,
		maxMethodDiff: 10,
	},
	contractSizer: {
		alphaSort: true,
		runOnCompile: true,
		disambiguatePaths: false,
	},
    vyper: {
		version: "0.3.7"
    }
};

