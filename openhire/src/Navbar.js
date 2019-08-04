import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {
  constructor() {
    super();
    this.state = { activeItem: 'home' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { drizzle, drizzleState } = this.props;

    return (
      <Menu>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={() => {
            this.props.history.push('/');
            return this.handleItemClick;
          }}
        />
        <Menu.Item
          name="Browse"
          active={activeItem === 'button2'}
          onClick={() => {
            this.props.history.push('/browse');
            return this.handleItemClick;
          }}
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

export default withRouter(NavBar);
