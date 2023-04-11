import React from "react";

import { Loader } from "./";
import currency from "../../images/currency.png";
import {InfoOutlined} from "@mui/icons-material/";

const Welcome = () => {
  const connectWallet = () => {

  };

  const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";
  
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex:col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white py-1">
            Send Credits <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on *this webshite*
          </p>
          <button className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover_bg-[#2546bd]" type="button" onClick={connectWallet}>
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>
              Reliability
            </div>
            <div className={commonStyles}>
              Security
            </div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>
              Security
            </div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>
                Web3.0
            </div>
            <div className={commonStyles}>
              Low fees
            </div>
            <div className={`rounded-br-2xl ${commonStyles}`}>
                Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <img src={currency} alt="logo" className="w-32 cursor-pointer" style={{ width: 18, height: 30 }} />
                </div>
                <InfoOutlined style={{ fontSize: 18 }} className="text-white md:hidden cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
