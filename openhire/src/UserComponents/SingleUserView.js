import React, { Component } from 'react';
import Skills from './Skills';
import ExperienceForm from './ExperienceForm';

import { Header, Segment } from 'semantic-ui-react';

export default class SingleUserView extends Component {
  constructor() {
    super();
    this.state = {
      userAddress: '',
      name: '',
      email: '',
      experienceAddress: [],
      experienceData: [],
      ownPage: false,
      skillsListLength: 0,
      skills: [],
    };
  }

  async componentDidMount() {
    const pageAddress = this.props.props.match.params.address;
    const { drizzle } = this.props;
    const userAddress = (await drizzle.web3.eth.getAccounts())[0];
    this.setState({ userAddress: userAddress });
    let ownPage = false;
    if (userAddress === pageAddress) {
      ownPage = true;
    }

    this.fetchUserData(userAddress, ownPage);
    this.fetchExperienceData();
  }

  async fetchUserData(address, ownPage) {
    const userData = await this.props.drizzle.contracts.OpenHire.methods
      .getUserData(address)
      .call();
    this.props.drizzle.contracts.OpenHire.methods.getUserData.cacheCall(
      address
    );

    console.log(userData[2], 'FETCH USER DATA');
    this.setState({
      name: userData[0],
      email: userData[1],
      experienceAddress: userData[2],
      ownPage: ownPage,
    });
  }

  updateExperience = () => {
    const accountKey = Object.keys(
      this.props.drizzleState.contracts.OpenHire.getUserData
    )[0];
    let updatedUserData = this.props.drizzleState.contracts.OpenHire
      .getUserData[accountKey];
    console.log(updatedUserData);
    if (updatedUserData !== undefined) {
      const updatedAddressArray = updatedUserData.value[2];
      if (
        updatedAddressArray.length !== this.state.experienceAddress.length ||
        updatedAddressArray.length !== this.state.experienceData.length
      ) {
        console.log('did this run?');
        this.fetchExperienceData(updatedAddressArray);
      }
    }
  };

  fetchExperienceData = async updatedUserData => {
    const { experienceAddress, userAddress } = this.state;
    const experienceDataArray = [];
    for (let i = 0; i < experienceAddress.length; i++) {
      let experienceData = await this.props.drizzle.contracts.OpenHire.methods
        .getExperience(userAddress, experienceAddress[i])
        .call();
      experienceDataArray.push(experienceData);
    }
    console.log(experienceDataArray, 'FETCH ARRAY');
    this.setState({
      experienceAddress: updatedUserData,
      experienceData: experienceDataArray,
    });
  };

  render() {
    const {
      name,
      email,
      ownPage,
      experienceData,
      userAddress,
      skills,
    } = this.state;

    const { drizzle, drizzleState } = this.props;
    const pageAddress = this.props.props.match.params.address;
    console.log(this.state);
    console.log(this.props);
    this.updateExperience();
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
          pageAddress={pageAddress}
        />

        <ExperienceForm
          drizzle={drizzle}
          drizzleState={drizzleState}
          pageAddress={pageAddress}
        />

        <Segment.Group>
          <Header>Experience</Header>

          {experienceData.length ? (
            experienceData.map((experience, index) => {
              return (
                <Segment.Group key={index} horizontal>
                  <Segment>
                    {experience[1]} from {experience[0]}
                  </Segment>
                  <Segment>For {experience[2]} Months</Segment>
                  <Segment>Verfied:{`${experience[3]}`}</Segment>
                </Segment.Group>
              );
            })
          ) : (
            <Segment>No experience</Segment>
          )}
        </Segment.Group>
      </div>
    );
  }
}
