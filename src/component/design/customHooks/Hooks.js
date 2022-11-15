import React from 'react'
import { useState } from 'react'

const Hooks = () => {
  const [count,setCount] = useState(0);
  return (
    <div>
        <h1>Hooks</h1>
        <button style={{ background:"aqua" }} onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Hooks
