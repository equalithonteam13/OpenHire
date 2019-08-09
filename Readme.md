<h1 align="center">
OpenHire
</h1>


Blockchain solution aimed at helping Fintech firms more effectively identify, attract and retain diverse workers.

----
Nasdaq Challenge #2

Many people suffer from an imposter syndrome, especially employees from minority backgrounds. This syndrome prevents them from behaving in a way that enables them to come through as experts in the eyes of their colleagues. Additionally, the same groups of people can be subject to unconscious biases from peers and managers. One of the impacts of these biases is to make it harder for the minority-sourced employee to be recognized as an expert in their field. How can the various properties of the Blockchain support an HR tool or module that can source, track and secure information that is irrefutable proof of a person’s expertise based on education, factual achievements, peer feedback and references?

----
We developed an application that allows employees to review their accomplishments which can help combat imposter syndrome. Employers will be able to confirm the history of work, education, and skills of an employee at any company with little to no additional bias.



----
Installation Instructions

----


1. Ensure that the local Node version is no higher than 10.16.10 otherwise the following will fail: "npm i" on root directory and openhire directory

2. Download and open up Ganache (https://www.trufflesuite.com/ganache). This is our local test network that we will be deploying to.

3. Create a .secret file in your root directory in order to mimic the secure account creation process on an actualy blockchain network.

4. In Ganache, create a new workspace, and in the server section, change the port number to 8545 and save.

5. Copy and paste the 12 word mnemonic from Ganache into the .secret file 

6. Compile contracts using command "truffle compile" (If you do not have truffle installed globally use "./node_modules/.bin/truffle compile")

7. Migrate using command "truffle migrate" (If you do not have truffle installed globally use "./node_modules/.bin/truffle migrate") to deploy our contracts to the network.

8. Download Metamask extension for your browser and log in to Metamask using the Ganache seed account (12 word mnemonic from step 6) to easily connect to the Ethereum network through our browsers.

9. Change metamask network to localhost 8545. Our test network is deployed to port 8545.

10. "npm start" in openhire folder to run our front end to interact with the blockchain
