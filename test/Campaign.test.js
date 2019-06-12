const CampaignFactory = artifacts.require("CampaignFactory");
const Campaign = artifacts.require("Campaign");

contract("Campaigns", (accounts) => {
  let campagnAddress;

  beforeEach('setup contract for each test', async () => {
    // .new() = it will always create a new instance.
    // .deployed() = new singleton, It will look if there is already an instance of the contract deployed to the blockchain via deployer.deploy.
    // .at() = You can create a new abstraction to represent the contract at that address.
    const factory = await CampaignFactory.new();
    await factory.createCampaign(web3.utils.toWei("0.0001", "ether"), {
      from: accounts[0]
    });
    campagnAddress = (await factory.getDeployedCampaigns())[0];
  })

  it('deploys a factory and a campaign', async () => {
    const factory = await CampaignFactory.deployed();
    const campaign = await Campaign.at(campagnAddress);
    assert.ok(factory.address);
    assert.ok(campaign.address);
  });

  it('marks caller as the campaign manager', async () => {
    const campaign = await Campaign.at(campagnAddress);
    const manager = await campaign.manager();
    assert.equal(accounts[0], manager);
  });

  it('can donate money', async () => {
    const campaign = await Campaign.at(campagnAddress);
    await campaign.contribute({
      from: accounts[1],
      value: web3.utils.toWei("0.0002", "ether")
    })

    const isContributor = await campaign.approvers(accounts[1]);
    assert(isContributor);
  });

  it('required a minimum contribution', async () => {
    const campaign = await Campaign.at(campagnAddress);
    try {
      await campaign.contribute({
        from: accounts[1],
        value: web3.utils.toWei("0", "ether")
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });

  it('allows a manager to make a payment request', async () => {
    const campaign = await Campaign.at(campagnAddress);
    await campaign.createRequest('Buy Batteries', '200', accounts[1], {
      from: accounts[0]
    });
    const request = await campaign.requests(0);
    assert.equal('Buy Batteries', request.description);
  });



  it('processes requests', async () => {
    const campaign = await Campaign.at(campagnAddress);
    await campaign.contribute({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });
    await campaign.createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1], {
      from: accounts[0],
      gas: '1000000'
    });
    await campaign.approveRequest(0, {
      from: accounts[0],
      gas: '1000000'
    });
    await campaign.finalizeRequest(0, {
      from: accounts[0],
      gas: '1000000'
    });
    let balance = await web3.eth.getBalance(accounts[1]);
    balance = parseFloat(web3.utils.fromWei(balance, "ether"));
    assert(balance > 104);
  });
});