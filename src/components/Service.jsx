import React from "react";
import { service_data } from "../data";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "step",
  };
  return (
    <div className="my-20" id="Service">
      <h1 className="capitalize text-center text-4xl lg:text-6xl font-bold  bg-gradient-to-b from-cyan-600 to-red-500 text-transparent bg-clip-text">
        Our Servives
      </h1>
      <div>
        <Slider {...settings} className="lg:mx-20 mx-1 px-4 mt-4">
          {service_data.map((item) => {
            return (
              <div className="mt-10" key={item.id}>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full lg:w-[400px] h-[200px] object-cover rounded-md"
                  />

                  <div className="mt-6 lg:mt-0 lg:w-1/2">
                    <h1 className="text-3xl font-bold mb-2 capitalize">
                      {item.name}
                    </h1>
                    <p>{item.description}</p>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Service;
