const Factory = artifacts.require('CampaignFactory');

module.exports = function(deployer) {
  deployer.deploy(Factory);
}