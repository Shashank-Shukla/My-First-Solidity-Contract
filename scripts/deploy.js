const {ethers} = require("hardhat");
async function main(){
    const initializeMessage = "Activating block...";
    const HelloWorld = await ethers.getContractFactory('HelloWorld');
    const initContract = await HelloWorld.deploy(initializeMessage);
    console.log("Contract deployed to contract address: ",initContract.address);
}

main().then(() => process.exit(0)).catch(err => {
    console.error("Exception occured: ",err);
    process.exit(1);
});