import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Update with your Batch number
const BATCH_NUMBER = "13";

/**
 * Deploys a contract named "deployYourContract" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  /*
    On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

    When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
    should have sufficient balance to pay for the gas fees for contract creation.

    You can generate a random account with `yarn generate` or `yarn account:import` to import your
    existing PK which will fill DEPLOYER_PRIVATE_KEY_ENCRYPTED in the .env file (then used on hardhat.config.ts)
    You can run the `yarn account` command to check your balance in every network.
  */
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // await deploy("BatchRegistry", {
  //   from: deployer,
  //   // Contract constructor arguments
  //   args: [deployer, BATCH_NUMBER],
  //   log: true,
  //   // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
  //   // automatically mining the contract deployment transaction. There is no effect on live networks.
  //   autoMine: true,
  // });

  // // Get the deployed contract to interact with it after deploying.
  // const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
  // console.log("\nBatchRegistry deployed to:", await batchRegistry.getAddress());
  // console.log("Remember to update the allow list!\n");
  // const addr = await batchRegistry.getAddress();

  // // Transfer ownership to your front end address
  // console.log("\n 🤹  Sending ownership to frontend address...\n");
  // const ownerTx = await batchRegistry.transferOwnership("0x136D80a50d336B378B4D10D3c2312eD192bDeeE5");
  // console.log("\n       confirming...\n");
  // const ownershipResult = await ownerTx.wait();
  // if (ownershipResult) {
  //   console.log("       ✅ ownership transferred successfully!\n");
  // }
  // const owner = await batchRegistry.owner();
  // console.log("Current owner of BatchRegistry:", owner);

  await deploy("CheckIn", {
    from: deployer,
    args: ["0xcF4ac52079F69C93904e2A4a379cAd1F0C8dA0A9"],
    log: true,
    autoMine: true,
  })
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("\nCheckIn deployed to:", await checkIn.getAddress());

  // // The GraduationNFT contract is deployed on the BatchRegistry constructor.
  // const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
  // console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");
};

export default deployYourContract;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployYourContract.tags = ["BatchRegistry", "CheckIn"];
