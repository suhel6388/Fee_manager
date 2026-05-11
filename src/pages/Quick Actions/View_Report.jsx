import React, { useState } from "react";
import {
  FiUsers,
  FiBookOpen,
  FiFileText,
  FiCalendar,
} from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

const ReportPage = () => {
  const [reportType, setReportType] = useState("Student Report");
  const [course, setCourse] = useState("All Courses");

  return (
    <div className="min-h-screen bg-[#f6f7fb] p-3 sm:p-5 md:p-8 flex items-center justify-center">
      
      <div className="w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-sm p-4 sm:p-6 md:p-8">
        
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8">
          Generate Report
        </h1>

        {/* Report Type */}
        <div className="mb-4 sm:mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Report Type
          </label>

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          >
            <option>Student Report</option>
            <option>Fee Report</option>
            <option>Expense Report</option>
          </select>
        </div>

        {/* Course */}
        <div className="mb-4 sm:mb-5">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Class / Course
          </label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          >
            <option>All Courses</option>
            <option>BCA</option>
            <option>MCA</option>
            <option>B.Tech</option>
          </select>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
          
          {/* From Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              From Date
            </label>

            <div className="relative">
              <input
                type="date"
                className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />

              <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            </div>
          </div>

          {/* To Date */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              To Date
            </label>

            <div className="relative">
              <input
                type="date"
                className="w-full h-11 sm:h-12 px-4 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />

              <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 transition-all text-white font-medium px-6 sm:px-10 py-3 rounded-xl shadow-md text-sm sm:text-base">
            Generate Report
          </button>
        </div>

        {/* Summary */}
        <div className="border border-gray-200 rounded-2xl p-4 sm:p-6">
          
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-5 sm:mb-6">
            Report Summary
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Card 1 */}
            <div className="bg-blue-50 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
              
              <div>
                <p className="text-xs sm:text-sm text-blue-500 font-medium">
                  Total Students
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
                  125
                </h3>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-blue-500 text-xl sm:text-2xl">
                <FiUsers />
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-green-50 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
              
              <div>
                <p className="text-xs sm:text-sm text-green-500 font-medium">
                  Total Courses
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
                  8
                </h3>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-green-500 text-xl sm:text-2xl">
                <FiBookOpen />
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-orange-50 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
              
              <div>
                <p className="text-xs sm:text-sm text-orange-500 font-medium">
                  Total Fees
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mt-2 flex items-center gap-1">
                  <FaRupeeSign />
                  2,45,000
                </h3>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-orange-500 text-xl sm:text-2xl">
                <FaRupeeSign />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-red-50 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
              
              <div>
                <p className="text-xs sm:text-sm text-red-500 font-medium">
                  Total Expenses
                </p>

                <h3 className="text-2xl sm:text-3xl font-bold text-red-500 mt-2 flex items-center gap-1">
                  <FaRupeeSign />
                  34,749
                </h3>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-red-500 text-xl sm:text-2xl">
                <FiFileText />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;