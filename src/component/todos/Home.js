import React, { useState } from 'react'

import NewTodo from './NewTodo';
import Todos from './Todos';

// declare todo array 
const dummyTodos = ["Item-1","Item-2"];

const Home = () => {

const [todos,setTodos] = useState(dummyTodos);

const handaleTodosData = (childData) =>{
    // console.log(childData);
    setTodos([...todos,childData]);
}

  return (
    <div>
        <NewTodo onChildData={handaleTodosData} />
        <Todos todos={todos} />
    </div>
  )
}

export default Home
