task("deploy-device-registry", "Deploy Device Registry", async () => {
  const DevicesRegistry = await ethers.getContractFactory("DevicesRegistry");
  return DevicesRegistry.deploy();
});
