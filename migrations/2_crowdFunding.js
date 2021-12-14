const funding = artifacts.require("CrowdFunding");

module.exports = function(deployer) {
    deployer.deploy(funding);
};