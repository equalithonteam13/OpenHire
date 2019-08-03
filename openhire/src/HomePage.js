import React from 'react';
import SignupForm from './SignupForm';
import Navbar from './Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import OrgProfileComponent from './OrganizationComponents/OrgProfileComponent';

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
        <Router>
          <Switch>
            <Route exact path='/organization/:address' render={(props) => (<OrgProfileComponent {...props} drizzle={drizzle} drizzleState={drizzleState} />)}></Route>


            {/* <Route exact path='/organization/:address' component={OrgProfileComponent} drizzle={drizzle} drizzleState={drizzleState}></Route> */}
            {/* <Route path='*' render={<h4>No Route Found!</h4>}></Route> */}
          </Switch>
        </Router>
      </div>
    );
  }
}
