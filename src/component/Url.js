
import React from 'react'
import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";
import Alarm from './design/Alarm';
import CardBody from './design/bootstrap-page/CardBody';
import Header from './design/bootstrap-page/Header';
// import Header from './design/bootstrap-page/Header';
import Cards from './design/Cards';
import Hooks from './design/customHooks/Hooks';
import LargeLayoutScreen from './design/customHooks/LargeLayoutScreen';
import SmallLayoutScreen from './design/customHooks/SmallLayoutScreen';
import Slider from './design/slider/Slider';
import Error404 from './design/Error404';

import Memo from './design/Memo';
import FAQS from './design/togole/FAQS';

import Togol from './design/togole/Togol';
import Count from './design/tutorial/Count';

import Login from './login/Login';
import Conditional from './others/Conditional';
import Child from './state_lefting/Child';
import Parent from './state_lefting/Parent';
import Home from './todos/Home';
import Welcome from './Welcome';
import Data from './fetch_curd/Data';
import FormData from './fetch_curd/FormData';
import Edit from './fetch_curd/Edit';
import { useParams } from 'react-router-dom';


 const Url = () => {
  let params = useParams();
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
                <Route path='/hooks' element={<Hooks />} />
                <Route path='/hooks-2' element={<SmallLayoutScreen />} />
                <Route path='/hooks-3' element={<LargeLayoutScreen />} />
                <Route path='/cardbody' element={<CardBody />} />
                <Route path='/Count' element={<Count />} />
                <Route path='/slider' element={<Slider />} />
                
                <Route path='/data-table' element={<Data />} />
                <Route path='/form' element={<FormData />} />
                <Route path="/form-edit/:id" element={<Edit />} />
                
                {/* <Route path='/page' element={<Header />} /> */}
                <Route path='/*' element={<Error404 />} />
              
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Url;
