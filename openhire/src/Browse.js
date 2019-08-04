import React from "react";
import { Button, Form, Input, Checkbox, Label, Icon } from "semantic-ui-react";

export default class Browse extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      currentSkill: "",
      skillsToSearch: [],
      searchResult: [],
      numberOfSearches: 0,
      loading: false,
      errorMessage: ""
    };
  }

  async componentDidMount() {
    const { drizzle } = this.props;
    let loop = true;
    let index = 0;
    let users = [];
    //loop through ALL users in our app
    while (loop) {
      try {
        //get userAddress at the current index
        let userAddress = await drizzle.contracts.OpenHire.methods
          .allUserAddresses(index)
          .call();
        //fetch user at current address
        let user = await drizzle.contracts.OpenHire.methods
          .getUserData(userAddress)
          .call();
        //number of skills current user has
        const skillLength = await drizzle.contracts.OpenHire.methods
          .getSkillListLength(userAddress)
          .call();
        let userSkills = [];
        //get all the skills this user has
        for (let i = 0; i < skillLength; i++) {
          let skill = await drizzle.contracts.OpenHire.methods
            .getUserSkillData(userAddress, i)
            .call();
          //store only the name of the skill in userSkills array
          userSkills.push(skill[0]);
        }
        //attach all of userSkills to user object
        user[3] = userSkills;
        users.push(user);
        index++;
      } catch (error) {
        loop = false;
      }
    }

    this.setState({ allUsers: users });
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = async event => {
    event.preventDefault();

    const { allUsers, skillsToSearch } = this.state;

    let results = [];

    for (let i = 0; i < allUsers.length; i++) {
      const userSkills = allUsers[i][3];
      for (let j = 0; j < skillsToSearch.length; j++) {
        //if current user being checked does not have skill,
        if (!userSkills.includes(skillsToSearch[j])) {
          break;
        }
        //if current user contains all skills that is being searched, add user to results array
        if (j === skillsToSearch.length - 1) {
          results.push(allUsers[i]);
        }
      }
    }

    const numberOfSearches = this.state.numberOfSearches + 1;
    this.setState({
      numberOfSearches: numberOfSearches,
      searchResult: results,
      skillsToSearch: []
    });
  };

  addSkillToSearch = () => {
    let skillsToSearch = this.state.skillsToSearch;
    skillsToSearch.push(this.state.currentSkill);
    this.setState({
      currentSkill: "",
      skillsToSearch: skillsToSearch
    });
  };

  render() {
    const {
      skillsToSearch,
      searchResult,
      allUsers,
      numberOfSearches
    } = this.state;
    return (
      <div>
        <h1> BROWSE </h1>
        <Form onSubmit={this.handleOnSubmit}>
          <Input
            key="currentSkill"
            name="currentSkill"
            value={this.state.currentSkill}
            placeholder="Search"
            onChange={this.handleOnChange}
          />
          <Button type="button" onClick={this.addSkillToSearch}>
            Add Skill
          </Button>

          <ul>
            {skillsToSearch.map((skill, index) => {
              return <li key={index}>{skill}</li>;
            })}
          </ul>
          <Button
            type="submit"
            disabled={this.state.loading}
            loading={this.state.loading}
          >
            Search
          </Button>
        </Form>

        {numberOfSearches === 0
          ? allUsers.map((user, index) => {
              return (
                <div key={index}>
                  {" "}
                  Name: {user[0]} Email: {user[1]}{" "}
                </div>
              );
            })
          : searchResult.map((user, index) => {
              return (
                <div key={index}>
                  {" "}
                  Name: {user[0]} Email: {user[1]}{" "}
                </div>
              );
            })}
      </div>
    );
  }
}
