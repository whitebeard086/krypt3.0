// https://eth-ropsten.alchemyapi.io/v2/Cb8WrHXQNrTDAhxTaMlcmiU1M6LOhshc

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/Cb8WrHXQNrTDAhxTaMlcmiU1M6LOhshc",
      accounts: [ "6a861faa9f7b07bb25587e21bf2052bebb51da34dd3720b57adc4046ae08160e" ]
    }
  }
}