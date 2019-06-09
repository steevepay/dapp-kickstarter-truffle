import Web3 from "web3";

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
 // in the browser and the user has injected Metamask
  const getProvider = async () => {
    await window.web3.currentProvider.enable(); // request authentication
  };
  getProvider();
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(process.env.INFURA_URL);
  web3 = new Web3(provider);
}

export default web3;