task("deploy-eco", "Deploy the ECO token", async () => {
  const Token = await ethers.getContractFactory("ECOToken");
  return Token.deploy();
});
