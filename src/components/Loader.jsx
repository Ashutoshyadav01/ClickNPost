// Loader.jsx

import React from 'react'
import SplashClickNPost from "../assets/SplashClickNPost.png"
import "./Loader.css"
const Loader = () => {
  return (
    <div className='loader'>
      <img src={SplashClickNPost} alt="logo" width="250" />
    </div>
  )
}

export default Loader