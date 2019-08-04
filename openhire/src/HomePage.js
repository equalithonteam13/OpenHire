import SignupForm from "./SignupForm";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Browse from "./Browse";

import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SignupForm from './SignupForm';
import Navbar from './Navbar';
import SingleUserView from './SingleUserView';

export default class HomePage extends Component {
  constructor(props, context) {
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
        <SignupForm drizzle={drizzle} drizzleState={drizzleState} />
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
        </Switch>

        <SingleUserView
          drizzle={drizzle}
          drizzleState={drizzleState}
          pageAddress={'0xbEd2567a6888cc3AD176BaF0891b64337729AD97'}
        />
      </div>
    );
  }
}
