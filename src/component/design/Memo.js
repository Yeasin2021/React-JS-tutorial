import React, { useState } from 'react'
import MemoChild from './MemoChild';

const Memo = () => {
const [count,setCount] = useState(0);
console.log("Render")
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=> { setCount(count => count+1) }}>Click</button>
      <MemoChild />
    </div>
  )
}

export default Memo
