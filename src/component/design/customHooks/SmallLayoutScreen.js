import React from 'react'
import useCustomHooks from './useCustomHooks'


const SmallLayoutScreen = () => {
  const onSmallScreen = useCustomHooks(600);

  return (
    <div>
      <h1>This device is {onSmallScreen ? 'Small' : 'Large'}</h1>
    </div>
  )
}

export default SmallLayoutScreen
