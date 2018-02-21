var GNOMEToken = artifacts.require("./GNOMEToken.sol");
var SafeMath = artifacts.require("./SafeMath.sol");
var ERC20Interface = artifacts.require("./ERC20Interface.sol");
var Ownable = artifacts.require("./Ownable.sol");
var ApproveAndCallFallBack = artifacts.require("./ApproveAndCallFallBack.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(ERC20Interface);
  deployer.deploy(Ownable);
  deployer.deploy(ApproveAndCallFallBack);
  deployer.link(SafeMath, ERC20Interface, Ownable, ApproveAndCallFallBack, GNOMEToken);
  deployer.deploy(GNOMEToken);
};
