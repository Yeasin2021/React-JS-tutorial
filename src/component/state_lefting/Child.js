import React from 'react'

const Child = (props) => {  // data receive by props 
const ChildData = "Data Transfer From Child Component To Parent Component";
props.onChildData(ChildData);
  return (
    <div>
        <h1>I am Parent Component </h1>
        <h1>{props.data}</h1>
    </div>
  )
}

export default Child
