import React from "react";
import { Button, Form, Input, Label, Checkbox, Icon } from "semantic-ui-react";
// Checkbox, Label, Icon

export default class Browse extends React.Component {
  constructor() {
    super();
    this.state = {
      allUsers: [],
      currentSkill: "",
      skillsToSearch: [],
      majorToSearch: "",
      searchResult: [],
      numberOfSearches: 0,
      loading: false,
      errorMessage: ""
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
        //array of experiences
        user["experience"] = [];
        for (let i = 0; i < user[2]; i++) {
          let experience = await this.props.drizzle.contracts.OpenHire.methods
            .getExperience(userAddress, i)
            .call();
          user["experience"].push(experience);
        }
        //attach all of userSkills to user object
        user[3] = userSkills;
        //attach userAddress to user object
        user["userAddress"] = userAddress;
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

    const { allUsers, skillsToSearch, majorToSearch } = this.state;

    let results = skillsToSearch.length ? [] : [...allUsers];
    //find users that match skills to search
    if (skillsToSearch.length) {
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
    }

    //find users that match college major to search
    if (majorToSearch) {
      const major = majorToSearch.toLowerCase();
      for (let i = 0; i < results.length; i++) {
        const numOfUserExperiences = results[i][2];
        let userMatchesMajor = false;
        for (let j = 0; j < numOfUserExperiences; j++) {
          if (results[i]["experience"][j][1].toLowerCase().includes(major)) {
            userMatchesMajor = true;
            break;
          }
        }
        //if user does not match the major to search, remove it from results array
        if (!userMatchesMajor) {
          results.splice(i, 1);
        }
      }
    }
    const numberOfSearches = this.state.numberOfSearches + 1;
    this.setState({
      numberOfSearches: numberOfSearches,
      searchResult: results,
      showAll: false,
      majorToSearch: ""
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

  removeSkillToSearch = index => {
    let skillsToSearch = this.state.skillsToSearch.filter(
      (skill, idx) => idx !== index
    );
    this.setState({
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
      numberOfSearches,
      showAll
    } = this.state;

    return (
      <div className="browse">
        <div className="browseFilter">
          <h1> Filters: </h1>
          <div className="allLabels">
            <div className="label">
              <Button className="label" onClick={() => this.toggle("showAll")}>
                Show All
              </Button>
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
          <br />
          <Form className="browseForm">
            <Input
              key="majorToSearch"
              name="majorToSearch"
              value={this.state.majorToSearch}
              placeholder="Search for College Major"
              onChange={this.handleOnChange}
            />
            <br />
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
                return (
                  <Label key={index}>
                    <Icon
                      name="delete"
                      link
                      onClick={() => this.removeSkillToSearch(index)}
                    />
                    {"  "}
                    {skill}
                  </Label>
                );
              })}
            </ul>
            <Button
              onClick={this.handleOnSubmit}
              type="submit"
              disabled={this.state.loading}
              loading={this.state.loading}
            >
              Search
            </Button>
          </Form>
        </div>
        <div className="browseResults">
          {numberOfSearches === 0 || showAll
            ? allUsers.map((user, index) => {
                return (
                  <div
                    className="results"
                    key={index}
                    onClick={() =>
                      this.props.props.history.push(
                        `/user/${user["userAddress"]}`
                      )
                    }
                  >
                    <div> {user["userAddress"]}</div>
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
                      this.props.props.history.push(
                        `/user/${user["userAddress"]}`
                      )
                    }
                  >
                    <div> {user["userAddress"]}</div>
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
