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
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/aa7a461490244b65a54e2f67b959fa8a');
  web3 = new Web3(provider);
}

export default web3;