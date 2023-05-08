const { expect } = require("chai");

describe("EcoToken", function () {
  it("Should deploy EcoToken", async function () {
    const Token = await ethers.getContractFactory("ECOToken");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("EcoFriendly Token");
    expect(await token.symbol()).to.equal("ECO");
  });
});
