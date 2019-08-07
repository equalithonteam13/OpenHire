import React, { Component } from 'react';
import { Loader, Dimmer } from 'semantic-ui-react'

export default class OrgProfileComponent extends Component {
  constructor() {
    super();
    this.state = {
      orgName: null,
      orgEmail: null,
      orgVerified: null,
      loading: true,
    };
  }

  async componentDidMount() {
    // takes a org address as a prop/match.params from either searchbar or clicking on an org
    await this.fetchOrganizationStruct(this.props.match.params.address);
  }

  fetchOrganizationStruct = async OrgAddress => {
    if (this.props.drizzle.web3.utils.checkAddressChecksum(OrgAddress)) {
      const orgStruct = await this.props.drizzle.contracts.OpenHire.methods
        .getOrganization(OrgAddress)
        .call();
      this.setState({
        orgName: orgStruct[0],
        orgEmail: orgStruct[1],
        orgVerified: orgStruct[2],
        loading: false
      });
    } else {
      this.setState({
        loading: false
      })
    }
    
  };

  render() {
    if (this.state.loading) {
      return (
        <Dimmer active>
          <Loader >Loading...</Loader>
        </Dimmer>
      )
    }    
    if (this.state.orgName) {
      return (
        <div>
          <hr />
          <h1>Organization Profile View</h1>
          <h5>Name: {this.state.orgName}</h5>
          <h5>Email Address: {this.state.orgEmail}</h5>
        </div>
      );
    }
    return (
      <div>
        <h1>{this.props.match.params.address} address is not found!</h1>
      </div>
    );
  }
}
