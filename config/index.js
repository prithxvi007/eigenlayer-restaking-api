// config/index.js
const Web3 = require('web3');

const web3 = new Web3(process.env.INFURA_URL);

// MongoDB config is handled in server.js to keep it centralized.

module.exports = {
  web3
};