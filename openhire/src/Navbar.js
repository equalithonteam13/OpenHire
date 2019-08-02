import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import SearchBar from './SearchBar';

export default class NavBar extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { drizzle, drizzleState } = this.props;
    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="button2"
          active={activeItem === 'button2'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="button3"
          active={activeItem === 'button3'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <SearchBar drizzle={drizzle} drizzleState={drizzleState} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
