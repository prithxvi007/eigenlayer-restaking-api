// utils/web3Utils.js
const { web3 } = require('../config');

// Example utility
const getContractInstance = (abi, address) => {
  return new web3.eth.Contract(abi, address);
};

module.exports = {
  getContractInstance
};