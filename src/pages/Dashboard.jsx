import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Alter from '../pages/Alter'
import Report from '../pages/Report'
import Setting from '../pages/Setting'
import Profile from '../pages/Profile'
import AddDeposit from './button pages/Add_deposit';
  
const Dashboard = () => {



    
    return (
        <div className='flex flex-row w-full  h-fit justify-center item-center  fixed z-0 inset-0 bg-white'
     
        >
            <Sidebar/>
                     <div  className='w-full h-screen'>
                     <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/alter' element = {<Alter/>} />
        <Route path='/report' element = {<Report/>} />
        <Route path='/setting' element = {<Setting/>} />
        <Route path='/profile' element = {<Profile/>} />
        <Route path='/Deposit' element = {<AddDeposit/>} />
      </Routes>
    
            </div>
            
            
        </div>
    );
}

export default Dashboard;
