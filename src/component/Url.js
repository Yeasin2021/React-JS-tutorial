
import React from 'react'
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Alarm from './design/Alarm';
// import Header from './design/bootstrap-page/Header';
import Cards from './design/Cards';
import Error404 from './design/Error404';

import Memo from './design/Memo';
import FAQS from './design/togole/FAQS';

import Togol from './design/togole/Togol';

import Login from './login/Login';
import Conditional from './others/Conditional';
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
                <Route path='/memo' element={<Memo />} />
                <Route path='/conditional' element={<Conditional />} />
                <Route path='/alarm' element={<Alarm />} />
                <Route path='/togole' element={<Togol />} />
                <Route path='/faq' element={<FAQS />} />
                {/* <Route path='/page' element={<Header />} /> */}
                <Route path='/*' element={<Error404 />} />
              
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Url;
