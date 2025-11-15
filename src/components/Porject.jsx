import React from "react";
import { TbExternalLink } from "react-icons/tb";

import { IoLogoGithub } from "react-icons/io5";

import { project_data } from "../data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "step",
  };

  return (
    <div className="mt-20" id="projects">
      <h1 className="capitalize text-center text-4xl lg:text-6xl font-bold  bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text">
        My Projects{" "}
      </h1>
      <Slider {...settings} className="lg:mx-20 mx-1 px-4 mt-4">
        {project_data.map((item, index) => {
          return (
            <div key={index} className=" my-10">
              <div className="flex flex-col lg:flex-row justify-center  gap-8">
                <img
                  src={item.img}
                  alt={item.project}
                  className="w-full  lg:w-[400px] h-[180px] object-cover rounded-md"
                />

                <div className="mt-6 lg:mt-0 lg:w-1/2">
                  <h1 className="text-3xl font-bold mb-2 capitalize">
                    {item.project}
                  </h1>
                  <p className="mb-4">{item.description}</p>

                  <div className="flex gap-x-8">
                    <a
                      href={item.live} 
                      target="_blank"
                      className="flex gap-x-4 items-center text-white font-semibold capitalize  bg-slate-900 px-4 py-1 rounded-md hover:border-2 hover:border-gray-900 hover:border-solid hover:scale-105 "
                    >
                      Live <TbExternalLink />
                    </a>
                    <a
                     href={item.code} 
                      target="_blank"
                      className="capitalize flex gap-x-4 items-center text-gray-600 font-semibold px-4 py-1 rounded-md border-[2px] border-gray-800 border-solid hover:border-gray-500 hover:scale-105"
                    >
                      code <IoLogoGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

// Export the corrected component name
export default Project;
