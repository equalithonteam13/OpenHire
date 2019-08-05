import React, { Component } from 'react';
import Skills from './Skills';
import ExperienceForm from './ExperienceForm';

import { Header, Segment } from 'semantic-ui-react';

export default class SingleUserView extends Component {
  constructor() {
    super();
    this.state = {
      userAddress: '',
      pageAddress: '',
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
    this.updatePage();
  }

  componentDidUpdate = prevProps => {
    if (
      this.props.props.match.params.address !==
      prevProps.props.match.params.address
    ) {
      this.setState(
        { pageAddress: this.props.props.match.params.address },
        () => {
          this.updatePage();
        }
      );
    }
  };

  updatePage = async () => {
    const pageAddress = this.props.props.match.params.address;
    const { drizzle } = this.props;
    const userAddress = (await drizzle.web3.eth.getAccounts())[0];
    this.setState({ userAddress, pageAddress });
    let ownPage = false;
    if (userAddress === pageAddress) {
      ownPage = true;
    }

    this.fetchUserData(pageAddress, ownPage);
    this.fetchExperienceData();
  };

  async fetchUserData(address, ownPage) {
    const userData = await this.props.drizzle.contracts.OpenHire.methods
      .getUserData(address)
      .call();
    this.props.drizzle.contracts.OpenHire.methods.getUserData.cacheCall(
      address
    );

    this.setState({
      name: userData[0],
      email: userData[1],
      experienceAddress: userData[2],
      ownPage: ownPage,
    });
  }

  updateExperience = () => {
    const { drizzleState } = this.props;
    const keys = Object.keys(drizzleState.contracts.OpenHire.getUserData);
    let identifier;

    if (keys.length) {
      for (let i = 0; i < keys.length; i++) {
        if (
          drizzleState.contracts.OpenHire.getUserData[keys[i]].args[0] ===
          this.state.pageAddress
        ) {
          identifier = keys[i];
          break;
        }
      }
    }

    let updatedUserData =
      drizzleState.contracts.OpenHire.getUserData[identifier];

    if (updatedUserData !== undefined) {
      const updatedAddressArray = updatedUserData.value[2];
      if (
        updatedAddressArray.length !== this.state.experienceAddress.length ||
        updatedAddressArray.length !== this.state.experienceData.length
      ) {
        this.fetchExperienceData(updatedAddressArray);
      }
    }
  };

  fetchExperienceData = async updatedUserData => {
    const { experienceAddress, pageAddress } = this.state;
    const experienceDataArray = [];
    for (let i = 0; i < experienceAddress.length; i++) {
      let experienceData = await this.props.drizzle.contracts.OpenHire.methods
        .getExperience(pageAddress, experienceAddress[i])
        .call();
      experienceDataArray.push(experienceData);
    }
    this.setState({
      experienceAddress: updatedUserData || [],
      experienceData: experienceDataArray,
    });
  };

  // 0xbed2567a6888cc3ad176baf0891b64337729ad97;
  // 0xdcb79fb59ecec21184c5e3574dff866a968de866;

  render() {
    const { name, email, experienceData, skills } = this.state;

    const { drizzle, drizzleState } = this.props;
    const pageAddress = this.props.props.match.params.address;
    this.updateExperience();

    return (
      <div>
        <h1>Single User View</h1>
        <div>Address:{pageAddress}</div>
        <div>Name:{name}</div>
        <div>Email:{email}</div>

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
