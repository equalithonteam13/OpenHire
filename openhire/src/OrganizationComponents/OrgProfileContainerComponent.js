import React, { Component } from 'react'
import OrgProfileInfoComponent from './OrgProfileInfoComponent';
import OrgCurrentEmployeesComponent from './OrgCurrentEmployeesComponent';

export default class OrgProfileContainerComponent extends Component {
    render() {
        return (
            <div>
                <h1>Org profile container</h1>
                <OrgProfileInfoComponent {...this.props} drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}></OrgProfileInfoComponent>
                <OrgCurrentEmployeesComponent {...this.props} drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}></OrgCurrentEmployeesComponent>
            </div>
        )
    }
}
