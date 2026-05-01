import React from 'react';

const Button = ({
  logo,
  label,
  onClick,
  bg = 'bg-gradient-to-b from-[#330c9d] via-[#4933ec] to-[#1d20b3]',
  hover = 'hover:bg-blue-700',
  border = 'border-none',
  border_size   
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex justify-center items-center gap-2 
      ${bg} ${hover} ${border}  ${border_size}
      text-white px-5 py-2 rounded-md transition duration-300 shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)]`}
    >
      {logo}
      {label}
    </button>
  );
};

export default Button;