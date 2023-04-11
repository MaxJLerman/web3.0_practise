import React from "react";
import { useState } from "react";

import logo from "../../images/logo.png";
import {Menu, MenuOpen, Close} from '@mui/icons-material';

const NavbarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor ${classProps}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const array = ["Market", "Exchange", "Tutorials", "Wallets"];

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="flex justify-center items-center flex-row">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        <span className="text-white">Galactic Credit Standard Exchange</span>
      </div>
      <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {
          toggleMenu
            ? <MenuOpen style={{ fontSize: 48 }} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            : <Menu style={{ fontSize: 48 }} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <ul className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in">
            <li className="text-xl w-full my-2">
              <Close style={{ fontSize: 48 }} onClick={() => setToggleMenu(false)} />
            </li>
            {array.map((item, index) => (
              <NavbarItem key={item + index} title={item} classProps="my-2 text-lg" />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
