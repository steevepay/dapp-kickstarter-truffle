import React, { Component } from "react";
import Layout from "../../components/layout";
import { Message, Form, Button, Input } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMessage: "",
    loading: false
  };

  getAccounts = async () => {
    return await web3.eth.getAccounts();
  };

  onSubmit = async e => {
    e.preventDefault();
    let accounts;
    let err = false;

    try {
      accounts = await this.getAccounts();
    } catch (err) {
      this.setState({ errorMessage: err.message });
      err = true;
    }

    if (err === false) {
      this.setState({ loading: true, errorMessage: "" });
      try {
        await factory.methods
          .createCampaign(this.state.minimumContribution)
          .send({
            from: accounts[0]
          })
          .on("receipt", receipt => {
            // console.log(receipt);
            Router.pushRoute("/");
          });
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }

      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Layout>
        <div>
          <h3>New Campaign</h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>Minimum Contribution</label>
              <Input
                label="wei"
                labelPosition="right"
                value={this.state.minumumContribution}
                onChange={event =>
                  this.setState({ minimumContribution: event.target.value })
                }
              />
            </Form.Field>
            <Message error header="Oops!" content={this.state.errorMessage} />
            <Button
              primary
              disabled={this.state.loading}
              loading={this.state.loading}
            >
              Create!
            </Button>
          </Form>
        </div>
      </Layout>
    );
  }
}

export default CampaignNew;
