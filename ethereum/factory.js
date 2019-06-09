import web3 from "./web3";
import CampaignFactory from '../build/contracts/CampaignFactory.json';

export default new web3.eth.Contract(
  CampaignFactory.abi,
  process.env.FACTORY_CONTRACT_ADDRESS
);