require("./device-registry");
require("./device-binding");

task("deploy-all", "Deploy all contracts", async () => {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  console.log("\nDeploying Device Registry");
  const deviceRegistry = await hre.run("deploy-device-registry");
  console.log("Device Registry address:", deviceRegistry.address);

  console.log("\nDeploying Device Binding");
  const deviceBinding = await hre.run("deploy-device-binding", {
    deviceRegistry: deviceRegistry.address,
  });
  console.log("Device Binding address:", deviceBinding.address);
});
