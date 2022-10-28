import React from 'react'

export const Child = (props) => {  // data receive by props 
  return (
    <div>
        <h1>{props.data}</h1>
    </div>
  )
}
