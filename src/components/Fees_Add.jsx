import React, { useEffect, useState } from 'react';
import { GrClose } from "react-icons/gr";
import { supabase } from '../utils/supabaseClient';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const FeesAdd = ({close}) => {
  
  const{
    register,
    handleSubmit,
    setValue,  
    formState:{ isSubmitting,errors},
    reset
  } = useForm();
  
  const [loading, setLoading] = useState(false);
const [search, setSearch] = useState("");
const [suggestions, setSuggestions] = useState([]);
  
  const handleSearch = async (e) => {
  const value = e.target.value;
  setSearch(value);

  if (!value) {
    setSuggestions([]);
    return;
  }

  const { data, error } = await supabase
    .from("register_student")
    .select("*")
    .ilike("s_name", `%${value}%`); // search by name

  if (!error) {
    setSuggestions(data);
  }
};
const handleSelect = (student) => {
  setSearch(student.s_name);

  // 🔥 Autofill using react-hook-form
  setValue("s_name", student.s_name);
  setValue("f_name", student.f_name);
  setValue("dob", student.dob);
  setValue("course", student.course);
  setValue("admision_date", student.admision_date);
  setValue("course_fee", student.course_fee);
  setValue("mob", student.mob);
  setValue("address", student.address);

  setSuggestions([]); // close dropdown
};
  
  const onSubmit = async(data)=>{
     setLoading(true);
    
    try {
      const {error} = await supabase
    .from('register_student')
    .insert([data])
    console.log(data);
    
    if (error) {
      toast.error(error.message)
      
      
    }
  else{
        toast.success("Student Registered ✅");
          reset();
      }
      
    } catch (errors) {
      toast.error("Please fill all required fields ⚠️");
      
    }
    setLoading(false);
  
  };
   const onError = () => {
      toast.error("Please fill all required fields ⚠️");
    };
    
  

    return (
       <div data-aos="flip-left" className="min-h-screen fixed inset-0 z-50 flex items-center justify-center 
          bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100">

  <div
    style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
    }}
    className="min-h-screen w-full sm:w-4/5 md:w-2/3 lg:w-1/2 flex flex-col items-center justify-center
    bg-clip-padding backdrop-filter bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-4 sm:p-5
    rounded-sm backdrop-blur-lg bg-white/10 border overflow-y-auto"
  >
    <h1 className='text-2xl sm:text-4xl font-semibold bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text mb-4'>
      Deposit Fee
    </h1>

    <Toaster position="top-right" reverseOrder={false} />

    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="relative shadow-xl p-4 sm:p-6 w-full max-w-[600px] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-white"
    >
      <GrClose onClick={close} className='absolute top-2 right-2 cursor-pointer' />

      {/* Student Name */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Student Name</label>
        <div className="bg-white text-black absolute w-full max-h-40 overflow-y-auto">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.s_name}
            </div>
          ))}
        </div>
        <input
          {...register("s_name", { required: "Name is require" })}
          value={search}
          onChange={handleSearch}
          type="text"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.s_name && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.s_name.message}</p>
        )}
        <div className="bg-white text-black absolute w-full max-h-40 overflow-y-auto z-30">
          {suggestions.map((item) => (
            <div
              key={item.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(item)}
            >
              {item.s_name}
            </div>
          ))}
        </div>
      </div>

      {/* Fees Amount */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Fee Amount*</label>
        <input
          {...register("fee_amt", { required: "Fee Amount is require" })}
          type="text"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.fee_amt && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.fee_amt.message}</p>
        )}
      </div>

      {/* Course */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Course</label>
        <input
          {...register("course", { required: "Course Name is require" })}
          type="text"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.course && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.course.message}</p>
        )}
      </div>

      {/* Date */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Date</label>
        <input
          {...register("date", { required: "Course Name is require" })}
          type="date"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.date && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.date.message}</p>
        )}
      </div>

      {/* Receipt No */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Receipt No*</label>
        <input
          {...register("receipt_no", { required: "Receipt Name is require" })}
          type="text"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.receipt_no && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.receipt_no.message}</p>
        )}
      </div>

      {/* Submit By */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Fee Amount*</label>
        <input
          {...register("submit_by", { required: "Fee Collection teacher Name is require" })}
          type="text"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.submit_by && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.submit_by.message}</p>
        )}
      </div>

      {/* Student Mob */}
      <div className="flex flex-col">
        <label className="text-base sm:text-xl mb-1 text-gray-200 rounded-3xl">Mob*</label>
        <input
          {...register("mob", { required: "Receipt Name is require" })}
          type="text"
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"
        />
        {errors.mob && (
          <p className="text-red-500 text-xs sm:text-sm">{errors.mob.message}</p>
        )}
      </div>

      {/* Button */}
      <button className="col-span-1 sm:col-span-2 mt-2 bg-blue-500/70 hover:bg-blue-600/80 transition py-2 rounded-xl backdrop-blur-md">
        Submit
      </button>

    </form>
  </div>
</div>
    )
}

export default FeesAdd;
