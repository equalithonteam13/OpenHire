import React, { Component } from 'react';
import { toast, Flip } from 'react-toastify';
import { Button, Form, Input, Checkbox, Label, Icon } from 'semantic-ui-react';

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      currentAddress: '',
      name: '',
      email: '',
      organizationForm: false,
      loading: false,
      errorMessage: '',
    };
  }

  async componentDidMount() {
    const currentAddress = await this.props.drizzle.web3.eth.getAccounts();
    this.setState({
      currentAddress: currentAddress[0],
    });
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });

    toast.info('Processing sign up...', {
      position: 'top-right',
      autoClose: 10000,
      transition: Flip,
    });
    try {
      if (this.state.organizationForm) {
        await this.props.drizzle.contracts.OpenHire.methods
          .createOrganization(this.state.name, this.state.email)
          .send({ from: this.state.currentAddress });
      } else {
        await this.props.drizzle.contracts.OpenHire.methods
          .createUser(this.state.name, this.state.email)
          .send({ from: this.state.currentAddress });
      }
      this.setState({ errorMessage: '' });
    } catch (error) {
      toast.dismiss();
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false, name: '', email: '' });
  };

  toggleForm = option => {
    if (option !== undefined) {
      this.setState({ organizationForm: option });
    } else {
      this.setState(prevState => ({
        organizationForm: !prevState.organizationForm,
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Label
            as="a"
            image
            onClick={() => this.toggleForm(false)}
            color={this.state.organizationForm ? 'grey' : 'blue'}
          >
            <Icon name="user" />
            User
          </Label>
          <Checkbox
            toggle
            checked={this.state.organizationForm}
            onClick={() => this.toggleForm()}
          />
          <Label
            as="a"
            onClick={() => this.toggleForm(true)}
            color={this.state.organizationForm ? 'blue' : 'grey'}
          >
            <Icon name="building" />
            Organization
          </Label>
          <Input
            key="name"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleInputChange}
          />
          <Input
            key="email"
            name="email"
            value={this.state.email}
            placeholder="Email Address"
            type="email"
            onChange={this.handleInputChange}
          />
          <Button
            type="submit"
            disabled={this.state.loading}
            loading={this.state.loading}
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
