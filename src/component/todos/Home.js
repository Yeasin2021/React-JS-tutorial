import React from 'react'

import NewTodo from './NewTodo';
import Todos from './Todos';

const Home = () => {
// declare todo array 
const todos = ["Item-1","Item-2"];
  return (
    <div>
        <NewTodo />
        <Todos todos={todos} />
    </div>
  )
}

export default Home
