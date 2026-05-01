import React from 'react';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Alter from './pages/Alter'
import Report from './pages/Report'
import Setting from './pages/Setting'
import Profile from './pages/Profile'

import AOS from 'aos';
import 'aos/dist/aos.css'

const App = () => {

  AOS.init();
  return (
    <div className='grid gap-2 grid-cols-2 grid-rows-1'>
      <Dashboard/>
   
    
       
     


    </div>
  );
}

export default App;
