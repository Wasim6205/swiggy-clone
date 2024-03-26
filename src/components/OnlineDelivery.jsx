import React, { useState } from "react";
import { RestData } from "../RestData";
import Card from "./Card";

const OnlineDelivery = () => {
    const [data, setData] = useState(RestData)

  return (
    <div className="max-w-[1200px] mx-auto px-2 mb-[100px]">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">
            Restaurants with online food delivery in Ranchi
        </div>
      </div>
      {/* <div>
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3 border border-red-500">
          <div className="p-3 rounded-md bg-slate-300 shadow-md">Filter</div>
          <div className="p-3 rounded-md bg-slate-300 shadow-md">Sort By</div>
        </div>
      </div> */}
      <div className="md:grid grid-cols-4 gap-3">
        {
          data.map((d,i) => (
            <Card key={i} {...d} />
          ))
        }
      </div>
    </div>
  );
};

export default OnlineDelivery;
