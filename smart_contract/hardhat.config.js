require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

module.exports = {
  defaultNetwork: "sepolia",
  solidity: '0.8.0',
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [`0x${process.env.METAMASK_PRIVATE_KEY}`]
    }
  }
}