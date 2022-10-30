import React,{useState} from 'react'

const NewTodo = () => {
//   const [toDo,setToDo] = useState('');
  return (
    // <p style={{ color:"red" }}>NewTodo</p>
    <form>
        <label htmlFor='input-one'>
            <input type="text" id="todo" name="one" />
        </label>
    </form>
  )
}

export default NewTodo