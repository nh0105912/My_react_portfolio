import React, { useEffect, useState } from "react";
import {Link} from "react-router"
import logo from "../assets/images/logo1.png";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [theme, setTheme] = useState("black");

  const toggleChange = () => {
    setTheme((prev) => (prev === "black" ? "white" : "black"));
  };

  useEffect(() => {
    if (theme === "black") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "#758A93";
      let col = document.getElementById("col");
      col.style.backgroundColor ="#111827";
      col.style.color ="#758A93"
    } else {
      document.body.style.backgroundColor = "#F9F8F6";
      document.body.style.color = "#0F0E0E";
      let col = document.getElementById("col");
      col.style.backgroundColor ="#374151 ";
      col.style.color ="white"
    }
  }, [theme]);

  return (
    <div  id="col" className="flex justify-between items-center  px-8 lg:mx-20 my-4 bg-gray-900 lg:rounded-full  sticky top-0 z-50 ">
      <img src={logo} alt="" className="w-[80px]" />
      <ul
        className={`flex justify-start items-start md:items-center lg:items-center   gap-y-6 md:gap-x-6  ${
          open
            ? "flex flex-col absolute top-16 right-0  translate-x-2/4 w-full rounded-md bg-[#1a1919] px-4 py-4 md:static md:flex-row md:bg-transparent md:p-0"
            : "hidden md:flex"
        }`}
      >
        <li>
          <a href="#home" className="font-semibold capitalize text-white ">
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-semibold capitalize hover:text-white transition-all duration-100"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="font-semibold capitalize hover:text-white transition-all duration-100"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#Service"
            className="font-semibold capitalize hover:text-white transition-all duration-100"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="font-semibold capitalize hover:text-white transition-all duration-100"
          >
            contact Me
          </a>
        </li>
      </ul>
      <button
        onClick={toggleChange}
        className="rounded-full bg-[#758A93] p-2 text-black"
      >
        {theme === "black" ? (
          <IoSunny className="w-4 h-4" />
        ) : (
          <FaRegMoon className="w-4 h-4" />
        )}
      </button>

      <div className="md:hidden">
        <button onClick={() => setopen((prev) => !prev)}>
          {open ? (
            <RxCross2 className="w-8 h-8" />
          ) : (
            <RiMenu3Line className="w-8 h-8" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
