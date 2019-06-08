import React, { Component } from "react";
import { Table, Button } from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";
import web3 from '../ethereum/web3';
import { Router } from '../routes';

export default class RequestRow extends Component {
  onApprove = async () => {
    console.log(this.props.address);
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    
    try {
      await campaign.methods.approveRequest(this.props.id).send({
        from: accounts[0]
      }).on('receipt', (receipt) => {
        Router.replace('/campaigns/' + this.props.address + '/requests');
      });
    } catch(err) {
      console.log(err);
    }
  };

  finalyse = async () => {
    console.log(this.props.address);
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    
    try {
      await campaign.methods.finalizeRequest(this.props.id).send({
        from: accounts[0]
      }).on('receipt', (receipt) => {
        Router.replace('/campaigns/' + this.props.address + '/requests');
      });
    } catch(err) {
      console.log(err);
    }
  };
  
  render() {
    
    const readyToFinalize = this.props.request.approvalCount > this.props.approversCount / 2;
    return (
      <Table.Row disabled={!!this.props.request.complete} positive={readyToFinalize && !this.props.request.complete} color="green">
        <Table.Cell>
          {this.props.id}
        </Table.Cell>
        <Table.Cell>
          {this.props.request.description}
        </Table.Cell>
        <Table.Cell>
          {web3.utils.fromWei(this.props.request.value, 'ether') + 'ETH'}
        </Table.Cell>
        <Table.Cell>
          {this.props.request.recipient}
        </Table.Cell>
        <Table.Cell>
          {this.props.request.approvalCount+'/'+this.props.approversCount}
        </Table.Cell>
        <Table.Cell>
          { this.props.request.complete || readyToFinalize ? null : (
              <Button color="green" basic onClick={this.onApprove}>Approve</Button>
            )
          }
        </Table.Cell>
        <Table.Cell>
        { this.props.request.complete ? null : (
            <Button color="teal" basic onClick={this.finalyse}>Finalyse</Button>
          )
        }
        </Table.Cell>
      </Table.Row>
    );
  }
}