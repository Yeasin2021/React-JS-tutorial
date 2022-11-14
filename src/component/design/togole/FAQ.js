import React from 'react'
import { useState } from 'react'

const FAQ = ({id,title,description}) => {
  const [toggle,setToggle] = useState(false);
  return (
    // <article>
    //   <div>
    //     <h1>{title}</h1>
    //     <button onClick={() => {setToggle(!toggle)}}>{toggle ? '+':'-'}</button>
    //     {toggle && <p>{description}</p>}
    //   </div>
    // </article>
    <div className='container'>
       <h1>Frequently Asked Questions</h1>
        <details>
            <summary>How do I create accordion?</summary>
            <button onClick={() => {setToggle(!toggle)}}>{toggle ? '+':'-'}</button>
            <div>
            {toggle && <p>{description}</p>}
            </div>
        </details>
    </div>
  )
}

export default FAQ
