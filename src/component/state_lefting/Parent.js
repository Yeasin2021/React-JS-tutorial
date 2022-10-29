import React from 'react'

import Child from './Child';

const Parent = () => {

    const data = "Data Transfer From  Parent Component To Child Component";
    const handaleChildData = (childData) =>{
    console.log(childData);
    }

  return (
    <div>
      <h1>I am Parent Component </h1>
      <Child data={data} onChildData={handaleChildData} />
    </div>
  )
}

export default Parent
