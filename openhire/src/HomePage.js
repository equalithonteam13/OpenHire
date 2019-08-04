import SignupForm from './SignupForm';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Browse from './Browse';

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OrgProfileComponent from './OrganizationComponents/OrgProfileComponent';
import SingleUserView from './UserComponents/SingleUserView';

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
            path="/user/:address"
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
          <Route
            exact
            path="/organization/:address"
            render={props => (
              <OrgProfileComponent
                {...props}
                drizzle={drizzle}
                drizzleState={drizzleState}
              />
            )}
          />

          {/* <Route exact path='/organization/:address' component={OrgProfileComponent} drizzle={drizzle} drizzleState={drizzleState}></Route> */}
          {/* <Route path='*' render={<h4>No Route Found!</h4>}></Route> */}
        </Switch>
      </div>
    );
  }
}
