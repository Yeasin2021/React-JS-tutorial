
import React from 'react'

import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Login from './login/Login';

 const Url = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Url;
