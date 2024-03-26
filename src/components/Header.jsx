import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoSearchSharp } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { PiShoppingCart } from "react-icons/pi";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    console.log("hi");
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links = [
    {
        icon: <IoSearchSharp />,
        name: "Search",
    },
    {
        icon: <CiDiscount1 />,
        name: "Offers",
        sup: "New"
    },
    {
        icon: <IoHelpBuoyOutline />,
        name: "Help",
    },
    {
        icon: <FaRegUser />,
        name: "Sign In",
    },
    {
        icon: <PiShoppingCart />,
        name: "Cart",
        sup: 2,
    },
  ]

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          zIndex:999
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[50vw] md:w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="sticky top-0 bg-white z-10 p-[15px] shadow-xl text-[#686b78]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="images/logo.png" className="w-full" alt="logo" />
          </div>
          <div className="">
            <span className="font-bold border-b-[3px] border-[black]">
              Other
            </span>{" "}
            Ranchi, Jharkhand, India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              fontSize={25}
              className="inline cursor-pointer text-[#fc8019]"
            />
          </div>
            <nav className="hidden md:flex list-none gap-7 ml-auto font-semibold text-[18px]">
                {
                    links.map((link, index) => (
                        <li key={index} className="flex cursor-pointer hover:text-[#fc8019] items-center gap-2">
                            {link.icon}
                            {link.name}
                            <sup className="text-[#fc8019]">{link.sup}</sup>
                        </li>
                    ))
                }
            </nav>
          </div>
      </header>
    </>
  );
};

export default Header;
