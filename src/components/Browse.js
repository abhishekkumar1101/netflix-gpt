import React, { useEffect } from 'react'
import { API_OPTIONS, Logo_URL } from '../utils/constants'

const Browse = () => {
  const getNowPlayingMovies = async() =>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
     const json = await data.json();
     console.log(json);
    }
useEffect(()=>{
    getNowPlayingMovies();
},[])


  return (
    <div>
      <div className= "absolute w-48 bg-gradient-to-b from-black py-2 ml-40 z-10" > 
      <img className="" src = {Logo_URL} alt = "logo" />
    </div>
    </div>
  )
}

export default Browse
