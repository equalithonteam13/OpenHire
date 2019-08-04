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
    while (loop) {
      try {
        let userAddress = await drizzle.contracts.OpenHire.methods
          .allUserAddresses(index)
          .call();
        let user = await drizzle.contracts.OpenHire.methods
          .getUserData(userAddress)
          .call();
        if (index % 2 === 0) {
          user[2] = ["javascript", "python"];
        }
        users.push(user);
        index++;
      } catch (error) {
        loop = false;
      }
    }

    this.setState({ allUsers: users });

    console.log("users ", users);
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
      const userSkills = allUsers[i][2];
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

    console.log("results ", results);
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
