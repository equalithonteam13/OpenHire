import React from "react";
import SignupForm from "./SignupForm";
import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch } from "react-router-dom";
import Browse from "./Browse";

export default class HomePage extends React.Component {
  constructor(props, context) {
    super();
    this.drizzleState = context.drizzle;
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
      </div>
    );
  }
}
