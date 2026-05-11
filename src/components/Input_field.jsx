import { useState } from "react";
import { FiChevronDown, FiUser, FiMail, FiPhone, FiLock, FiSearch, FiCalendar } from "react-icons/fi";

/* ── Reusable Input Field ───────────────────────────────────────────── */
function InputField({ label, value, onChange, placeholder, type = "text", icon: Icon, required }) {
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

/* ── Reusable Select Field (original) ──────────────────────────────── */
function SelectField({ label, value, onChange, options, placeholder }) {
  return (
    <div className="mb-4">
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

