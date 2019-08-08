import React, { Component } from "react";
import { Card, Loader, Dimmer } from "semantic-ui-react";

export default class OrgProfileComponent extends Component {
  constructor() {
    super();
    this.state = {
      orgName: null,
      orgEmail: null,
      orgVerified: null,
      loading: true
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
      });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      );
    }
    if (this.state.orgName) {
      return (
        <div>
          <Card
            style={{
              width: "500px",
              backgroundColor: "#e0e1e2"
            }}
          >
            <Card.Content header={`Name: ${this.state.orgName}`} />
            <Card.Content description={`Email: ${this.state.orgEmail}`} />
            <Card.Content extra>
              <p style={{ color: "black" }}>
                Ethereum Address: {this.props.match.params.address}
              </p>
            </Card.Content>
          </Card>
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
