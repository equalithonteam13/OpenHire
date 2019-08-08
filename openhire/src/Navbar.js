import React, { Component } from "react";
import { Menu, Header } from "semantic-ui-react";
import SearchBar from "./SearchBar";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor() {
    super();
    this.state = { activeItem: "Home", type: "", user: {} };
  }

  async componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const user = await drizzle.contracts.OpenHire.methods
      .getUserData(drizzleState.accounts[0])
      .call();
    this.setState({
      user: user
    });
  }

  handleItemClick = name => {
    this.setState({ activeItem: name });
  };

  handleProfileClick = async (e, address) => {
    let orgData;
    let userData;
    try {
      orgData = await this.props.drizzle.contracts.OpenHire.methods
        .getOrganization(address)
        .call();

      userData = await this.props.drizzle.contracts.OpenHire.methods
        .getUserData(address)
        .call();

      if (orgData[2]) {
        this.setState({ type: "org" });
      } else if (userData[2]) {
        this.setState({ type: "user" });
      }

      return orgData;
    } catch (error) {
      console.log("ERROR");
    }
  };

  render() {
    const { activeItem, type, user } = this.state;
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
          {user[0] ? (
            <Menu.Item
              name="Profile"
              active={activeItem === "Profile"}
              onClick={() => {
                this.handleProfileClick(drizzleState.accounts[0]);
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
