<h1 align="center">
OpenHire
</h1>

**About**
----
OpenHire is an Ethereum based dapp (decentralized application) that combats imposter syndrome by allowing an employer to better identify skilled employees without unconscious bias. By building on the Ethereum blockchain, OpenHire achieves immutable provenance of an employee's education, work experience, skills, and peer feedback by allowing the requisite party to validate each item. OpenHire then hides all personally identifiable information from an employee's resume page, while still allowing the employer to search by these criteria, reducing the possibility of unconscious bias. Our hope is that OpenHire will enable underrecognized women and minority experts a better opportunity to be discovered by the employer, benefiting all. Live demo can be viewed here: https://youtu.be/021utaQVgiM. 

![OpenHire Home Page](https://github.com/equalithonteam13/OpenHire/blob/master/readme/home_page_screenshot.jpg)

----
**Nasdaq Challenge #2**
Blockchain solution aimed at helping Fintech firms more effectively identify, attract and retain diverse workers.

Many people suffer from an imposter syndrome, especially employees from minority backgrounds. This syndrome prevents them from behaving in a way that enables them to come through as experts in the eyes of their colleagues. Additionally, the same groups of people can be subject to unconscious biases from peers and managers. One of the impacts of these biases is to make it harder for the minority-sourced employee to be recognized as an expert in their field. How can the various properties of the Blockchain support an HR tool or module that can source, track and secure information that is irrefutable proof of a person’s expertise based on education, factual achievements, peer feedback and references?

----
**Requirements**
- nodeJS v10.16.1
- ganache v2.1.0
- truffle ^5.0.30
- truffle-hdwallet-provider ^1.0.15
- drizzle ^1.4.0
- drizzle-react ^1.3.0
- react ^16.8.6
- react-dom ^16.8.6
- react-router-dom ^5.0.1
- react-scripts 3.0.1
- react-toastify ^5.3.2
- semantic-ui-react ^0.87.3

----
**Installation**

Note: this configuration process is long and fraught with errors due to the nature of Ethereum development! Please reach out if you encounter issues, we may have encountered and resolved the same ones during our development process.

1. Ensure that the local Node version is 10.16.10 (the truffle library has dependecy issues with Node v12+)

2. Navigate to the root directory 

3. `npm i` in root directory

4. Navigate to the openhire directory

5. `npm i` in the openhire directory

6. Download and open up Ganache (https://www.trufflesuite.com/ganache). This is our local test Ethereum network that we will be deploying our smart contract on.

7. In Ganache:
    - create a new workspace
    - under the server tab, change the port number to 8545 (this is our local testnet port)
    - under the accounts & keys tab, copy the mnemonic key (this is how we generate our ethereum address)
    - save

8. Create a `.secret` file in your root directory and paste your mnemonic key from step 7 (this allows the code to deploy our contract with the same address)

9. In the root directory, compile and migrate the contracts using command `truffle migrate` (If you do not have truffle installed globally use "./node_modules/.bin/truffle migrate") to deploy the contracts to the local network.

10. Download Metamask extension for your browser and log in to Metamask (https://metamask.io/) This is an Ethereum address management tool and our interface with the Ethereum blockchain

11. Enter the Ganache seed account (12 word mnemonic from step 7) into metamask.

12. Change metamask network to localhost 8545. Our test network is deployed to port 8545.

13. Navigate to the openhire directory and `npm start` to run our front end to interact with the blockchain

----
**Screenshots**

![Current Employees](https://github.com/equalithonteam13/OpenHire/blob/master/readme/current_employees_screenshot.jpg)

![Verified Employee Profile](https://github.com/equalithonteam13/OpenHire/blob/master/readme/daphne%20profile.png)

Sample University Page: https://st-francis.herokuapp.com/
