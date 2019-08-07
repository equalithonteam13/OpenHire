import React from "react";
import { Button, Form, Input, Label, Checkbox } from "semantic-ui-react";
// Checkbox, Label, Icon

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
      errorMessage: "",
      displayName: false,
      displayEmail: false,
      showAll: false
    };
  }

  async componentDidMount() {
    console.log("props", this.props);
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
        //attach userAddress to user object
        user[4] = userAddress;
        console.log(user);
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
      skillsToSearch: [],
      showAll: false
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

  toggle = name => {
    this.setState({
      [name]: !this.state[name]
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
      <div className="browse">
        <div className="browseFilter">
          <h1> Filters: </h1>
          <div className="allLabels">
            <div className="label">
              <Label className="label">Show All</Label>
              <Checkbox
                checked={this.state.showAll}
                onClick={() => this.toggle("showAll")}
              />
            </div>
            <div className="label">
              <Label className="label">Name</Label>
              <Checkbox
                checked={this.state.displayName}
                onClick={() => this.toggle("displayName")}
              />
            </div>

            <div className="label">
              <Label>Email</Label>
              <Checkbox
                checked={this.state.displayEmail}
                onClick={() => this.toggle("displayEmail")}
              />
            </div>
          </div>
          <Form onSubmit={this.handleOnSubmit}>
            <Input
              key="currentSkill"
              name="currentSkill"
              value={this.state.currentSkill}
              placeholder="Add Skill to Search"
              onChange={this.handleOnChange}
            />
            <Button type="button" onClick={this.addSkillToSearch}>
              Add Skill
            </Button>

            <ul>
              {skillsToSearch.map((skill, index) => {
                return <Label key={index}>{skill}</Label>;
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
        </div>
        <div className="browseResults">
          {numberOfSearches === 0 || this.state.showAll
            ? allUsers.map((user, index) => {
                return (
                  <div
                    className="results"
                    key={index}
                    onClick={() =>
                      this.props.props.history.push(`/user/${user[4]}`)
                    }
                  >
                    <div> {user[4]}</div>
                    <div> {this.state.displayName ? user[0] : ""}</div>
                    <div> {this.state.displayEmail ? user[1] : ""} </div>
                  </div>
                );
              })
            : searchResult.map((user, index) => {
                return (
                  <div
                    className="results"
                    key={index}
                    onClick={() =>
                      this.props.props.history.push(`/user/${user[4]}`)
                    }
                  >
                    <div> {user[4]}</div>
                    <div> {this.state.displayName ? user[0] : ""}</div>
                    <div> {this.state.displayEmail ? user[1] : ""} </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}
