import SignupForm from './SignupForm';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Browse from './Browse';

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrgProfileComponent from './OrganizationComponents/OrgProfileComponent';

import SingleUserView from './SingleUserView';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { drizzle, drizzleState } = this.props;

    return (
      <div>
        <ToastContainer />
        <Navbar drizzle={drizzle} drizzleState={drizzleState} />
        <h1>OpenHire</h1>
        <Switch>
          <Route
            exact
            path="/browse"
            render={props => {
              return (
                <Browse
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  props={props}
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={() => {
              return (
                <SignupForm drizzle={drizzle} drizzleState={drizzleState} />
              );
            }}
          />
          <Route
            exact
            path="/profile/:address"
            render={props => {
              return (
                <SingleUserView
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  props={props}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}
