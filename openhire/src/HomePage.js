import React from 'react';
import { Loader, Button } from 'semantic-ui-react';

export default class HomePage extends React.Component {
  constructor(props, context) {
    super();
    this.drizzleState = context.drizzle;
    this.state = {};
  }
  render() {
    console.log(this.drizzleState, this.props);
    console.log(Loader);
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}
