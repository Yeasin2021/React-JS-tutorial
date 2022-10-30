import React from 'react'

const Todos = (props) => {
  return (
    <div>
        {
            props.todos.map(todo => <p>{todo}</p>)
        }
    </div>
  )
}

export default Todos