import React, { Component } from "react";
import OrgProfileInfoComponent from "./OrgProfileInfoComponent";
import OrgCurrentEmployeesComponent from "./OrgCurrentEmployeesComponent";

export default class OrgProfileContainerComponent extends Component {
  render() {
    return (
      <div className="org-view-container">
        <h1>Organization Profile</h1>
        <OrgProfileInfoComponent
          {...this.props}
          drizzle={this.props.drizzle}
          drizzleState={this.props.drizzleState}
        />
        <OrgCurrentEmployeesComponent
          {...this.props}
          drizzle={this.props.drizzle}
          drizzleState={this.props.drizzleState}
        />
      </div>
    );
  }
}
