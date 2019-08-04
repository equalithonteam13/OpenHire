import React from "react";
import { DrizzleContext } from "drizzle-react";
import HomePage from "./HomePage";
import { Switch, Route } from "react-router-dom";
import { Loader } from "semantic-ui-react";

export default () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const { drizzle, drizzleState, initialized } = drizzleContext;

      if (!initialized) {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h1>Loading...</h1>
            <Loader size="massive" active inline />
          </div>
        );
      }
      return <HomePage drizzle={drizzle} drizzleState={drizzleState} />;
    }}
  </DrizzleContext.Consumer>
);
