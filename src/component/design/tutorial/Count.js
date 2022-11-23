import React from 'react'
import { useState, useEffect } from 'react'

const Count = () => {
const [count,setCount] = useState(0);
  return (
    <div>
      <h1>You Click {count} times</h1>
      <button className='btn btn-primary' onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}

export default Count
