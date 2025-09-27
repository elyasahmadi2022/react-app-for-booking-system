import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useOutSideClick } from "../hooks/useClickOutSide";
export function Select({ children, id, register, onChange, disabled }) {
  return (
    <select
      disabled={disabled}
      {...register}
      onChange={onChange}
      id={id}
      className="w-full appearance-none bg-transparent font-medium placeholder:text-slate-400 text-slate-500 text-sm border border-slate-200 rounded-md pr-3 pl-12 py-[14px] transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    >
      {children}
    </select>
  );
}

export const CustomSelect = ({
  options,
  label,
  name,
  placeholder,
  ref,
  setSelected,
  selected,
  onChange,
  open,
  setOpen,
}) => {
  return (
    <div className="w-full mx-1">
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full md:px-2  lg:px-4 py-2 bg-transparent border  border-slate-300 rounded-md text-slate-500 font-medium hover:border-slate-400 transition"
        >
          {selected}
          <FaChevronDown
            className={`ml-2 transform transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Options */}
        {open && (
          <div className="absolute mt-2 w-full  border border-slate-200 rounded-md bg-white/90 z-10 animate-fadeIn">
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center lg:px-4 py-2 md:px-2 cursor-pointer hover:bg-green-500 hover:text-white rounded-md transition"
              >
                <input
                  type="radio"
                  name={name}
                  value={option}
                  checked={selected === option}
                  onChange={() => onChange(option)}
                  className="hidden"
                />
                {option}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
