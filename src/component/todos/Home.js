import React from 'react'
import Todos from './Todos';

const Home = () => {
// declare todo array 
const todos = ["Item-1","Item-2"];
  return (
    <div>
        <Todos todos={todos} />
    </div>
  )
}

export default Home
