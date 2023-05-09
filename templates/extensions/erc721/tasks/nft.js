task("deploy-nft", "Deploy the NFT token", async () => {
  const NFT = await ethers.getContractFactory("ExampleTokenERC721");
  return NFT.deploy();
});
