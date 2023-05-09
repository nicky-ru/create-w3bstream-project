task("deploy-device-binding", "Deploy Device Binding")
  .addParam("deviceRegistry", "Device Registry address")
  .setAction(async (taskArgs) => {
    const DeviceBinding = await ethers.getContractFactory("DeviceBinding");
    return DeviceBinding.deploy(taskArgs.deviceRegistry);
  });
