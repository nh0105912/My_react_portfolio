import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

import { footer_data } from "../data";
const Footer = () => {
  return (
    <div className="bg-gray-700 w-full py-4">
      <div className="flex flex-col lg:flex-row lg:justify-evenly items-start lg:items-center gap-8 px-4">
        <div className="w-full lg:w-2/4">
          <img src={footer_data.img} alt="" className="w-[150px]" />
          <p className="px-4 text-gray-400 font-bold text-2xl lg:text-4xl">{footer_data.role}</p>
        </div>
        <div className="flex  gap-x-4 px-4">
          <a
            href={footer_data.linkedin}
            target="_blank"
            className="flex items-center gap-x-4 bg-slate-500 text-white px-4 py-2 rounded-lg capitalize hover:border-2  hover:border-white hover:border-solid hover:scale-105"
          >
            linkedin <FaLinkedinIn />
          </a>
          <a
            href={footer_data.github}
            target="_blank"
            className="flex items-center gap-x-4 border-2 border-gray-800 border-solid px-4 py-2 rounded-lg capitalize  hover:border-gray-500 hover:scale-105"
          >
            Github <IoLogoGithub />
          </a>
        </div>
    
      </div>
      <hr className="w-[83%] mx-auto mt-10 bg-gray-700" />
      <p className="px-2 lg:px-0 text-center my-4 text-2xl font-semibold text-white"> &copy;2025 <span className="bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text">Noor</span> . All rights reserved.</p>
    </div>
  );
};

export default Footer;
