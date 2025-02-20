//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

// declare interface for ./BatchRegistry.sol
interface IBatchRegistry {
    function checkIn() external;   
}

// define CheckIn contract
contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;
    constructor(address initialOwner, address batchRegistryAddress) Ownable(initialOwner) {
        // set the batch registry address
        batchRegistry = IBatchRegistry(batchRegistryAddress);
    }

    // function to check in
    function checkIn() public onlyOwner {
        console.log("CheckIn: checkIn called by", msg.sender);
        console.log("Calling batchRegistry contact at", address(batchRegistry));
        // call the checkIn function of the batch registry
        batchRegistry.checkIn();

    }

    function getOwner() public view returns (address) {
        return owner();
    }
}