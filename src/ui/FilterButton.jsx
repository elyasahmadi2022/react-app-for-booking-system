import { HiCheck, HiXMark } from "react-icons/hi2";

export default function FilterButton({ children, active, onClick }) {
  return (
    <button
      className={` flex items-center  box-border px-3 py-1.5 rounded-full mx-1 cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-200 text-sm md:text-lg capitalize ${active ? ' bg-orange-400 text-white': ''}`}
      onClick={() => onClick()}
    >
      {active ? <HiXMark /> : <HiCheck />}
      {children}
    </button>
  );
}
