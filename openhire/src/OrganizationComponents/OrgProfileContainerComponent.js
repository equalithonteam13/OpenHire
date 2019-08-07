import React, { Component } from 'react'
import OrgProfileInfoComponent from './OrgProfileInfoComponent';
import OrgPendingApprovalsComponent from './OrgPendingApprovalsComponent';

export default class OrgProfileContainerComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h1>Org profile container</h1>
                <OrgProfileInfoComponent {...this.props} drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}></OrgProfileInfoComponent>
                <OrgPendingApprovalsComponent {...this.props} drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}></OrgPendingApprovalsComponent>
            </div>
        )
    }
}
