import React from 'react';
import SignupForm from './SignupForm';

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
        <h1>Hello!</h1>
        <SignupForm drizzle={drizzle} drizzleState={drizzleState} />
      </div>
    );
  }
}
