import React, { Component } from 'react';
import Skills from './Skills';
// import { Button, Form, Input, Icon, Menu, Label } from 'semantic-ui-react';

export default class SingleUserView extends Component {
  constructor() {
    super();
    this.state = {
      userAddress: '',
      name: '',
      email: '',
      experience: [],
      ownPage: false,
      skillsListLength: 0,

      skills: [],
    };
  }

  async componentDidMount() {
    const { drizzle, pageAddress } = this.props;
    const userAddress = (await drizzle.web3.eth.getAccounts())[0];
    this.setState({ userAddress: userAddress });
    let ownPage = false;
    if (userAddress === pageAddress) {
      ownPage = true;
    }

    this.fetchUserData(userAddress, ownPage);
  }

  async fetchUserData(address, ownPage) {
    const userData = await this.props.drizzle.contracts.OpenHire.methods
      .getUserData(address)
      .call();
    this.setState({
      name: userData[0],
      email: userData[1],
      experience: userData[2],
      ownPage: ownPage,
    });
  }

  render() {
    const {
      name,
      email,
      ownPage,
      experience,
      userAddress,
      skills,
    } = this.state;

    const { drizzle, drizzleState, pageAddress } = this.props;

    // console.log(this.state);
    return (
      <div>
        <h1>Single User View</h1>
        <div>Address:{userAddress}</div>
        <div>Name:{name}</div>
        <div>Email:{email}</div>
        <div>Owned:{`${ownPage}`}</div>

        <Skills
          skills={skills}
          drizzle={drizzle}
          drizzleState={drizzleState}
          userAddress={userAddress}
          pageAddress={pageAddress}
        />

        {experience.length ? (
          experience.map((element, index) => {
            return <div key={index}>Experience</div>;
          })
        ) : (
          <div>No experience</div>
        )}
      </div>
    );
  }
}
