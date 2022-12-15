import React,{useRef} from 'react'

const UserForm = () => {
const colors = {color:"red"}
const userName = useRef();
  return (
    <div>
      <form>
            <h1 style={colors}>User name</h1>
            <input type="text" name="username" ref={userName}/>
            <button type='submit' className='btn btn-primary' style={{ marginLeft:'10px' }}>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
