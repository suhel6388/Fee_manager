import React from 'react';

const Carddashboard =  ({ title, amount_value, icon, onClick}) => {
  return (
    <div onClick={onClick} className={` p-5 rounded-md shadow-md text-white bg-gradient-to-r from-[#f59e0b]  to-[#f59e0b] flex gap-5 justify-between items-center cursor-pointer `}>
      
      {/* Left Content */}
      <div className='flex-col justify-center items-center w-full'>
        <h2 className="text-xl font-bold">
          {title}
        </h2>
        <p className="text-xl opacity-90 ">{amount_value}</p>
      </div>

      {/* Icon */}
      <div className="bg-white/20 p-3 rounded-full text-2xl">
        {icon}
      </div>
    </div>
  );
};

export default Carddashboard;

