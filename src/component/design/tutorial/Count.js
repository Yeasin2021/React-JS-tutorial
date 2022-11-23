import React from 'react'
import { useState, useEffect } from 'react'

const Count = () => {
const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Count</h1>
      <button className='btn btn-primary'>Click</button>
    </div>
  )
}

export default Count
