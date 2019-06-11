import React, { Component } from "react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import { Card, Grid, Button } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import ContributeForm from "../../components/contribueform";
import { Link } from "../../routes";

class CampaignShow extends Component {
  static async getInitialProps({ query }) {
    const campaign = Campaign(query.address);
    const summary = await campaign.methods.getSummary().call();
    return {
      address: query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  // componentDidMount() {
  //   console.log(this.props)
  // }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      requestsCount,
      approversCount
    } = this.props;
    // console.log(balance);
    const items = [
      {
        header: manager,
        meta: "Address of manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: {
          overflowWrap: "break-word"
        }
      },
      {
        header: minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver."
      },
      {
        header: requestsCount,
        meta: "Number of Requests",
        description:
          "A Request tries to withdraw money from the contract. Requests must be approved by approvers."
      },
      {
        header: approversCount,
        meta: "Number of approvers",
        description:
          "Number of people who have already donated to this campaign."
      },
      {
        header: web3.utils.fromWei(balance.toString(), "ether") + " ETH",
        meta: "Campaign Balance",
        description:
          "The balance is how much money this campaign has left to spend."
      }
    ];
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3> Campaign Show </h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}> {this.renderCards()} </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary> View Requests </Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
