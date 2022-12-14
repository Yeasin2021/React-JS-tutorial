
import { useState } from 'react';
import Cards from '../design/Cards';


const Conditional = () => {
    const [isToggled,setToggled] = useState(false);
    // variable element tecnique
    let element;
    if(isToggled){
      element = <Cards />
    }else{
      element = <p>This is false value </p>
    }
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
  
        {element}
  
      </div>
    )
}

export default Conditional
