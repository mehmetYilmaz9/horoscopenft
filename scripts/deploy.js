const hre = require("hardhat"); 

async function main() {  

    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
	
	//since we are testing, you should mention your own Eth wallet address
    const myAddress="0x42FD6663aFB5A5ed0F4C5426743204bCE6d76E6F";
    console.log("horoscopeNFT deployed to:", hscp.address);   

    let txn = await hscp.mintNFT(myAddress, 'aquarius');
    await txn.wait();

 } 

main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });