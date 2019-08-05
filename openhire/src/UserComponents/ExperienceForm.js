import React, { Component } from 'react';
import { toast, Flip } from 'react-toastify';

import { Button, Form, Icon } from 'semantic-ui-react';

import OrganizationSearchBar from '../OrganizationSearchBar';

const defaultForm = {
  address: '',
  organization: '',
  expertise: '',
  duration: 0,
  displayExperienceForm: false,
};

export default class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...defaultForm,
      ownPage: false,
      userAddress: '',
      loading: false,
    };
  }

  componentDidMount = async () => {
    this.updatePage();
  };

  componentDidUpdate = prevProps => {
    if (this.props.pageAddress !== prevProps.pageAddress) {
      this.setState(
        { pageAddress: this.props.pageAddress, ...defaultForm },
        () => {
          this.updatePage();
        }
      );
    }
  };

  updatePage = async () => {
    const userAddress = (await this.props.drizzle.web3.eth.getAccounts())[0];
    let ownPage = false;

    if (userAddress === this.props.pageAddress) {
      ownPage = true;
    }

    this.setState({ userAddress, ownPage });
  };

  handleResultSelect = (e, { result }) => {
    this.setState({ organization: result.title, address: result.description });
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  addExperience = async event => {
    const { address, organization, expertise, duration } = this.state;
    event.preventDefault();
    this.setState({ loading: true });

    toast.info('Processing sign up...', {
      position: 'top-right',
      autoClose: 10000,
      transition: Flip,
    });
    try {
      await this.props.drizzle.contracts.OpenHire.methods
        .addExperience(address, organization, expertise, duration)
        .send({ from: this.state.userAddress });

      this.setState({ errorMessage: '' });
    } catch (error) {
      toast.dismiss();
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false, ...defaultForm });
  };

  render() {
    const { displayExperienceForm, ownPage } = this.state;
    const { drizzle, drizzleState } = this.props;

    return (
      <div>
        <h2>
          Experience{' '}
          {ownPage ? (
            <Icon
              link
              name="plus"
              onClick={() =>
                this.setState({ displayExperienceForm: !displayExperienceForm })
              }
            />
          ) : (
            ''
          )}
        </h2>

        {displayExperienceForm ? (
          <div>
            <OrganizationSearchBar
              drizzle={drizzle}
              drizzleState={drizzleState}
              handleResultSelect={this.handleResultSelect}
            />
            <Form onSubmit={this.addExperience}>
              <Form.Input
                required
                label="Organization Address"
                key="address"
                name="address"
                value={this.state.address}
                placeholder="Address"
                onChange={this.handleInputChange}
                width={6}
              />
              <Form.Input
                required
                label="Organization Name"
                key="organization"
                name="organization"
                value={this.state.organization}
                placeholder="Organization"
                onChange={this.handleInputChange}
                width={6}
              />

              <Form.Input
                required
                label="Expertise"
                key="expertise"
                name="expertise"
                value={this.state.expertise}
                placeholder="Expertise"
                onChange={this.handleInputChange}
                width={6}
              />
              <Form.Input
                label="Duration in Months"
                type="number"
                min="0"
                key="duration"
                name="duration"
                value={this.state.duration}
                onChange={this.handleInputChange}
                width={2}
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
        ) : (
          ''
        )}
      </div>
    );
  }
}
