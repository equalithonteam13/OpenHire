import _ from 'lodash';
import React, { Component } from 'react';
import { Search } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const initialState = { isLoading: false, results: [], value: '' };
const noResults = [{ title: 'No results found.' }];
const organizationNoResults = {
  organization: {
    name: 'Organization',
    results: noResults,
  },
};
const userNoResults = {
  user: {
    name: 'User',
    results: noResults,
  },
};

class SearchBar extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.title });
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(async () => {
      if (this.state.value.length < 1) return this.setState(initialState);

      if (this.state.value.length === 42) {
        const organizationData = await this.fetchOrganizationData(value);
        const userData = await this.fetchUserData(value);
        let formattedData = '';
        if (organizationData) {
          formattedData = {
            organization: {
              name: 'Organization',
              results: [
                {
                  title: organizationData[0],
                  description: organizationData[1],
                },
              ],
            },
            ...userNoResults,
          };
        } else if (userData) {
          formattedData = {
            ...organizationNoResults,
            user: {
              name: 'User',
              results: [
                {
                  title: userData[0],
                  description: userData[1],
                },
              ],
            },
          };
        }
        this.setState({
          isLoading: false,
          results: formattedData || {
            ...organizationNoResults,
            ...userNoResults,
          },
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
      if (data[0] === '' || data === undefined) return undefined;
      return data;
    } catch (error) {}
  };

  fetchUserData = async address => {
    let data;
    try {
      data = await this.props.drizzle.contracts.OpenHire.methods
        .getUserData(address)
        .call();
      if (data[0] === '' || data === undefined) return undefined;
      return data;
    } catch (error) {}
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Search
        category
        placeholder={this.props.placeholder || 'Address'}
        loading={isLoading}
        onResultSelect={(event, data) => {
          const user = data.results.user.results[0].title;
          const organization = data.results.organization.results[0].title;
          const noResults = 'No results found.';

          if (data.result.title !== noResults) {
            if (user === noResults) {
              this.props.history.push(`/organization/${this.state.value}`);
            } else if (organization === noResults) {
              this.props.history.push(`/user/${this.state.value}`);
            }
          }

          return this.handleResultSelect;
        }}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
      />
    );
  }
}

export default withRouter(SearchBar);
