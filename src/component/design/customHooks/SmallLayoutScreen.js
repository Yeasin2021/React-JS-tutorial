import React from 'react'
import { useState } from 'react'

const SmallLayoutScreen = () => {
  // tracking state by useState hooks
  const [onSmallScreen,setOnSmallScreen] = useState(false);
  const checkScreenSize = () =>{
    setOnSmallScreen(window.innerWidth < 768);
  }

  return (
    <div>
      <h1>This device is Small</h1>
    </div>
  )
}

export default SmallLayoutScreen
