import React,{useRef} from 'react'

const UserForm = () => {
const colors = {color:"red"}
const userNameRef = useRef();
const handaleSubmit = (event) =>{
    event.preventDefault();
    const userName = userNameRef.current.value;
    console.log(userName);
}
  return (
    <div>
      <form onSubmit={handaleSubmit}>
            <h1 style={colors}>User name</h1>
            <input type="text" name="username" ref={userNameRef}/>
            <button type='submit' className='btn btn-primary' style={{ marginLeft:'10px' }}>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
