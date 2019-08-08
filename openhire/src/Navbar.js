import React, { Component } from "react";
import { Menu, Header } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = { activeItem: "Home", type: "", loggedIn: false };
  }

  async componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    let user = await drizzle.contracts.OpenHire.methods
      .getUserData(drizzleState.accounts[0])
      .call();
    //if address is not a user, check if it's an organization
    if (!user[0]) {
      user = await drizzle.contracts.OpenHire.methods
        .getOrganization(drizzleState.accounts[0])
        .call();
      if (user[0]) {
        this.setState({
          loggedIn: true,
          type: "org"
        });
      }
    } else {
      this.setState({
        loggedIn: true,
        type: "user"
      });
    }
  }

  handleItemClick = name => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem, type, loggedIn } = this.state;
    const { drizzle, drizzleState } = this.props;
    return (
      <Menu>
        <Header as="h1" position="center">
          OpenHire
        </Header>

        <Menu.Menu position="right">
          <Menu.Item
            name="Home"
            active={activeItem === "Home"}
            onClick={() => {
              this.props.history.push("/");
              return this.handleItemClick("Home");
            }}
          />
          <Menu.Item
            name="Browse"
            active={activeItem === "Browse"}
            onClick={() => {
              this.props.history.push("/browse");
              return this.handleItemClick("Browse");
            }}
          />
          {loggedIn ? (
            <Menu.Item
              name="Profile"
              active={activeItem === "Profile"}
              onClick={() => {
                if (type === "user") {
                  this.props.history.push("/");
                  this.props.history.push(`/user/${drizzleState.accounts[0]}`);
                } else if (type === "org") {
                  this.props.history.push("/");
                  this.props.history.push(
                    `/organization/${drizzleState.accounts[0]}`
                  );
                }
                return this.handleItemClick("Profile");
              }}
            />
          ) : (
            <Menu.Item
              name="Sign Up"
              active={activeItem === "Sign Up"}
              onClick={() => {
                this.props.history.push("/signup");
                return this.handleItemClick("Sign Up");
              }}
            />
          )}
          <Menu.Item>
            <SearchBar drizzle={drizzle} drizzleState={drizzleState} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
