import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Signup from '../pages/Signup/Signup';
import Services from '../pages/services/Services';
import SingleServices from '../pages/services/SingleServices';



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="home" />} /> 
        <Route path='home' element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/services'>
          <Route index element={<Services/>}/>
          <Route path=':id' element={<SingleServices/>}/>
        </Route>
    </Routes>
  )
}

export default Routers