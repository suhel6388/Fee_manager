
import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { supabase } from '../utils/supabaseClient';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Loader from './Loader';


const Addstudent = ({close}) => {
  const today = new Date().toISOString().split("T")[0]


  const [amount, setAmount] = useState("");

const handleChange_amt = (e) => {
 const value = e.target.value.replace(/[^0-9]/g, "");
    setAmount(value);    
};
const{
  register,
  watch,
  handleSubmit,
  formState:{ isSubmitting,errors},
  reset,
  setValue
} = useForm();


   const course_fee  = watch("course_fee")
  const deppsit_fee  = watch("deposit_fee")
  const due = course_fee - deppsit_fee;



  

const [loading, setLoading] = useState(false);



const onSubmit = async(data)=>{
   setLoading(true);
  
  try {
    const {error} = await supabase
  .from('register_student')
  .insert([data])
  console.log(data);
  
  if (error) {
    toast.error(error.message,{
      style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
    })

    
  }
else{
      toast.success("Student Registered ");
        reset();
    }
    
  } catch (errors) {
    toast.error("Please fill all required fields ");
    
  }
  setLoading(false);

};
 const onError = () => {
    toast.error("Please fill all required fields ⚠️");
  };

    return (
       <div data-aos = 'zoom-in'  className="min-h-screen fixed inset-0 z-50 flex items-center justify-center 
       pt-56
         backdrop-blur-3xl overflow-y-scroll ">
          <div p className='absolute bottom-20% left-2'> <Toaster position="bottom-left"  /></div>

       <div 
         style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244, 114, 182, 0.25), transparent 70%), #000000",
      }}
         className=" min-h-screen w-1/2  grid grid-rows-1 grid-cols-1 items-center justify-items-center
         bg-clip-padding backdrop-filter   bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 py-10
          rounded-sm backdrop-blur-lg bg-white/10 border 
          gap-10 pt-36
        
         ">
           <h1 className='text-4xl font-semibold bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-teal-500 via-purple-500 to-red-500 text-transparent bg-clip-text h-fit'>Registtration Form</h1>
   


    
    
          <form 
onSubmit={handleSubmit(onSubmit, onError)}
          



          
          
          
         
      className="  shadow-xl  p-6 w-full grid grid-cols-2 gap-5 text-white ">
 <GrClose cursor={'pointer'} onClick={(e) => {
    e.preventDefault();   // 🔥 IMPORTANT
    close();}}
  className='absolute top-2 right-2'/>
        {/* Student Name */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Student Name</label>
          <input 
          
          
          {...register("s_name", {required:"Name is require"})}
          type="text" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
           {errors.s_name && (
        <p className="text-red-500">{errors.s_name.message}</p>
      )}
        </div>

        {/* Father Name */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Father Name</label>
          <input
          
           {...register("f_name", {required:"Father Name is require"})}

           type="text" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
             {errors.f_name && (
        <p className="text-red-500">{errors.f_name.message}</p>
      )}
        </div>

        {/* DOB */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">DOB</label>
          <input 
             {...register("dob", {required:"DOB is require"})}
          type="date" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2"

           />
             {errors.dob && (
        <p className="text-red-500">{errors.dob.message}</p>
      )}
        </div>

         {/* gender */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Select Gender</label>
          


<div className='flex gap-0  '>
      {["Male", "Female", "Other"].map((item) => (
        <label key={item} className="flex items-center gap-1 justify-center text-gray-400 px-2 rounded-md outline-none bg-transparent ">
          <input
          className='w-4 h-4 gap-2'
            type="checkbox"
            value={item}
            {...register("gender", { required: "Please select gender" })}
          />
          {item}
        </label>

      ))}
      </div>
             {errors.gender && (
        <p className="text-red-500">{errors.gender.message}</p>
      )}

        </div>

        {/* Course */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Course</label>
          <input
             {...register("course", {required:"Course Name is require"})}
           type="text" 
           list='courseList'
           className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
            <datalist id="courseList">
    <option value="ADCA"/>
    <option value="DFCA"/>
    <option value="DCA"/>
    <option value="TALLY PRIME"/>
    <option value="DTP"/>
    <option value="EXCEL"/>
    <option value="EXCEL+WORD"/>
    <option value="MS OFFICE"/>
    <option value="PYTHON"/>
    <option value="WEB DESIGN"/>
  </datalist>
             {errors.course && (
        <p className="text-red-500">{errors.course.message}</p>
      )}
        </div>
          {/* Admision fee */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Admision Fee</label>
          <input
     
             {...register("add_fee", {required:"Addmision fees is require"})}
                   
  onChange={(e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setAmount(val);
    setValue("add_fee", val);

  }}
           type="text" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
             {errors.course && (
        <p className="text-red-500">{errors.course.message}</p>
      )}

        </div>

        {/* Admission Date */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Admission Date</label>
          <input  
          
            
           {...register("admision_date", {required:"Admision fee is require"})}
          type="date" 
           defaultValue={today}
          className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
            {errors.admision_date && (
        <p className="text-red-500">{errors.admision_date.message}</p>
      )}
        </div>

        {/* course Fee */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Course Fee</label>
          <input 
          
           {...register("course_fee", {required:"Course fee is require"})}
          type="number" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
        </div>
          {/*deposit Amount*/}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Deposit Fee Amount</label>
          <input 
          
           {...register("deposit_fee", {required:"Deposit fee is require"})}
          type="number" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
        </div>



         {/* due Fee */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Due Fee</label>
          <input 
          readOnly
          
           {...register("due_fee", {required:"Due fee is require"})}
           value={due}
          type="number" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
          
        </div>

         {/* mob Fee */}
        <div className="flex flex-col">
          <label className="text-xl mb-1 text-gray-200">Mob Number </label>
          <input
          {...register("mob", {required:"Mobile number is require"})}
           type="number" className="glass-input text-gray-400 px-5 py-1 rounded-md outline-none bg-transparent border-2" />
             {errors.mob && (
        <p className="text-red-500">{errors.mob.message}</p>
      )}
        </div>

           {/* Address (Full Width) */}
        <div className="flex flex-col col-span-2">
          <label className="text-xl mb-1 text-gray-200">Address</label>
          <textarea
               {...register("address", {required:"Address is require"})}
           rows="3" className="glass-input text-gray-400 px-5 py-2 rounded-md outline-none bg-transparent border-2 resize-none"></textarea>
             {errors.address && (
        <p className="text-red-500">{errors.address.message}</p>
      )}
        </div>

        

        {/* Submit Button */}
        <button
        type='submit'
        disabled={loading === true}
        
        className="flex justify-center items-center col-span-2 mt-3 bg-blue-500/70 hover:bg-blue-600/80 transition py-2 rounded-xl backdrop-blur-md relative">
          
          Submit  <span className='flex justify-center items-center ' > {loading === true && <Loader/>}</span>
        </button>
          

      </form>
    



                </div>
      
    </div>
    
    );
}

export default Addstudent;
