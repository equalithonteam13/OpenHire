OpenHire

1. "npm i" on root directory and openhire directory

2. Download and open up Ganache (https://www.trufflesuite.com/ganache)

3. Create a .secret file in your root directory.

4. In Ganache, create a new workspace, and in the server section, change the port number to 8545 and save.

5. Copy and paste the 12 word mnemonic from Ganache into the .secret file

6. Compile contracts using command "truffle compile" (If you do not have truffle installed globally
   use "./node_modules/.bin/truffle compile")

7. Migrate using command "truffle migrate" (If you do not have truffle installed globally
   use "./node_modules/.bin/truffle migrate")

8. Download Metamask extension for your browser and log in to Metamask using the Ganache seed account
   (12 word mnemonic from step 6)

9. Change metamask network to localhost 8545

10. "npm run start" in openhire folder
