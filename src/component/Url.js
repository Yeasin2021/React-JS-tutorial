
import React from 'react'
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Cards from './design/Cards';

import Login from './login/Login';
import Child from './state_lefting/Child';
import Parent from './state_lefting/Parent';
import Home from './todos/Home';
import Welcome from './Welcome';

 const Url = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />
                <Route path='/login' element={<Login />} />
                <Route path='/child' element={<Child />} />
                <Route path='/parent' element={<Parent />} />
                <Route path='/todos' element={<Home />} />
                <Route path='/cards' element={<Cards />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Url;
