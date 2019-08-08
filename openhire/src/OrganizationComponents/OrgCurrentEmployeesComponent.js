import React, { Component } from "react";
import { Card } from "semantic-ui-react";

export default class OrgCurrentEmployeesComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    await this.fetchCurrentEmployees();
  }

  async fetchCurrentEmployees() {
    const { drizzle } = this.props;

    // TODO: fix this!!! to current account
    const currentLoggedInAddressArray = await drizzle.web3.eth.getAccounts();
    const currentLoggedInAddress = currentLoggedInAddressArray[0];

    // console.log(drizzle.contracts.OpenHire.methods)
    const userAddressesArrayLength = await drizzle.contracts.OpenHire.methods
      .getAllUsersLength()
      .call();

    const CURRENT_EMPLOYEES = [];
    for (let index = 0; index < userAddressesArrayLength; index++) {
      const userAddress = await drizzle.contracts.OpenHire.methods
        .allUserAddresses(index)
        .call();
      const userStruct = await drizzle.contracts.OpenHire.methods
        .getUserData(userAddress)
        .call();

      if (userStruct[2].includes(currentLoggedInAddress)) {
        const experienceLength = await drizzle.contracts.OpenHire.methods
          .getExperienceLength(userAddress)
          .call();

        for (let expIndex = 0; expIndex < experienceLength; expIndex++) {
          const experience = await drizzle.contracts.OpenHire.methods
            .getExperience(userAddress, expIndex)
            .call();
          if (experience[2].toString() == new Date().getFullYear()) {
            const CURRENT_EMPLOYEE_INFO = {
              name: userStruct[0],
              emailAddress: userStruct[1],
              ethereumAddress: userAddress
            };
            CURRENT_EMPLOYEES.push(CURRENT_EMPLOYEE_INFO);
          }
        }
      }
    }
    this.setState({
      CURRENT_EMPLOYEES
    });
  }

  render() {
    let currentEmployees;
    if (this.state.CURRENT_EMPLOYEES) {
      currentEmployees = this.state.CURRENT_EMPLOYEES.map((employee, index) => {
        return (
          <Card
            key={index}
            href={`/user/${employee.ethereumAddress}`}
            header={employee.name}
            description={employee.emailAddress}
            meta={employee.ethereumAddress}
            color="teal"
            className="orgCard"
            style={{
              width: "500px"
            }}
          />
        );
      });
    }
    return (
      <React.Fragment>
        <hr />
        <h1> HI </h1>
        <h1>Current Employees</h1>
        <div>{currentEmployees}</div>
      </React.Fragment>
    );
  }
}
