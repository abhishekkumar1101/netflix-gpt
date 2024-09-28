import React from 'react'
import { Logo_URL } from '../utils/constants';

const Header = () => {
  return (
    <div className= "absolute w-56 bg-gradient-to-b from-black py-2 ml-40 z-10" > 
      <img className="" src = {Logo_URL} alt = "logo" />
    </div>
  )
}

export default Header;
