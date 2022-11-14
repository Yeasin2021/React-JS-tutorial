import React from 'react'
import { useState } from 'react'

const FAQ = ({id,title,description}) => {
  const [toggle,setToggle] = useState(false);
  return (
    <article>
      <div>
        <h1>{title}</h1>
        <button onClick={() => {setToggle(!toggle)}}>{toggle ? '+':'-'}</button>
        {toggle && <p>{description}</p>}
      </div>
    </article>
  )
}

export default FAQ
