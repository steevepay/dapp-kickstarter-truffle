pragma solidity ^0.5.8;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint minimum) public {
        deployedCampaigns.push(address(new Campaign(minimum, msg.sender)));
    }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }
}

contract Campaign {

    struct Request {
        string description;
        uint value;
        address payable recipient;
        bool complete;
        mapping(address => bool) approvals;
        uint approvalCount;
    }

    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager, "Method restricted to owner.");
        _;
    }

    constructor(uint minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value >= minimumContribution, "Method restricted to owner.");
        approversCount++;
        approvers[msg.sender] = true;
    }

    function createRequest(string memory description, uint value, address payable recipient)
        public restricted
    {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender], "You're not an approver!");
        require(!request.approvals[msg.sender], "You have already approved!");
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount / 2), "Not enough votes to finalize!");
        require(!request.complete, "Request already finalized!");
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getRequestsDescription(uint index) public view returns (string memory) {
      return requests[index].description;
    }

    function getSummary() public view returns (uint, uint, uint, uint, address) {
      return (
        minimumContribution,
        address(this).balance,
        requests.length,
        approversCount,
        manager
      );
    }

    function getRequestsCount() public view returns (uint) {
      return requests.length;
    }
}