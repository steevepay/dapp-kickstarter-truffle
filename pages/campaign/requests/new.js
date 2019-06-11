import React, { Component } from "react";
import Layout from "../../../components/layout";
import Campaign from "../../../ethereum/campaign";
import web3 from "../../../ethereum/web3";
import { Button, Form, Input, Message } from "semantic-ui-react";
import { Link, Router } from "../../../routes";

export default class RequestIndex extends Component {
  state = {
    value: "",
    description: "",
    recipient: "",
    loading: false,
    errorMessage: ""
  };

  static async getInitialProps({ query }) {
    const { address } = query;
    return {
      address
    };
  }

  componentDidMount() {
    // console.log(this.props)
  }

  onSubmit = async event => {
    let accounts;
    this.setState({
      loading: true,
      errorMessage: ""
    });
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    try {
      accounts = await web3.eth.getAccounts();
    } catch (err) {
      console.log(err);
    }
    try {
      await campaign.methods
        .createRequest(
          this.state.description,
          web3.utils.toWei(this.state.value.toString(), "ether"),
          this.state.recipient
        )
        .send({
          from: accounts[0]
        })
        .on("receipt", receipt => {
          console.log(receipt);
          Router.pushRoute("/campaigns/" + this.props.address + "/requests");
        });
    } catch (err) {
      this.setState({
        errorMessage: err.message
      });
    }
    this.setState({
      loading: false
    });
  };

  render() {
    return (
      <Layout>
        <Link route={"/campaigns/" + this.props.address + "/requests"}>
          <a>back</a>
        </Link>
        <h3> Create a Request </h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label> Description </label>
            <Input
              value={this.state.description}
              onChange={event =>
                this.setState({
                  description: event.target.value
                })
              }
            />
          </Form.Field>
          <Form.Field>
            <label> Value(ETH) </label>
            <Input
              value={this.state.value}
              onChange={event =>
                this.setState({
                  value: event.target.value
                })
              }
            />
          </Form.Field>
          <Form.Field>
            <label> Recipient Address </label>
            <Input
              value={this.state.recipient}
              onChange={event =>
                this.setState({
                  recipient: event.target.value
                })
              }
            />
          </Form.Field>
          <Message error header="Ooops!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>
            Submit
          </Button>
        </Form>
      </Layout>
    );
  }
}
