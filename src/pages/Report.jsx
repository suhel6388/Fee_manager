import React from 'react';
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

const Report = () => {
    const navigate = useNavigate()
    return (
  <div className=' w-full h-screen flex text-xl justify-center items-center text-yellow-200' >
             <div data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="500" className="btns  grid gap-4 grid-cols-2 grid-rows-1">
            <Button logo={<FaMoneyBillTrendUp size={25}/>}    label={ 'Add Fees'} border='border-gray-600' border_size={'border-2'} onClick={() => setOpen(open+1)} />
             <Button logo={< PiStudent color='white' size={25} />} onClick={()=> setOpen(open+2)}  label={'Add Student'}/>
            <Button logo={<BiEditAlt size={25}/>} label={'Alter'} bg={'bg-transparent'} border='border-red-600' border_size={'border-2'} />
            
         <Button logo={<BiAnalyse/> } label={'Analysis'} />

         {open === 1 && <FeesAdd close={()=> setOpen(0)} />}
          {open === 2 && <Addstudent close={()=> setOpen(0)} />}
           </div>
        </div>
    );
}

export default Report;
