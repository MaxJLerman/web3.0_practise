import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window; // from MetaMask

const getEthereumContract = () => {
  const provider = new ethers.BrowserProvider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));

  const handleChange = (event, name) => {
    setFormData((previousState) => ({...previousState, [name]: event.target.value }));
  };
  
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Wallet is not connected, please connect to Metamask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        // getAllTransactions();
      }

      else {
        console.log("No accounts found");
      }
    } 
    
    catch (error) {
      console.log(error);
      throw new Error("no ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Wallet is not connected, please connect to Metamask");

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    }

    catch (error) {
      console.log(error);
      throw new Error("no ethereum object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) return alert("Wallet is not connected, please connect to Metamask");

      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.parseEther(amount); // converts decimal to GWEI hexadecimal

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: "0x5208", // 21000 GWEI == 0.000021 ETH
          value: parsedAmount._hex,
        }]
      });

      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);

      setIsLoading(true);
      console.log(`Loading transaction: ${transactionHash.hash}`);
      await transactionHash.wait();

      setIsLoading(false);
      console.log(`Transaction success: ${transactionHash.hash}`);
      
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    }
    
    catch (error) {
      console.log(error);
      throw new Error("no ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  
  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, handleChange, sendTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};