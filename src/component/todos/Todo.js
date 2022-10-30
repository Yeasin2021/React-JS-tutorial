import React from 'react'

const Todo = (props) => {
  return (
    <div>{<p>{props.todo}</p>}-{props.key}</div>
  )
}

export default Todo