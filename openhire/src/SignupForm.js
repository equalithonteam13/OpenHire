import React, { Component } from 'react';
import { Button, Form, Input, Checkbox, Label, Icon } from 'semantic-ui-react';

export default class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Form</h1>
        <Form>
          <Label as="a" image>
            <Icon name="address book" />
            User
          </Label>
          <Checkbox toggle />
          <Label>
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
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}
