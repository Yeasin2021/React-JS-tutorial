import React from 'react'
import useCustomHooks from './useCustomHooks'


const LargeLayoutScreen = () => {
  const onSmallScreen = useCustomHooks(768);

  return (
    <div className={onSmallScreen ? 'Small' : 'Large'}>
        <h1>This device is {onSmallScreen ? 'Small' : 'Large'}</h1>
    </div>
  )
}

export default LargeLayoutScreen
