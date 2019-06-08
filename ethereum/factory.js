import web3 from "./web3";
import CampaignFactory from '../build/contracts/CampaignFactory.json';

export default new web3.eth.Contract(
  CampaignFactory.abi,
  '0xAE6Dfd54f8719891CB112dC85F9B00C81929760d'
);