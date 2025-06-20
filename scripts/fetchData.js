// scripts/fetchData.js
const { web3 } = require('../config');
const contractABI = []; // Add your contract ABI here
const contractAddress = process.env.DELEGATION_MANAGER;
const contract = new web3.eth.Contract(contractABI, contractAddress);

const fetchData = async () => {
  try {
    const events = await contract.getPastEvents('Delegated', {
      fromBlock: process.env.START_BLOCK,
      toBlock: 'latest',
    });
    console.log(events);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

fetchData();