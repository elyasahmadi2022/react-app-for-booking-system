import { HiCheck, HiXMark } from "react-icons/hi2";

export default function FilterButton({ children, active, onClick }) {
  return (
    <button
      className={` border-2 ${
        active
          ? " bg-orange-400 border-stone-100 text-stone-100 "
          : "bg-stone-100 border-orange-400 "
      } active:text-white rounded-sm font-medium text-[18px] py-1.5 px-1.5 transition-all duration-500 cursor-pointer flex items-center`}
      onClick={() => onClick()}
    >
      {active ? <HiXMark /> : <HiCheck />}
      {children}
    </button>
  );
}
