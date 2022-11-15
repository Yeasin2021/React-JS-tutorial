import React from 'react'
import { useState } from 'react'
import CustomHooks from './CustomHooks';

const Hooks = () => {
  const [count,setCount] = useState(0);
  CustomHooks(count);

  return (
    <div>
        <h1>Hooks</h1>
        <button style={{ background:"aqua" }} onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Hooks
