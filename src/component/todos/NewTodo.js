import React,{useState} from 'react'

const NewTodo = () => {
  const [toDo,setToDo] = useState('');
  const handaleInputChange = (event) => {
        setToDo(event.target.value);
  }

  const handaleDataPush = (event) => {
        event.preventDefault();
        console.log(toDo)
  }

  return (
    // <p style={{ color:"red" }}>NewTodo</p>
    <form onSubmit={handaleDataPush}>
        <label htmlFor='input-one'>NewTodo:</label>
        <input type="text" id="todo" name="one" value={toDo} onChange={handaleInputChange}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default NewTodo