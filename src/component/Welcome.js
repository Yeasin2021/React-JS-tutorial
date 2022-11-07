import React, { useState } from 'react'
import Cards from './design/Cards';

const Welcome = () => {
  const [isToggled,setToggled] = useState(false);
  return (
    <div>
      <h1>Welcome to React Js Tutorial Platform </h1>
      <button onClick={() => setToggled(!isToggled)}>Toggle</button>
      {/* cuircuit  */}
      {
        isToggled && <Cards />
      }

      {/* ternary operator */}
      {
        isToggled ? <Cards /> : <p>This value is false</p>
      }

    </div>
  )
}

export default Welcome
