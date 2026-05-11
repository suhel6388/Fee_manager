import { useState } from "react";
import {
  FiUpload,
  FiCalendar,
  FiChevronDown,
  FiSave,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import Tabs from "./Tabs";
import { useNavigate } from "react-router-dom";




export default function EditStudentCard() {
  const naviate =  useNavigate()
  
 
  const [form, setForm] = useState({
    studentName: "Mohd. Suhel",
    fatherName: "Shabana Khan",
    mobile: "9999999999",
    email: "suhel@gmail.com",
    dob: "15/08/2004",
    gender: "Male",

    address: "Near ITI Road, Gonda, Uttar Pradesh",
    course_fee:1000,
    deposit_fee:100,
    admision_fee:300,
    
  });
  const due_fee = form.course_fee-form.deposit_fee;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-[screen]  flex    ">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-5">
        
          Edit Student Details
        </h2>

        {/* Tabs */}
       <Tabs/>

        {/* Body */}
        <div className="flex gap-6">
          {/* Left – Form Fields */}
          <div className="flex-1 space-y-4">
            {/* Row 1 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  Student Name
                </label>
                <input
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  Father's Name
                </label>
                <input
                  name="fatherName"
                  value={form.fatherName}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  Mobile Number
                </label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
                />
              </div>





            </div>

            {/* Row 3 */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 pr-8"
                  />
                  <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                  Gender
                </label>
                <div className="relative">
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 appearance-none pr-8"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                  <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
                </div>
              </div>
            </div>

            {/* row 4 */}
             <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                 Course fee
                </label>
                <div className="relative">
                  <input
                    name="course_fee"
                    type="number"
                    value={form.course_fee}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 pr-8"
                  />
               
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                 Deposit Fee
                </label>
                <div className="relative">
                  <input
                    name="deposit_fee"
                    value={form.deposit_fee}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 appearance-none pr-8"
                  />
                    
                 
                </div>
              </div>
            </div>


              {/* row 5 */}
             <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                Due Fee
                </label>
                <div className="relative">
                  <input
                    name="number"
                    value={due_fee}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 pr-8"
                  />
                  
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-gray-500 mb-1">
                 Admision Fee
                </label>
                <div className="relative">
                  <input
                    name="add_fee"
                    value={form.admision_fee}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 appearance-none pr-8"
                  />
                    
                 
                </div>
              </div>
            </div>






            {/* Address */}
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Address
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                rows={2}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
              />
            </div>

            {/* Quick Summary */}
            <div className="bg-violet-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-violet-600 mb-3">
                Quick Summary
              </p>
              <div className="flex gap-8 text-sm">
                <div>
                  <p className="text-gray-400 text-xs">Registration No.</p>
                  <p className="font-bold text-gray-800">REG12345</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Join Date</p>
                  <p className="font-bold text-gray-800">01/01/2024</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Status</p>
                  <span className="inline-block mt-0.5 px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right – Photo + Fee */}
          <div className="w-44 flex flex-col gap-4 shrink-0">
            {/* Photo Card */}
            <div className="border border-gray-200 rounded-xl p-3 flex flex-col items-center gap-3">
              <p className="text-xs font-semibold text-gray-700 self-start">
                Student Photo
              </p>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Student"
                className="w-28 h-32 object-cover rounded-lg"
              />
              <button className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-xs font-medium py-2 rounded-lg transition-colors">
                <FiUpload className="text-sm" />
                Change Photo
              </button>
              <p className="text-[10px] text-gray-400">JPG, PNG up to 2MB</p>
            </div>

            {/* Fee Summary */}
            <div className="border border-gray-200 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Total Fee</span>
                <span className="text-sm font-semibold text-gray-800">
                  ₹ 12,000
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Paid Fee</span>
                <span className="text-sm font-semibold text-green-500">
                  ₹ 7,000
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Due Fee</span>
                <span className="text-sm font-semibold text-red-500">
                  ₹ 5,000
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center mt-6  border-t border-gray-100">
          <button className="flex items-center gap-2 border border-red-400 text-red-500 hover:bg-red-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors">
            <FiTrash2 />
            Delete Student
          </button>
          <div className="flex gap-3">
            <button
            onClick={() => naviate(-1)}
             className="border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium px-5 py-2 rounded-lg transition-colors">
              Cancel
            </button>
            <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition-colors">
              <FiSave />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}