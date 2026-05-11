import React, { useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Addstudent from '../Addstudent';
const Card = ({icon, icon_bg, title, desc, onClick}) => {


    return (
         <div
            onClick={onClick}
                    
                    className="bg-[#e7e7f0] rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer border border-[#FFA500]"
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full ${icon_bg}`}
                    >
                      {icon}
                    </div>
        
                    {/* Text */}
                    <h3 className="mt-3 font-medium text-gray-800 text-sm">
                      {title}
                    </h3>
                   
        
                    {/* Arrow */}
                    <div className="flex justify-between mt-3 gap-5 text-orange-400">
                         <p className="text-xs text-gray-500 mt-1 ">{desc}</p>
                      <IoIosArrowDroprightCircle size={30}  />
                    </div>
                   
                  </div>
    );
}

export default Card;
