task("deploy-erc20", "Deploy the ERC20 token", async () => {
  const Token = await ethers.getContractFactory("Token");
  return Token.deploy();
});
