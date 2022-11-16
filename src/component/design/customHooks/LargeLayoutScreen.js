import React from 'react'
import { useState,useEffect } from 'react';

const LargeLayoutScreen = () => {
    const [onSmallScreen,setOnSmallScreen] = useState(false);
    const checkScreenSize = () =>{
      setOnSmallScreen(window.innerWidth < 768);
    }
    useEffect(()=>{
      checkScreenSize();
      window.addEventListener("resize",checkScreenSize);
      return () => window.removeEventListener("resize",checkScreenSize);
    },[])

  return (
    <div className={onSmallScreen ? 'Small' : 'Large'}>
        <h1>This device is {onSmallScreen ? 'Small' : 'Large'}</h1>
    </div>
  )
}

export default LargeLayoutScreen
