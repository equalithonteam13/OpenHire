import _ from 'lodash';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';

const initialState = { isLoading: false, results: [], value: '' };

export default class SearchExampleStandard extends Component {
  state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(async () => {
      if (this.state.value.length < 1) return this.setState(initialState);

      if (this.state.value.length === 42) {
        const data = await this.fetchData(value);
        let formattedData = '';
        if (data) formattedData = [{ title: data[0], description: data[1] }];
        this.setState({
          isLoading: false,
          results: formattedData,
        });
      }
    }, 300);
  };

  fetchData = address => {
    return this.props.drizzle.contracts.OpenHire.methods
      .getOrganization(address)
      .call();
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
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
