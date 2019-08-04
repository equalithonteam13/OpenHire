import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };
const noResults = [{ title: "No results found." }];
const organizationNoResults = {
  organization: {
    name: "Organization",
    results: noResults
  }
};
const userNoResults = {
  user: {
    name: "User",
    results: noResults
  }
};

export default class SearchBar extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(async () => {
      if (this.state.value.length < 1) return this.setState(initialState);

      if (this.state.value.length === 42) {
        const organizationData = await this.fetchOrganizationData(value);
        const userData = await this.fetchUserData(value);
        let formattedData = "";
        if (organizationData) {
          formattedData = {
            organization: {
              name: "Organization",
              results: [
                {
                  title: organizationData[0],
                  description: organizationData[1]
                }
              ]
            },
            ...userNoResults
          };
        } else if (userData) {
          formattedData = {
            ...organizationNoResults,
            user: {
              name: "User",
              results: [
                {
                  title: userData[0],
                  description: userData[1]
                }
              ]
            }
          };
        }
        this.setState({
          isLoading: false,
          results: formattedData || {
            ...organizationNoResults,
            ...userNoResults
          }
        });
      }
    }, 300);
  };

  fetchOrganizationData = async address => {
    let data;
    try {
      data = await this.props.drizzle.contracts.OpenHire.methods
        .getOrganization(address)
        .call();
      if (data[0] === "" || data === undefined) return undefined;
      return data;
    } catch (error) {}
  };

  fetchUserData = async address => {
    let data;
    try {
      data = await this.props.drizzle.contracts.OpenHire.methods
        .getUserData(address)
        .call();
      if (data[0] === "" || data === undefined) return undefined;
      return data;
    } catch (error) {}
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            category
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
