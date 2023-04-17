import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home/Home';
import Signup from '../pages/Signup/Signup';



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="home" />} /> 
        <Route path='home' element={<Home />} />
        <Route path='signup' element={<Signup />} />
    </Routes>
  )
}

export default Routers