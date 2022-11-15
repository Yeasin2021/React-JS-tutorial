import React from 'react'
import { useState } from 'react'

const Hooks = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
        <h1>Hooks</h1>
        <button>Click</button>
    </div>
  )
}

export default Hooks
