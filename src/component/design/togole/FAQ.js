import React from 'react'

const FAQ = ({id,title,description}) => {
  return (
    <article>
      <div>
        <h1>{title}</h1>
        <button>+</button>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default FAQ
