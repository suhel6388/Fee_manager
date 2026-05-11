import { useState } from "react";
import { FiSearch, FiChevronDown, FiEdit } from "react-icons/fi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";


const allStudents = [
  { id: 1, name: "Mohd. Suhel", reg: "REG12345", course: "ADCA", mobile: "9999999999", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Ayesha Khan", reg: "REG12346", course: "DCA", mobile: "8888888888", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 3, name: "Rohit Kumar", reg: "REG12347", course: "Tally Prime", mobile: "7777777777", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 4, name: "Neha Sharma", reg: "REG12348", course: "ADCA", mobile: "6666666666", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 5, name: "Arman Ali", reg: "REG12349", course: "DCA", mobile: "5555555555", avatar: "https://randomuser.me/api/portraits/men/76.jpg" },
  { id: 6, name: "Priya Singh", reg: "REG12350", course: "ADCA", mobile: "4444444444", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 7, name: "Vikas Yadav", reg: "REG12351", course: "Tally Prime", mobile: "3333333333", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 8, name: "Sana Begum", reg: "REG12352", course: "DCA", mobile: "2222222222", avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { id: 9, name: "Amit Verma", reg: "REG12353", course: "ADCA", mobile: "1111111111", avatar: "https://randomuser.me/api/portraits/men/88.jpg" },
  { id: 10, name: "Pooja Gupta", reg: "REG12354", course: "DCA", mobile: "9876543210", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { id: 11, name: "Rajan Mishra", reg: "REG12355", course: "Tally Prime", mobile: "9123456780", avatar: "https://randomuser.me/api/portraits/men/60.jpg" },
  { id: 12, name: "Kajal Rao", reg: "REG12356", course: "ADCA", mobile: "9012345678", avatar: "https://randomuser.me/api/portraits/women/77.jpg" },
];


const PER_PAGE = 5;
const courses = ["All Courses", "ADCA", "DCA", "Tally Prime"];
const statuses = ["All Status", "Active", "Inactive"];

export default function SearchStudent() {
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("All Courses");
  const [status, setStatus] = useState("All Status");
  const [page, setPage] = useState(1);

  const filtered = allStudents.filter((s) => {
    const q = query.toLowerCase();
    const matchQ =
      !q ||
      s.name.toLowerCase().includes(q) ||
      s.mobile.includes(q) ||
      s.reg.toLowerCase().includes(q);
    const matchC = course === "All Courses" || s.course === course;
    return matchQ && matchC;
  });

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  return (
    <div className="h-screen ">
    <div className="h-full w-full bg-gray-100 flex items-center justify-center p-6  ">
      <div className="bg-white rounded-2xl shadow-md w-full max-w-lg p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Search Student</h2>

        {/* Search Bar */}
        <div className="flex gap-2 mb-3">
          <div className="flex-1 flex items-center border w-full border-gray-200 rounded-lg px-3 gap-2">
            <FiSearch className="text-gray-400 text-sm shrink-0" />
            <input
              value={query}
              onChange={(e) => { setQuery(e.target.value); setPage(1); }}
              placeholder="Search by name, mobile or reg. no."
              className="flex-1 text-sm py-2.5 text-gray-700 outline-none placeholder-gray-400 bg-transparent"
            />
          </div>
          <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors">
            <FiSearch />
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-5">
          {/* Course */}
          <div className="relative flex-1">
            <select
              value={course}
              onChange={(e) => { setCourse(e.target.value); setPage(1); }}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              {courses.map((c) => <option key={c}>{c}</option>)}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
          {/* Status */}
          <div className="relative flex-1">
            <select
              value={status}
              onChange={(e) => { setStatus(e.target.value); setPage(1); }}
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              {statuses.map((s) => <option key={s}>{s}</option>)}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          </div>
        </div>

        {/* Student List Header */}
        <div className="flex items-center gap-3 mb-3">
          <h3 className="text-base font-bold text-gray-800">Student List</h3>
          <span className="bg-gray-100 text-gray-500 text-xs font-medium px-3 py-1 rounded-full">
            {filtered.length} Students
          </span>
        </div>

        {/* Table */}
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          {/* Table Head */}
          <div className="grid grid-cols-[2fr_1.2fr_1.5fr_0.6fr] px-4 py-2.5 bg-white border-b border-gray-100">
            {["Name", "Course", "Mobile", "Action"].map((h) => (
              <span key={h} className="text-xs text-gray-400 font-medium">{h}</span>
            ))}
          </div>

          {/* Rows */}
          {paginated.length === 0 ? (
            <div className="text-center text-gray-400 text-sm py-8">No students found.</div>
          ) : (
            paginated.map((s, i) => (
              <div
                key={s.id}
                className={`grid grid-cols-[2fr_1.2fr_1.5fr_0.6fr] items-center px-4 py-3 border-b border-gray-50 last:border-b-0 ${
                  i === 0 ? "bg-violet-50" : "bg-white hover:bg-gray-50"
                } transition-colors`}
              >
                {/* Name + Avatar */}
                <div className="flex items-center gap-3">
                  <img
                    src={s.avatar}
                    alt={s.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 leading-tight">{s.name}</p>
                    <p className="text-xs text-gray-400">{s.reg}</p>
                  </div>
                </div>
                {/* Course */}
                <span className="text-sm text-gray-600">{s.course}</span>
                {/* Mobile */}
                <span className="text-sm text-gray-600">{s.mobile}</span>
                {/* Action */}
                <button className="text-violet-500 hover:text-violet-700 transition-colors">
                  <FiEdit className="text-lg" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-xs text-gray-400">
            Showing {filtered.length === 0 ? 0 : (page - 1) * PER_PAGE + 1} to{" "}
            {Math.min(page * PER_PAGE, filtered.length)} of {filtered.length} students
          </p>
          <div className="flex items-center gap-1">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <GrFormPrevious />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
             <button
                key={p}
                onClick={() => goTo(p)}
                 className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition ${
                  page === p
                    ? "bg-violet-600 text-white"
                    : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages || totalPages === 0}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <GrFormNext />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}