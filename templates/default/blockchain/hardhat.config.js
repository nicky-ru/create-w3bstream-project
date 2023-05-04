/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

require("./tasks/deploy");

module.exports = {
  solidity: "0.8.17",
  networks: {
    testnet: {
      url: "https://babel-api.testnet.iotex.io",
      accounts: [process.env.IOTEX_PRIVATE_KEY],
    },
    mainnet: {
      url: "https://babel-api.mainnet.iotex.io",
      accounts: [process.env.IOTEX_PRIVATE_KEY],
    },
  },
};
