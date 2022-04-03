# My-First-Solidity-Contract
Writing my first contract in Solidity<br>
Initiating my journey in web3 space.
<hr>

## Directly run project:
1. ```npm i```
3. ```npx hardhat run scripts/deploy.js --network rinkeby```
4. ```npx hardhat run scripts/interact.js --network rinkeby```

<hr>

## Project steps:
- Step-1: Environment setup
- Step-2: Writing first solidity contract
- Step-3: Deploying smart contract on Blockchain network
<hr>

## Step-1: Environment Setup:

#### Required Tools:
- VS Code (Preferrably with Solidity extension installed for code-intellisense)
- Node (Preferred version: 16.14.2)

#### Setting up basics:
1. Setup [Alchemy account](https://www.alchemy.com/)
2. Install and setup [Metamask account & wallet](https://metamask.io/)

#### Creating [Alchemy account](https://www.alchemy.com/)

Alchemy gives us the ability to read and write on the blockchain via their infrastructure.<br>
Sign up process:
1.  Environment - Staging
2.  Chain - Ethereum
3.  Network - Rinkeby

#### Creating [Metamask wallet](https://metamask.io/)

Metamask wallet is the key to the web3 world. It's used to interact with the blockchain via a MetaMask account. Generally, it's a digital wallet to store, swap and buy cryptocurrencies, tokens, NFTs, and other amazing things in the web3 world.<br>
Installation steps:
-   Go to MetaMask.io
-   Click Download and Install the Chrome Extension.
-   Setup your secure password.
-   Secure your 12-word phrase properly, never share it with anyone.

Account created. A public addressmust be visible at top in the pattern of: (_0x99AE73a58B0De7E15a5233969f08F09e1Fe363B3_)<br>
![image](https://user-images.githubusercontent.com/21308609/161448066-25dd362e-9cc3-4fd6-bff9-c9ffe287edf7.png)

This public address is used to buy, trade, and store Ethereum based tokens, cryptos, NFTs and can even be used to sign in to websites like OpenSea.<br>
**For testing purpose change the network to _"Rinkeby Test Network"_**<br>
![image](https://user-images.githubusercontent.com/21308609/161448031-130d522b-de65-47d1-9e95-ab186d66f749.png)

While writing and deploying the contract, a sign off for each contract with this private key is done to tell the blockchain that we are a legit person creating a real transaction.<br>Open the metamask extension to find your private key.<br>Securly store it some place safe.<br>
![image](https://user-images.githubusercontent.com/21308609/161448456-be07c087-5adf-41a0-bfc8-4d4043e4d114.png)


#### Getting fake eth in test account

Following websites can be used to get test ETHs. This fake money will be used for deploying our contract and doing transactions on it.
1.  [https://faucets.chain.link/rinkeby](https://faucets.chain.link/rinkeby)
2.  [https://rinkeby-faucet.com/](https://rinkeby-faucet.com/)
<hr>

***NEVER COMMIT/SHARE "12 WORD PHRASE", "API KEY" AND "PRVATE KEY" ON GITHUB, DISCORD, ANYWHERE! BE EXTRAAA VIGILANT!!***
<hr>

## Step-2: Writing first solidity contract:
> Navigate to your project folder and follow the following steps:
```
mkdir My-First-Solidity-Contract
cd My-First-Solidity-Contract
ls
npm init --yes
npm install --save-dev hardhat
npx hardhat
```
> Select create an Empty project with hardhat config.

> Manually create two directories: "contracts" and "scripts".
```
mkdir contracts, scripts
```

The contracts directory will have all the contracts for the project and scripts directory will have all the deployments scripts and other stuff related to the project. By now the structure of the project should look something like this:
```
HelloWorld
> contracts
> node_modules
> scripts
hardhat.config.js
package-lock.json
Package.json
```
> Create a [HelloWorld.sol](https://github.com/Shashank-Shukla/My-First-Solidity-Contract/blob/main/contracts/HelloWorld.sol) file in the contracts folder and write the following code:

Start with mentioning the version of the solidity. A smart contract has states, functions and events.
-   The states are usually variables, tokens, NFTs whose state we want to maintain in the contract.
-   In order to read, write or change the states, we use functions.
-   Events are triggers that are activated based on a transformation in a state, a call to a function etc.
<hr>

## Step-3: Deploying smart contract on Blockchain network:

#### Step-3.1: Security checks before deployment
While writing and deploying contract, we need to sign off each contract withyour PRIVATE KEY to tell the Blockchain that we are a legit person creating a real transaction. If the KEY is exposed, the attackers can breach our account. In order to avoid this issue we need to add .env and .gitignore file and add .env to gitignore and all the important keys and secrets related to project will be stored in this .env file.

Steps to follow:
1. ```npm install dotenv --save```
2. ```touch .gitignore```
> Create .env file at project base. Add .env to .gitignore

Insert following details in .env file:
```
PRIVATE_KEY = METAMASK-PRIVATE-KEY
API_URL_KEY = ALCHEMY-APP-HTTP-URL
API_KEY = ALCHEMY-APP-API-KEY
CONTRACT_ADDR = CONTRACT-ADDRESS-WE'LL-GET-AFTER-DEPLOYING (Leave it empty rn)
```
> Update [hardhat config file](https://github.com/Shashank-Shukla/My-First-Solidity-Contract/blob/main/hardhat.config.js) to setup Rinkeby test deployment environment


#### Step-3.2: Writing Deployment Script
```npm install --save-dev @nomiclabs/hardhat-ethers```
Create a deploy.js file in the "scripts" folder. This file will contain all the logic for deployment.<br>
Hardhat ethers is a plugin that gives us access to ethers.js library. Ethers.js library gives us a way to interact with the blockchain world, we can deploy, fetch contracts and we can call their functions.

> Update [deploy.js](https://github.com/Shashank-Shukla/My-First-Solidity-Contract/blob/main/scripts/deploy.js)

To deploy it to test network, run the following command:
```npx hardhat run scripts/deploy.js --network rinkeby```
> Once contract is deployed, check console message for CONTRACT-ADDRESS, store this value in .env file.

> Validate your contract info by navigating to [rinkeby.etherscan.io](https://rinkeby.etherscan.io/) and copy paste your contract id.


#### Step-3.3: Interacting with the Deployed Contract
> Create [interact.js file](https://github.com/Shashank-Shukla/My-First-Solidity-Contract/blob/main/scripts/interact.js) in the "scripts" folder.

Ether.js library gives us **providers**, which are basically the interface for our interaction with the Ethereum Blockchain nodes. When a request is made, it is sent to multiple backends simultaneously. As responses from each backend are returned, they are checked that they agree. Once a quorum has been reached (i.e. enough of the backends agree), the response is provided to your application.<br>
**Signers** is an abstraction of an ethereum account. The signers can be used to sign messages and transactions which can result in calling function, changing state variables etc. Here we are sharing our account private key, because we are the signers of this transaction.

To deploy it to test network, run the following command:<br>
```npx hardhat run scripts/interact.js --network rinkeby```
<hr>
