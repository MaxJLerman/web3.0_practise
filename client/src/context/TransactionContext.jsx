import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window; // from MetaMask

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

  console.log({
    provider,
    signer,
    transactionContract
  });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });

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

      // get data from form
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