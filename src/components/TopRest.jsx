import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

const TopRest = () => {
  const [data, setData] = useState([]);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
          Top restaurant chains in Ranchi
        </div>
        <div className="flex">
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex gap-5 overflow-hidden">
        {
            data.map((d,i) => (
                <Card {...d} key={i} />
            ))
        }
      </div>
    </div>
  );
};

export default TopRest;
