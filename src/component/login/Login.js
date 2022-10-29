import React from 'react'

import './login.css';


 const Login = () => {
  return (
    <>
        <div className='body'>
                <center>
                <div className="form">
                    <form>
                        <h1>Login</h1>
                        <input type="text" placeholder="Mail" />
                        <input type="text" placeholder="Password" />
                        <input type="submit" />
                        <p>Or</p>
                        <div class="signin">
                            <p>Please<a href="#">Sing Up</a></p>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    </>
  )
}

export default Login;
