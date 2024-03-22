import React, { useState } from "react";
import logo from "./../assets/Image/logo.png";
import dp from "./../assets/Image/1.jpg";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

function Header() {
  const [tougle, setTougle] = useState(false);
  const menu = [  
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "FAVORITE", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex  items-center  justify-between w-screen p-3">
      <div className="flex gap-8  ">
        <img src={logo} className="w-[80px] md:w-[110px] object-cover" />

        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div className="md:hidden flex " onClick={() => setTougle(!tougle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />

            {/*using this tougle as ternary for showing the dropdown list*/}

            {tougle ? (
              <div className="absolute mt-3   py-8 bg-transparent border-[#3d3939]">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img src={dp} alt="" className="w-[40px] h-[40px] rounded-full" />
    </div>
  );
}

export default Header;
