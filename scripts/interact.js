const {ethers} = require("hardhat");

const API_Key = process.env.API_Key;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// deployed contract address
const CONTRACT_ADDR = process.env.CONTRACT_ADDR;

// gets contract artifact (contract abi)
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_Key);

// signer - we
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const contractInstance = new ethers.Contract(CONTRACT_ADDR, contract.abi, signer);

async function main(){
    const newMsg = "Message updated twice!";
    const msg = await contractInstance.message();
    console.log("> Message received: ", msg);
    const updateMsg = await contractInstance.update(newMsg);
    await updateMsg.wait();

    const newMsgRx = await contractInstance.message();
    console.log("> Message updated to: ", newMsgRx);
}

main().then(() => process.exit(0)).catch(err => {
    console.log("X Error occured: ", err);
    process.exit(1);
});
