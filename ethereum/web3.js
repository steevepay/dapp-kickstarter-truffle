import Web3 from "web3";

let web3;
let provider;

const enableMetaMaskEthereum = async () => {
  try {
    // Request account access
    await window.ethereum.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}

const enableMetaMaskWeb3 = async () => {
  try {
    // Request account access
    await window.web3.currentProvider.enable();
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}

// Modern dapp browsers
if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  enableMetaMaskEthereum();
  provider = window.ethereum;
} else if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  enableMetaMaskWeb3();
  provider = window.web3.currentProvider;
} else {
  // we are on the server OR the user is not running metamask
  provider = new Web3.providers.HttpProvider(process.env.INFURA_URL);
}

web3 = new Web3(provider);

export default web3;