import React from 'react';
import { LuSearch } from "react-icons/lu";


const Search = ({onChange}) => {
    return (
           <div className="relative w-full max-w-sm flex justify-center gap-3 py-10">
      
      <LuSearch color='blue' className="absolute left-16 top-1/2 -translate-y-1/2 text-black" />
      
      <input
        type="text"
        onChange={onChange}
        placeholder="Search..."
        className="text-black text-sm px-8 py-1 placeholder:after:border-blue-900  outline-none bg-transparent  w-34 h-8 border-blue-800 border-b-2"
       
        
      />
      
    </div>
    )
}

export default Search;
