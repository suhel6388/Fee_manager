import { useRef } from "react";
import { useState } from "react";
import {
  FiEye,
  FiSearch,
  FiFilter,
  FiChevronLeft,
  FiChevronRight,
  FiPhone,
} from "react-icons/fi";

const search_filter = [
  "All Courses",
  "B.Tech",
  "M.Tech",
  "BCA",
  "MCA",
  "MBA",
  "B.Sc",
];

const PER_PAGE = 5;

const students = [
  { roll: "2401", name: "Aarav Sharma", course: "B.Tech", phone: "9876543210" },
  { roll: "2402", name: "Priya Gupta", course: "MCA", phone: "9876543211" },
  { roll: "2403", name: "Rohit Verma", course: "MBA", phone: "9876543212" },
  { roll: "2404", name: "Sneha Singh", course: "B.Sc", phone: "9876543213" },
  { roll: "2405", name: "Karan Mishra", course: "BCA", phone: "9876543214" },
  { roll: "2406", name: "Nisha Yadav", course: "M.Tech", phone: "9876543215" },
  { roll: "2407", name: "Amit Tiwari", course: "B.Tech", phone: "9876543216" },
  { roll: "2408", name: "Pooja Joshi", course: "MBA", phone: "9876543217" },
  { roll: "2409", name: "Vikram Rao", course: "MCA", phone: "9876543218" },
  { roll: "2410", name: "Divya Patel", course: "BCA", phone: "9876543219" },
  { roll: "2411", name: "Rahul Dubey", course: "B.Sc", phone: "9876543220" },
  { roll: "2412", name: "Meera Nair", course: "M.Tech", phone: "9876543221" },
];

export default function Studentview() {
    const selectRef = useRef();
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("All Courses");
  const [page, setPage] = useState(1);

  const filtered = students.filter((s) => {
    const q = query.toLowerCase();

    const matchQ =
      s.name.toLowerCase().includes(q) ||
      s.roll.includes(q) ||
      s.phone.includes(q);

    const matchC =
      course === "All Courses" || s.course === course;

    return matchQ && matchC;
  });

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / PER_PAGE)
  );

  const paginated = filtered.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const goTo = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  const courseColor = (c) => {
    const map = {
      "B.Tech":
        "bg-blue-100 text-blue-600",
      "M.Tech":
        "bg-violet-100 text-violet-600",
      BCA:
        "bg-cyan-100 text-cyan-600",
      MCA:
        "bg-green-100 text-green-600",
      MBA:
        "bg-orange-100 text-orange-600",
      "B.Sc":
        "bg-red-100 text-red-600",
    };

    return map[c] || "bg-gray-100 text-gray-600";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-5">
      
      <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6">
        
        {/* Header */}
        <h2 className="text-lg font-bold text-gray-800 mb-5">
          Search Student
        </h2>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          
          {/* Search */}
          <div className="flex-1 flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 bg-gray-50">
            <FiSearch className="text-gray-400 text-lg" />

            <input
              type="text"
              placeholder="Search by name / roll / mobile"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              className="w-full bg-transparent outline-none text-sm text-gray-700"
            />
          </div>

          {/* Filter */}
          <div className="relative w-full sm:w-[180px]">
             <label
    htmlFor="courseSelect"
    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500  z-10"
  >
    <FiFilter />
  </label>

            <select
         id="courseSelect"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
                setPage(1);
              }}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 pr-10 bg-gray-50 outline-none text-sm text-gray-700 appearance-none"
            >
              {search_filter.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto border border-gray-200 rounded-xl">
          
          <table className="w-full min-w-[650px] text-sm">
            
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-gray-500 font-semibold">
                  Roll No.
                </th>

                <th className="px-4 py-3 text-left text-gray-500 font-semibold">
                  Student Name
                </th>

                <th className="px-4 py-3 text-left text-gray-500 font-semibold">
                  Course
                </th>

                <th className="px-4 py-3 text-left text-gray-500 font-semibold">
                  Phone
                </th>

                <th className="px-4 py-3 text-center text-gray-500 font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-8 text-gray-400"
                  >
                    No students found..
                  </td>
                </tr>
              ) : (
                paginated.map((s, i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-100 hover:bg-gray-50"
                  >
                    <td className="px-4 py-4 text-gray-700">
                      {s.roll}
                    </td>

                    <td className="px-4 py-4 font-medium text-gray-800">
                      {s.name}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${courseColor(
                          s.course
                        )}`}
                      >
                        {s.course}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-gray-700">
                      {s.phone}
                    </td>

                    <td className="px-4 py-4 text-center">
                      <button className="text-blue-500 hover:text-blue-700 text-lg">
                        <FiEye />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          
          {paginated.length === 0 ? (
            <p className="text-center text-gray-400 py-6 text-sm">
              No students found..
            </p>
          ) : (
            paginated.map((s, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50"
              >
                
                <div className="flex justify-between items-start">
                  
                  <div>
                    <h3 className="font-bold text-sm text-gray-800">
                      {s.name}
                    </h3>

                    <p className="text-xs text-gray-500 mt-1">
                      Roll: {s.roll}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold ${courseColor(
                        s.course
                      )}`}
                    >
                      {s.course}
                    </span>

                    <button className="text-blue-500 text-lg">
                      <FiEye />
                    </button>

                  </div>
                </div>

                <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm">
                  <FiPhone />
                  {s.phone}
                </div>

              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-3 mt-6">
          
          <p className="text-xs text-gray-400">
            Showing{" "}
            {filtered.length === 0
              ? 0
              : (page - 1) * PER_PAGE + 1}
            –
            {Math.min(
              page * PER_PAGE,
              filtered.length
            )}{" "}
            of {filtered.length} students
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                page === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FiChevronLeft />
            </button>

            {Array.from(
              { length: totalPages },
              (_, i) => i + 1
            ).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                className={`w-9 h-9 rounded-lg text-sm font-medium ${
                  page === p
                    ? "bg-violet-600 text-white"
                    : "border hover:bg-gray-100 text-gray-700"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center ${
                page === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:bg-gray-100"
              }`}
            >
              <FiChevronRight />
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}