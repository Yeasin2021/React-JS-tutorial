import React from 'react'
import { useState, useEffect } from 'react'

const Count = () => {
const [count,setCount] = useState(0);

useEffect(()=>{
    document.title = `Click ${count} times`;
});

    // document.title = `Click ${count} times`;

  return (
    <div>
      <h1 style={{ color:"red" }}>You Click {count} times</h1>
      <button className='btn btn-primary' onClick={() => setCount(count+1)}>Click</button>
      {/* <button className='btn btn-primary' onClick={Click}>Click</button> */}
    </div>
  )
}

export default Count
