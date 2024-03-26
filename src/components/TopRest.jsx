import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./Card";
import { RestData } from "../RestData";

const TopRest = () => {
  const [data, setData] = useState(RestData);
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if(data.length - 4 == slide) return false;
    setSlide(slide + 2)
  }

  const prevSlide = () => {
    if(slide == 0) return false;
    setSlide(slide - 2)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-[100px]">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Ranchi
        </div>
        <div className="flex">
          <div onClick={prevSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div onClick={nextSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-hidden">
        {
            data.map((d,i) => (
                <Card slide={slide} {...d} key={i} width="w-full md:w-[273px]" />
            ))
        }
      </div>
      <hr className="my-4 border-[2px]" />
    </div>
  );
};

export default TopRest;
