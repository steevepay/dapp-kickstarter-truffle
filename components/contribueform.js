import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign'
import web3 from '../ethereum/web3'
import { Router } from '../routes';


export default class ContributeForm extends Component {
  state = {
    value: '',
    loading: false,
    errorMessage: ''
  }
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({loading: true, errorMessage: ''})
    const campaign = Campaign(this.props.address);
    let err = false;
    let accounts;

    try {
      accounts = await web3.eth.getAccounts();
    } catch (err) {
      // this.setState({ errorMessage: err.message });
      err = true;
    }
    console.log(accounts[0]);

    if (err === false) {
      try {   
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: web3.utils.toWei(this.state.value, 'ether')
        }).on('receipt', (receipt) => {
          console.log(receipt);
          Router.replace('/campaigns/' + this.props.address);
        })
      } catch(err) {
        console.log(err);
        this.setState({errorMessage: err.message});
      }
      this.setState({loading: false, value: ''});
    }
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to contribute</label>
          <Input
            label="ether"
            labelPosition="right"
            value={this.state.value}
            onChange={event => this.setState({value: event.target.value})}
          />
          <Message error header="Ooops!" content={this.state.errorMessage} />
          <Button primary disabled={this.state.loading} loading={this.state.loading}>Contribute!</Button>
        </Form.Field>
      </Form>
    );
  }
};