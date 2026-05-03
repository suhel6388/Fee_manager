import React from "react";
import { FaWallet, FaCalendarAlt, FaPlus } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Barchart from "../../charts/Barchart";
import Piechart from "../../charts/Piechart";





const AddDeposit = () => {
const navigate = useNavigate()
  const today = new Date().toISOString().split("T")[0]
  return (
    <div className="p-6 bg-gray-100 h-screen overflow-scroll">
    
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 ">
        <h1 className="text-xl font-semibold flex justify-center items-center gap-4"><IoArrowBackCircle color="orange" size={40} onClick={()=>navigate('/')} cursor={'pointer'} /> Monthly Deposit</h1>
        <p className="text-xl text-gray-500">Home / <span className="text-orange-500 text-xl ">Monthly Deposit</span></p>
        
      </div>

      {/* Top Cards */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-xl p-6 flex justify-between items-center shadow-md">
        
        <div>
          <p className="text-xl">Total Monthly Deposit</p>
          <h2 className="text-3xl font-bold">₹ 5,000</h2>
        </div>

        <div className="flex items-center gap-10">
          
          <div className="flex items-center gap-3">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <FaWallet />
            </div>
            <div>
              <p className="text-sm">Total Records</p>
              <h3 className="font-semibold">12</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-white text-orange-500 p-3 rounded-full">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-sm">Last Deposit</p>
              <h3 className="font-semibold">04 May 2024</h3>
            </div>
          </div>

        </div>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        
        {/* Left Section */}
        <div className="col-span-2 bg-white p-4 rounded-xl shadow h-[150vh]  ">
         
          {/* Table Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">Monthly Deposit Records</h2>
            <select className="border rounded px-2 py-1 text-sm">
              <option>This Month</option>
            </select>
          </div>
       
          {/* Table */}
          <table className="w-full text-sm">
            <thead className="text-gray-500">
              <tr className="border-b">
                <th className="text-left py-2">Date</th>
                <th className="text-left">Description</th>
                <th className="text-left">Amount (₹)</th>
                <th className="text-left">Added By</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2">04 May 2024</td>
                <td>Cash Deposit</td>
                <td>₹ 1,200</td>
                <td>Admin</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">03 May 2024</td>
                <td>Bank Transfer</td>
                <td>₹ 1,000</td>
                <td>Admin</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">02 May 2024</td>
                <td>UPI Deposit</td>
                <td>₹ 1,500</td>
                <td>Admin</td>
              </tr>
              <tr>
                <td className="py-2">01 May 2024</td>
                <td>Cash Deposit</td>
                <td>₹ 1,300</td>
                <td>Admin</td>
              </tr>
            </tbody>
          </table>
      
       
          {/* Chart Placeholder */}
          <div className="mt-6 grid grid-cols-1 grid-rows-2 relative">
            <h3 className="font-semibold ">Monthly Deposit Overview</h3>

{/* bar chart */}
            <div className="h-40  w-40 absolute top-5 mt-5 ml-10 ">
             <Barchart/>

         
          </div>

{/* pie chart */}
           <div className=" h-40 w-40   rounded  mt-28 ml-10 absolute  left-28 top-32 ">
              <Piechart/>
             </div>

            </div>

              
        </div>
      

        {/* Right Section Form */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Add New Monthly Deposit</h2>

          <div className="space-y-3">

            <input type="date" className="w-full border rounded px-3 py-2 text-sm" defaultValue={today} />

            <input type="text" placeholder="Enter Student Name " className="w-full border rounded px-3 py-2 text-sm" />
             <input type="text" placeholder="Course" className="w-full border rounded px-3 py-2 text-sm" />

            <input type="number" placeholder="Enter amount" className="w-full border rounded px-3 py-2 text-sm" />

            <select className="w-full border rounded px-3 py-2 text-sm">
              <option>Select payment method</option>
              <option>Cash</option>
              <option>UPI</option>
              <option>Bank Transfer</option>
            </select>

            <input type="text" placeholder="Enter name" className="w-full border rounded px-3 py-2 text-sm" />

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded flex items-center justify-center gap-2">
              <FaPlus /> Add Deposit
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};


export default AddDeposit;