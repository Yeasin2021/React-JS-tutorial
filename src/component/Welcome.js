import React, { useState } from 'react'
import Cards from './design/Cards';

const Welcome = () => {
  const [isToggled,setToggled] = useState(false);
  return (
    <div>
      <h1>Welcome to React Js Tutorial Platform </h1>
      <button onClick={() => setToggled(!isToggled)}>Toggle</button>
      {
        isToggled && <Cards />
      }
    </div>
  )
}

export default Welcome
