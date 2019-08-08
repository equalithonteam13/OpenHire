import SignupForm from './SignupForm';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import Browse from './Browse';

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import OrgProfileContainerComponent from './OrganizationComponents/OrgProfileContainerComponent';
import SingleUserView from './UserComponents/SingleUserView';
import SplashPage from './SplashPage';

import Footer from './Footer';
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

        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <SplashPage
                  drizzle={drizzle}
                  drizzleState={drizzleState}
                  props={props}
                />
              );
            }}
          />
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
              <OrgProfileContainerComponent
                {...props}
                drizzle={drizzle}
                drizzleState={drizzleState}
              />
            )}
          />

          <Route path="*" render={<h4>No Route Found!</h4>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
