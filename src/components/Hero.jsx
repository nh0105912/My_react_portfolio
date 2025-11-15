import React from "react";
import { RiContactsBook3Line } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";

import hero_img from "../assets/images/home-1.png";
import { hero_Data } from "../data";

const Hero = () => {
  return (
    <div id="col" className=" lg:mx-20 rounded-md py-4 flex flex-col justify-center items-center gap-8 ">
      <img
        src={hero_img}
        alt=""
        className="border-2 border-gray-800 border-solid rounded-full w-[160px] h-[160px]"
      />

      <div className="text-center ">
        <h1
          className=" text-4xl lg:text-6xl font-bold bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text  pb-2"
        >
          {hero_Data.name}
        </h1>
        <h2 className="text-2xl lg:text-4xl font-semibold text-gray-700 pb-4">
          {hero_Data.role}
        </h2>
        <p className=" w-full px-2 lg:px-0 lg:w-3/4 mx-auto mb-4">
          {hero_Data.description}
        </p>
        <div className="flex justify-center items-center gap-4  py-6">
          <a href="#contact" className=" flex  items-center justify-center gap-x-4 bg-slate-500 text-white px-4 py-2 rounded-lg hover:border-2  hover:border-white hover:border-solid hover:scale-105">
            {hero_Data.contact} <RiContactsBook3Line className="w-4 h-4" />{" "}
          </a>
          <a href={hero_Data.resume} target="_blank" className="flex  items-center justify-center gap-x-4 border-[2px] border-gray-800 border-solid px-4 py-1  rounded-lg hover:bg-slate-500 hover:border-white hover:text-white hover:scale-105">
            My Resume <MdOutlineFileDownload />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
