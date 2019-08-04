import React, { Component } from 'react'

export default class OrgProfileComponent extends Component {
    constructor() {
        super();
        this.state = {
            orgName: null,
            orgEmail: null,
            orgVerified: null,
        };
    }

    async componentDidMount() {
        // takes a org address as a prop/match.params from either searchbar or clicking on an org
        await this.fetchOrganizationStruct(this.props.match.params.address);
    }

    fetchOrganizationStruct = async (OrgAddress) => {
        console.log('this.props', this.props)
        const orgStruct = await this.props.drizzle.contracts.OpenHire.methods.getOrganization(OrgAddress).call();
        this.setState({
            orgName: orgStruct[0],
            orgEmail: orgStruct[1],
            orgVerified: orgStruct[2]
        })
    };

    render() {
        if (this.state.orgName) {
            return (
                <div>
                    <hr></hr>
                    <h1>Organization Profile View</h1>
                    <h5>Name: {this.state.orgName}</h5>
                    <h5>Email Address: {this.state.orgEmail}</h5>
                </div>
            )
        }
        return (
            <div>
                <h1>{this.props.match.params.address} address is not found!</h1>
            </div>
        )
    }
}
