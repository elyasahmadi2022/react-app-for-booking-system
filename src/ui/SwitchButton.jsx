import { useState } from "react";

export default function SwitchButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleClick() {
    setIsDarkMode(isdark => !isdark)
  }
  return (
    <button
      className={` ${isDarkMode ? 'bg-stone-950' : 'bg-stone-300'}  relative  text-stone-700 font-semibold cursor-pointer outline-none border-none p-2 rounded-2xl w-12 h-6 after:absolute after:top-2/4 ${isDarkMode && 'after:translate-x-6' } after:left-0  after:w-6 after:h-6 ${isDarkMode ?'after:bg-white': 'after:bg-stone-950'} after:rounded-2xl after:-translate-y-2/4 transition-transform shadow-sm ${isDarkMode?'shadow-white': 'shadow-stone-600'} `}
        onClick={handleClick}
    ></button>
  );
}
