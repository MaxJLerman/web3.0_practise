import React from "react";
import { useState } from "react";

import logo from "../../images/logo.png";
import {Menu, MenuOpen} from '@mui/icons-material';

const NavbarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor ${classProps}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const array = ["Market", "Exchange", "Tutorials", "Wallets"];
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
        {array.map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {
          toggleMenu
          ? <MenuOpen style={{ fontSize: 50, color: "white" }} onClick={() => setToggleMenu(false)} />
          : <Menu style={{ fontSize: 50, color: "white" }} onClick={() => setToggleMenu(true)} />
        }
      </div>
    </nav>
  );
};

export default Navbar;
