const Factory = artifacts.require('CampaignFactory');

module.exports = (deployer) => {
  deployer.deploy(Factory);
}