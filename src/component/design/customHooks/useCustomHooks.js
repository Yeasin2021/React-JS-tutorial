import React from 'react'
import { useState,useEffect } from 'react';
const useCustomHooks = (screenSize) => {
  // tracking state by useState hooks
  const [onSmallScreen,setOnSmallScreen] = useState(false);
  
  useEffect(()=>{
    const checkScreenSize = () =>{
        setOnSmallScreen(window.innerWidth < screenSize);
      }
    checkScreenSize();
    window.addEventListener("resize",checkScreenSize);
    return () => window.removeEventListener("resize",checkScreenSize);
  },[screenSize]);

 return onSmallScreen;

}

export default useCustomHooks
