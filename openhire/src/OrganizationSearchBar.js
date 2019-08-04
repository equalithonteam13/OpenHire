import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };
const noResults = [{ title: 'No results found.' }];
const organizationNoResults = {
  organization: {
    name: 'Organization',
    results: noResults,
  },
};

export default class OrganizationSearchBar extends Component {
  state = initialState;

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(async () => {
      if (this.state.value.length < 1) return this.setState(initialState);

      if (this.state.value.length === 42) {
        const organizationData = await this.fetchOrganizationData(value);
        let results = [];
        if (organizationData) {
          results = [
            {
              title: organizationData[0],
              price: organizationData[1],
              description: this.state.value,
            },
          ];
        }
        this.setState({
          isLoading: false,
          results: results || noResults,
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

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <label>Organization Search</label>
          <Search
            loading={isLoading}
            onResultSelect={this.props.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
