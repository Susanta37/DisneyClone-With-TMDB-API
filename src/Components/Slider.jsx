import React, { useEffect } from "react";
import GlobalApi from "../Services/GlobalApi";
import { useState } from "react";
const imageBaseUrl = "https://image.tmdb.org/t/p/original";
import { HiChevronLeft,HiChevronRight } from "react-icons/hi";

const Slider = () => {
  useEffect(() => {
    getTrendingMovies();
  }, []); //if u dont give [] then it will excute every second , do to avoid this we provide empty array []

  //to store movie data form DB
  const [movieList, setMovieList] = useState([]);

  const getTrendingMovies = () => {
    GlobalApi.getTreandingVideos.then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  return (
    <div>
      <HiChevronLeft  className='hidden md:block text-white size-8 absolute mx-8 mt-[155px] cursor-pointer'/>
      <HiChevronRight className='hidden md:block text-white size-8 absolute mx-8 mt-[155px] cursor-pointer right-0'/>
    <div className='flex overflow-x-auto w-screen px-16 py-4 scrollbar-hide' >
      {/*to itirate the movie list we use map() */}
      {movieList.map((item, index) => (
        <img src={imageBaseUrl+item.backdrop_path} className=' min-w-full md:h-[310px] object-cover object-left-top mr-8 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-out'/>
       // <img
        //   key={index}
        //   src={imageBaseUrl + item.backdrop_path}
        //   className='min-w-full h-auto object-cover object-left-top mr-8'
        //   alt={`Trending Movie ${index + 1}`}
        // />
      ))}
    </div>
    </div>
  );
};

export default Slider;
