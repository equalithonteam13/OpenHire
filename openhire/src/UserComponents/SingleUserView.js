import React, { Component } from 'react';
import Skills from './Skills';
import ExperienceForm from './ExperienceForm';

import { Header, Segment, Icon, Label, Checkbox } from 'semantic-ui-react';
import Feedback from './Feedback';

export default class SingleUserView extends Component {
  constructor() {
    super();
    this.state = {
      userAddress: '',
      pageAddress: '',
      name: '',
      email: '',
      experienceData: [],
      experienceCount: 0,
      ownPage: false,
      skillsListLength: 0,
      skills: [],
      displayInformation: false,
    };
  }

  async componentDidMount() {
    this.updatePage();

    //Run to verify organization
    // const address = (await this.props.drizzle.web3.eth.getAccounts())[0];
    // await this.props.drizzle.contracts.OpenHire.methods
    //   .verifyOrganization(address)
    //   .send({ from: address });
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
  };

  async fetchUserData(address, ownPage) {
    const userData = await this.props.drizzle.contracts.OpenHire.methods
      .getUserData(address)
      .call();
    this.props.drizzle.contracts.OpenHire.methods.getUserData.cacheCall(
      address
    );

    this.setState(
      {
        name: userData[0],
        email: userData[1],
        experienceCount: userData[2],
        ownPage: ownPage,
      },
      () => this.fetchExperienceData()
    );
  }

  fetchExperienceData = async updatedCount => {
    const { experienceCount, pageAddress } = this.state;
    let experienceNumber = updatedCount || experienceCount;
    const experienceDataArray = [];
    for (let i = 0; i < experienceNumber; i++) {
      let experienceData = await this.props.drizzle.contracts.OpenHire.methods
        .getExperience(pageAddress, i)
        .call();
      experienceData.index = i;
      experienceDataArray.push(experienceData);
    }

    this.setState({
      experienceCount: updatedCount,
      experienceData: experienceDataArray,
    });
  };

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
      const updatedExperienceCount = updatedUserData.value[2];
      if (updatedExperienceCount !== this.state.experienceCount) {
        this.fetchExperienceData(updatedExperienceCount);
      }
    }
  };

  verifyExperience = async index => {
    const { pageAddress, userAddress } = this.state;

    await this.props.drizzle.contracts.OpenHire.methods
      .verifyExperience(pageAddress, index)
      .send({ from: userAddress });
  };

  generateExperience = experience => {
    if (experience[3]) {
      return (
        <div style={{ color: '#21ba45' }}>
          <Icon name="check circle outline" className="green" />
          Verified
        </div>
      );
    }
    if (experience[4] === this.state.userAddress) {
      return (
        <div>
          <Icon
            name="check circle"
            link
            onClick={() => this.verifyExperience(experience.index)}
          />
          Unverified
        </div>
      );
    }
    return (
      <div>
        <Icon name="check circle" />) Unverified
      </div>
    );
  };

  toggleInformation = option => {
    if (option !== undefined) {
      this.setState({ displayInformation: option });
    } else {
      this.setState(prevState => ({
        displayInformation: !prevState.displayInformation,
      }));
    }
  };

  render() {
    const {
      name,
      email,
      experienceData,
      skills,
      displayInformation,
    } = this.state;
    const { drizzle, drizzleState } = this.props;
    const pageAddress = this.props.props.match.params.address;
    this.updateExperience();
    return (
      <div className="ui items">
        <h1>Single User View</h1>
        <Label
          as="a"
          image
          onClick={() => this.toggleInformation(false)}
          color={displayInformation ? 'grey' : 'blue'}
        >
          Hide All
        </Label>
        <Checkbox
          toggle
          checked={displayInformation}
          onClick={() => this.toggleInformation()}
        />
        <Label
          as="a"
          onClick={() => this.toggleInformation(true)}
          color={displayInformation ? 'blue' : 'grey'}
        >
          Show All
        </Label>
        <div>
          <strong>Address:{pageAddress}</strong>
        </div>
        {displayInformation ? (
          <div>
            <div>
              <strong> Name:{name} </strong>
            </div>
            <div>
              <strong>Email:{email}</strong>
            </div>
          </div>
        ) : (
          ''
        )}

        <div>
          <ExperienceForm
            drizzle={drizzle}
            drizzleState={drizzleState}
            pageAddress={pageAddress}
          />

          <Segment.Group>
            <Header>Education</Header>
            {experienceData.length ? (
              experienceData
                .filter(experience => experience[5] === false)
                .map((experience, index) => {
                  return (
                    <Segment.Group
                      key={index}
                      horizontal
                      style={{
                        margin: '0 0 1em 6em',
                        borderBottom: '2px solid white',
                      }}
                    >
                      <Segment>
                        {experience[1]} from{' '}
                        {displayInformation ? (
                          experience[0]
                        ) : (
                          <Icon name="question" />
                        )}
                      </Segment>
                      <Segment>
                        Graduated in:{' '}
                        {displayInformation ? (
                          experience[2]
                        ) : (
                          <Icon name="question" />
                        )}
                      </Segment>
                      <Segment>{this.generateExperience(experience)}</Segment>
                    </Segment.Group>
                  );
                })
            ) : (
              <Segment>No Education</Segment>
            )}
          </Segment.Group>

          <Segment.Group>
            <Header>Work Experience</Header>
            {experienceData.length ? (
              experienceData
                .filter(experience => experience[5] === true)
                .map((experience, index) => {
                  return (
                    <Segment.Group key={index}>
                      <Segment
                        className="ui header"
                        style={{
                          border: '2px solid white',
                        }}
                      >
                        {displayInformation ? (
                          experience[0]
                        ) : (
                          <Icon name="question" />
                        )}
                      </Segment>
                      <Segment.Group
                        horizontal
                        style={{
                          marginLeft: '6em',
                          borderBottom: '2px solid white',
                        }}
                      >
                        <Segment>{experience[1]}</Segment>
                        <Segment>
                          {displayInformation ? (
                            experience[2] ===
                            new Date().getFullYear().toString() ? (
                              'Currently Employed'
                            ) : (
                              `Worked in: ${experience[2]}`
                            )
                          ) : (
                            <Icon name="question" />
                          )}
                        </Segment>
                        <Segment>{this.generateExperience(experience)}</Segment>
                      </Segment.Group>
                    </Segment.Group>
                  );
                })
            ) : (
              <Segment>No experience</Segment>
            )}
          </Segment.Group>
        </div>

        <div className="ui divider" />
        <div>
          <Skills
            skills={skills}
            drizzle={drizzle}
            drizzleState={drizzleState}
            pageAddress={pageAddress}
          />
        </div>

        <div className="ui divider" />
        <div>
          <Feedback
            skills={skills}
            drizzle={drizzle}
            drizzleState={drizzleState}
            pageAddress={pageAddress}
          />
        </div>
      </div>
    );
  }
}
