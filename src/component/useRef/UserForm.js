import React from 'react'

const UserForm = () => {
const colors = {color:"red"}
  return (
    <div>
      <form>
            <h1 style={colors}>User name</h1>
            <input type="text" name="username" />
            <button type='submit' className='btn btn-primary' style={{ marginLeft:'10px' }}>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
