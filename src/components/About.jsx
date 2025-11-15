import React from "react";

import about_img from "../assets/images/about.png";
import { about_data } from "../data";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-center items-center py-10 lg:px-32 gap-x-10 gap-y-8">
      <img
        src={about_img}
        alt=""
        className=" w-[96%] object-cover mx-4 lg:px-0 lg:w-[250px]   rounded-2xl lg:rounded-lg border-4 border-black border-solid"
      />

      <div className="mx-4 lg:mx-0 ">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text">
          {about_data.section}
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {about_data.name}
        </h2>
        <p className="mb-4">{about_data.description} </p>
        <div className="flex  gap-x-4">
          <a href={about_data.linkedin} target="_blank" className="flex items-center gap-x-4 bg-slate-500 text-white px-4 py-2 rounded-lg capitalize hover:border-2  hover:border-white hover:border-solid hover:scale-105">
            linkedin <FaLinkedinIn/>
          </a>
          <a href={about_data.github} target="_blank" className="flex items-center gap-x-4 border-2 border-gray-800 border-solid px-4 py-2 rounded-lg capitalize  hover:border-gray-500 hover:scale-105">
            Github <IoLogoGithub/>
          </a>
        </div>
      </div>
     
    </div>
  );
};

export default About;
