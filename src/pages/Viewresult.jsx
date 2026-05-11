import { useState, useRef } from "react";
import {
  FiChevronDown,
  FiUploadCloud,
  FiCheckCircle,
  FiXCircle,
  FiFileText,
  FiX,
} from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";


const CLASSES = [
  "Class 10 - Science",
  "Class 11 - Commerce",
  "Class 12 - Arts",
  "B.Tech - CSE",
];
const EXAMS = ["Half Yearly Exam", "Annual Exam", "Unit Test 1", "Unit Test 2"];
const SESSIONS = ["2022-23", "2023-24", "2024-25", "2025-26"];

const PREVIEW_DATA = [
  { roll: 101, name: "Rohit Kumar", sub1: 78, sub2: 85, total: 163, result: "Pass" },
  { roll: 102, name: "Neha Sharma", sub1: 88, sub2: 92, total: 180, result: "Pass" },
  { roll: 103, name: "Arjun Mehta", sub1: 45, sub2: 38, total: 83,  result: "Fail" },
];
/* ── Reusable Input Field ───────────────────────────────────────────── */
function InputField({ label, value, onChange, placeholder, type = "text", icon: Icon, required, name }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-teal-700 mb-1.5">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            className={`absolute left-3.5 top-1/2 -translate-y-1/2 text-base pointer-events-none transition-colors duration-200
              ${focused ? "text-teal-500" : "text-teal-300"}`}
          />
        )}
        <input
          type={type}
          value={value}
          name= {name}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`w-full bg-teal-50/40 border border-teal-200 rounded-xl py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all
            ${Icon ? "pl-9 pr-3.5" : "px-3.5"}`}
        />
      </div>
    </div>
  );
}
/* ── Reusable Select Field ───────────────────────────────────────────── */
function SelectField({ label, value, onChange, options, placeholder }) {
  return (
    <div className="mb-4 ">
      <label className="block text-[11px] font-semibold uppercase tracking-widest text-teal-700 mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-teal-50/40 border border-teal-200 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 cursor-pointer outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-teal-500 pointer-events-none text-base" />
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────────────────── */
export default function UploadResult() {
  const [classVal, setClassVal] = useState("");
  const [exam,     setExam]     = useState("");
  const [session,  setSession]  = useState("2023-24");
  const [file,     setFile]     = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [toast,    setToast]    = useState(null);
  const fileRef = useRef();

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleFile = (f) => {
    if (!f) return;
    if (!f.name.match(/\.(csv|xlsx|xls|pdf)$/i)) {
      showToast("Only Excel, CSV or PDF files are allowed.", "error");
      return;
    }
    if (f.size > 10 * 1024 * 1024) {
      showToast("File size must be under 10MB.", "error");
      return;
    }
    setFile(f);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleUpload = () => {
    if (!classVal || !exam) {
      showToast("Please select class and exam.", "error");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showToast("Results uploaded successfully!", "success");
    }, 1600);
  };

  const handleCancel = () => {
    setClassVal("");
    setExam("");
    setSession("2023-24");
    setFile(null);
    setToast(null);
  };

  return (
    <div className=" min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 flex items-center justify-center px-10 py-40 h-screen fixed w-full overflow-y-auto ml-10">
      <div className="w-full max-w-[520px] bg-white rounded-2xl shadow-xl shadow-teal-100/60 border border-teal-100 px-8 py-7 mt-[32rem]">

        {/* Header */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-700 flex items-center justify-center text-white text-xl shadow-md shadow-teal-200">
            <HiOutlineAcademicCap />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">
            Upload Result
          </h1>
        </div>

        {/* Dropdowns */}
        <SelectField
          label="Class / Course"
          value={classVal}
          onChange={setClassVal}
          options={CLASSES}
          placeholder="Select class / course"
        />

        <SelectField
          label="Course Duration"
          value={exam}
          onChange={setExam}
          options={EXAMS}
          placeholder="Course Duration"
        />
        <InputField
          label="Year / Session (Ex-2026 0r 2025-26)"
          value={session}
          onChange={setSession}
          options={SESSIONS}
          placeholder="Select session"
        />
        <InputField 
        label='Student Name'
        placeholder={'Enter Student Name'}
        name={'student_name'}
        />
         <InputField 
        label='Father Name'
        placeholder={'Enter Father Name'}
        name={'father_name'}
        />
         <InputField 
        label='Total marks'
        placeholder={'Enter Total marks'}
        name={'total_mark'}
        />

          <InputField 
        label='Obtain marks'
        placeholder={'Enter Obtain marks'}
        name={'obtain_mark'}
        />

                  <InputField 
        label='Grade'
        placeholder={'Enter Grade'}
        name={'grade'}
        />




        {/* Drop Zone */}
        <div className="mb-5">
          <label className="block text-[11px] font-semibold uppercase tracking-widest text-teal-700 mb-1.5">
            Upload Result File
          </label>
          <div
            onClick={() => fileRef.current.click()}
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-all duration-200
              ${dragging
                ? "border-teal-500 bg-teal-50"
                : "border-teal-200 bg-teal-50/30 hover:bg-teal-50 hover:border-teal-400"
              }`}
          >
            <input
              ref={fileRef}
              type="file"
              accept=".xlsx,.csv,.pdf"
              className="hidden"
              onChange={(e) => handleFile(e.target.files[0])}
            />
            <FiUploadCloud className="text-4xl text-teal-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-1">
              <span className="text-teal-600 font-semibold">Click to upload</span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-400">Excel, CSV or PDF up to 10MB</p>

            {file && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="mt-3 flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-lg px-3 py-2 text-sm text-teal-700 font-medium"
              >
                <FiFileText className="shrink-0" />
                <span className="flex-1 truncate text-left">{file.name}</span>
                <FiX
                  className="shrink-0 opacity-60 hover:opacity-100 cursor-pointer transition-opacity"
                  onClick={() => setFile(null)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Result Preview */}

        
        <p className="text-sm font-semibold text-gray-800 mb-2">Result Preview</p>
        <div className="rounded-xl border border-teal-100 overflow-hidden mb-6">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-teal-50">
                {["Roll No.", "Student Name", "Sub 1", "Sub 2", "Total", "Result"].map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2.5 text-left font-semibold text-teal-700 uppercase tracking-wide border-b border-teal-100 text-[11px]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PREVIEW_DATA.map((row, i) => (
                <tr
                  key={row.roll}
                  className={i % 2 === 1 ? "bg-gray-50/60" : "bg-white"}
                >
                  <td className="px-3 py-2.5 text-gray-700 border-b border-gray-100">{row.roll}</td>
                  <td className="px-3 py-2.5 text-gray-800 font-medium border-b border-gray-100">{row.name}</td>
                  <td className="px-3 py-2.5 text-gray-700 border-b border-gray-100">{row.sub1}</td>
                  <td className="px-3 py-2.5 text-gray-700 border-b border-gray-100">{row.sub2}</td>
                  <td className="px-3 py-2.5 text-gray-700 font-semibold border-b border-gray-100">{row.total}</td>
                  <td className="px-3 py-2.5 border-b border-gray-100">
                    {row.result === "Pass" ? (
                      <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        <FiCheckCircle className="text-xs" />
                        Pass
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                        <FiXCircle className="text-xs" />
                        Fail
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={handleCancel}
            className="py-2.5 rounded-xl border border-teal-200 bg-white text-teal-700 text-sm font-semibold hover:bg-teal-50 active:scale-95 transition-all duration-150"
          >
            Cancel
          </button>
          <button
            onClick={handleUpload}
            disabled={loading}
            className={`py-2.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-150 active:scale-95
              ${loading
                ? "bg-emerald-700 cursor-not-allowed"
                : "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 shadow-md shadow-teal-200"
              }`}
          >
            <FiUploadCloud className="text-base" />
            {loading ? "Uploading..." : "Upload Result"}
          </button>
        </div>

        {/* Toast Notification */}
        {toast && (
          <div
            className={`mt-4 flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-all
              ${toast.type === "success"
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : "bg-red-50 text-red-600 border-red-200"
              }`}
          >
            {toast.type === "success"
              ? <FiCheckCircle className="text-base shrink-0" />
              : <FiXCircle className="text-base shrink-0" />
            }
            {toast.msg}
          </div>



        )}
      </div>
    </div>
  );
}