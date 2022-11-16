import React from 'react'
import { useState,useEffect } from 'react'

const SmallLayoutScreen = () => {
  // tracking state by useState hooks
  const [onSmallScreen,setOnSmallScreen] = useState(false);
  const checkScreenSize = () =>{
    setOnSmallScreen(window.innerWidth < 768);
  }
  useEffect(()=>{
    checkScreenSize();
    window.addEventListener("resize",checkScreenSize);
    // return () => window.removeEventListener("resize",checkScreenSize);
  },[])

  return (
    <div>
      <h1>This device is {onSmallScreen ? 'Small' : 'Large'}</h1>
    </div>
  )
}

export default SmallLayoutScreen
