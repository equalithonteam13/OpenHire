import React, { Component } from 'react'

export default class OrgCurrentEmployeesComponent extends Component {
    constructor() {
        super()
        this.state = {}
    }
    async componentDidMount() {
        await this.fetchCurrentEmployees();
    }

    async fetchCurrentEmployees() {
        const { drizzle } = this.props;

        const currentLoggedInAddressArray = await drizzle.web3.eth.getAccounts()
        const currentLoggedInAddress = currentLoggedInAddressArray[0]
        console.log(currentLoggedInAddress)

        // console.log(drizzle.contracts.OpenHire.methods)
        const userAddressesArrayLength = await drizzle.contracts.OpenHire.methods.getAllUsersLength().call();

        const CURRENT_EMPLOYEES = [];
        for (let index = 0; index < userAddressesArrayLength; index++) {
            const userAddress = await drizzle.contracts.OpenHire.methods.allUserAddresses(index).call();
            const userStruct = await drizzle.contracts.OpenHire.methods.getUserData(userAddress).call();

            if (userStruct[2].includes(currentLoggedInAddress)) {
                const CURRENT_EMPLOYEE_INFO = {
                    name: userStruct[0],
                    emailAddress: userStruct[1],
                    ethereumAddress: userAddress
                };
                CURRENT_EMPLOYEES.push(CURRENT_EMPLOYEE_INFO)
            }
        }
        this.setState({
            CURRENT_EMPLOYEES
        })


    }

    render() {
        // fetch all users
        // filter users by matching org address in experience
        // have side toggle bar
        // check all users for a pending approval
        let currentEmployees;
        if (this.state.CURRENT_EMPLOYEES) {
            currentEmployees = this.state.CURRENT_EMPLOYEES.map(
                (employee, index) => {
                    return <li key={index}>{employee.name}, {employee.emailAddress}, {employee.ethereumAddress}</li>
                }
            )
        }
        return (
            <React.Fragment>
                <hr></hr>
                <h1>Current Employees</h1>
                <div>
                    {currentEmployees}
                </div>
            </React.Fragment>
        )
    }
}
