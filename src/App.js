import React from "react";


import { Child } from "./component/state_lefting/Child";
import Url from './component/Url';

function App() {
// const data = "I am Child Component";
// const handaleChildData = (childData) =>{
//   console.log(childData);
// }

  return (
    <div className="App">
      {/* <h1>I am Parent Component </h1> */}
      {/* data pass parent to child component by props  */}
      {/* <Child data={data} onChildData={handaleChildData} /> */}
      <Url />
    </div>
  );
}

export default App;
