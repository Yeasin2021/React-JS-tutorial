import React from 'react'

export const Child = (props) => {  // data receive by props 
const data = "I am from Child ";
props.onChildData(data);
  return (
    <div>
        <h1>{props.data}</h1>
    </div>
  )
}
