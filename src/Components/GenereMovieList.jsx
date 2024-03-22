import React from 'react'
import GenersList from '../Constant/GenersList'
import MovieList from './MovieList'

const GenereMovieList = () => {
  return (
    <div>
    {GenersList.genere.map((item,index)=>index>=4&&(
        <div className=' p-8 px-16 md:px-20px '>
            <h2 className='text-[10px] font-bold md:text-[20px]  '>{item.name}</h2>
            <MovieList genreId={item.id}/>
        </div>
    ))}
    </div>
  )
}

export default GenereMovieList
