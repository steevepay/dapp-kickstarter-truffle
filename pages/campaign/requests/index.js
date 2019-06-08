import React, { Component } from "react";
import Layout from "../../../components/layout";
import RequestRow from "../../../components/requestrow";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Button, Table } from "semantic-ui-react";
import { Link } from '../../../routes';

export default class RequestIndex extends Component {
  static async getInitialProps({query}) {
    const { address } = query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();
    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index) => {
      return campaign.methods.requests(index).call();
    }));
    return { address, requests, requestCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return <RequestRow 
        key={index}
        id={index} 
        request={request}
        address={this.props.address}
        approversCount={this.props.approversCount}
      />
    })
  }

  render() {
    return (
      <Layout>
        <h3 style={{marginBottom: -30}}>Pending Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{marginBottom: 10}}>Add request</Button>
          </a>
        </Link>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Recipient</Table.HeaderCell>
              <Table.HeaderCell>Approval</Table.HeaderCell>
              <Table.HeaderCell>Approve</Table.HeaderCell>
              <Table.HeaderCell>Finalize</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.renderRows()}
          </Table.Body>
        </Table>
        <div>Found { this.props.requestCount } requests.</div>
      </Layout>
    );
  }
}