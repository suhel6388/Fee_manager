import React,{useState} from "react";
import Button from '../components/Button';
import { PiHandDepositDuotone, PiSailboat, PiStudent } from 'react-icons/pi';
import { FaMoneyBill } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from 'react-icons/fa6';
import { BiEditAlt, BiSolidInstitution } from 'react-icons/bi';
import { BiAnalyse } from 'react-icons/bi';
import Barchart from '../charts/Barchart';
import { FiFilter } from 'react-icons/fi';
import { useRef } from 'react';
import { PiStudentDuotone } from "react-icons/pi";
import FeesAdd from "../components/Fees_Add";
import Addstudent from "../components/Addstudent";
import Carddashboard from "../components/Carddashboard";
import { SiDepositphotos } from "react-icons/si";
import { PiHandDepositBold} from "react-icons/pi";
import { IoArrowBackCircle } from "react-icons/io5";
import {useNavigate } from "react-router-dom";
import ChartHome from "../charts/Home Chart/Chart_home";
import Piechart from "../charts/Piechart";
const Home = () => {
   
    const [open, setOpen] = useState(0);
    const navigate = useNavigate()
    
    const selectRef = useRef()
      const options = [
    { label: "Today Report", value: "today" },
    { label: "1 Week Report", value: "week" },
    { label: "1 Month Report", value: "month1" },
    { label: "2 Month Report", value: "month2" },
    { label: "4 Month Report", value: "month4" },
    { label: "6 Month Report", value: "month6" },
  ];

    return (
        <div >
        <div  className= {`w-full h-screen grid ${open === 1 && 2 ?'bg-white/0 backdrop-blur-3xl' :'bg-none' }  gap-4 text-xl grid-rows-2 grid-cols-1 place-content-center place-items-center  text-black font-semibold relative overflow-scroll `}    >
        {/* Header */}
              <div className="flex justify-between items-center absolute top-2 left-2 ">
            
                <p className="text-xl text-gray-500">Home / <span className="text-emerald-500 text-xl ">Dashboard</span></p>
              </div>
       <div className="grid grid-cols-3 grid-rows-2 gap-6">
         <Carddashboard title={'Monthly Deposit '}  amount_value={'₹ 8,000'} icon={<SiDepositphotos  />} onClick={()=>navigate("/Deposit")}    />
          <Carddashboard title={'Weekly Deposit '}  amount_value={'₹ 5,000'} icon={<SiDepositphotos  />} />
          <Carddashboard title={'Today Deposit '}  amount_value={'₹ 1,000'} icon={<PiStudentDuotone  />} />
                <Carddashboard title={'Admision Monthly '}  amount_value={' 5,000'} icon={<PiStudentDuotone  />} />
              
                  <Carddashboard title={'Admision Yearly '}  amount_value={' 5,000'} icon={<PiStudentDuotone  />} />

                    <Carddashboard title={'Total Centre '}  amount_value={' 2'} icon={<BiSolidInstitution  />} />
       </div>
          
      
           <div className="chart-section">

            <div className="this-week flex  flex-col justify-center items-center text-2xl relative">
                <ChartHome/>
           

         
              

            </div>
            
           </div>
        </div>

        </div>
    );
}

export default Home;
