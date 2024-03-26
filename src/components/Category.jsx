import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CategoryData } from "../CategoryData";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState(CategoryData);

  // const fetchCategory = async () => {
  //     const response = await fetch("http://localhost:5000/categories");
  //     const data = await response.json();
  //     setCategories(data);
  // }
  // useEffect(() => {
  //     setCategories(Category);
  // }, [])

  const nextSlide = () => {
    if(categories.length - 8 == slide) return false;
    setSlide(slide + 3)
  }

  const prevSlide = () => {
    if(slide == 0) return false;
    setSlide(slide - 3)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-2">
      <div className="flex my-5 items-center justify-between">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div onClick={prevSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowLeft />
          </div>
          <div onClick={nextSlide} className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden">
        {categories.map((cat, index) => (
          <div
            style={{
              transform: `translateX(-${slide * 100}%)`,
            }}
            key={index}
            className="w-[150px] shrink-0 duration-500"
          >
            <img src={cat.img} alt={cat.name} />
          </div>
        ))}
      </div>
      <hr className="my-6 border-[2px]" />
    </div>
  );
};

export default Category;
