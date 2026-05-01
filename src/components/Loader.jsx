import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
    return (
        <div className='absolute right-10 '>
      <AiOutlineLoading3Quarters  color='white'  className=" animate-spin text-blue-500 " />
    </div>
    );
}

export default Loader;
