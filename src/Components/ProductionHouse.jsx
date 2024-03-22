import React from "react";
import Marvel from "./../assets/Image/marvel.png";
import Disney from "./../assets/Image/disney.png";
import Pixar from "./../assets/Image/pixar.png";
import Sw from "./../assets/Image/starwar.png";
import NationalGeography from "./../assets/Image/nationalG.png";

import DV from "./../assets/Videos/disney.mp4";
import MV from "./../assets/Videos/marvel.mp4";
import NG from "./../assets/Videos/national-geographic.mp4";
import PX from "./../assets/Videos/pixar.mp4";
import SW from "./../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: Marvel,
      video: MV,
    },
    {
      id: 2,
      image: Disney,
      video: DV,
    },
    {
      id: 3,
      image: Pixar,
      video: PX,
    },
    {
      id: 4,
      image: Sw,
      video: SW,
    },
    {
      id: 5,
      image: NationalGeography,
      video: NG,
    },
  ];
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
                
               
            </div>
        ))}
    </div>
  
  );
};

export default ProductionHouse;
