// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// 'contract' is in place of 'class'
contract Transactions {
  uint256 transactionCount; // holds the number of transactions

  event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

  struct TransferStruct {
    address sender;
    address receiver;
    uint amount;
    string message;
    uint256 timestamp;
    string keyword;
  }

  TransferStruct[] transactions; // declaring an array of transactions with respective transfer structures

  function addToBlockchain() public {

  }

  function getAllTransactions() public view returns (TransferStruct[] memory) {
    // return transactions;
  }

  function getTransactionCount() public view returns (uint256) {
    // return transactionCount;
  }
}