import { HiCheck, HiXMark } from "react-icons/hi2";

export default function FilterButton({ children, active, onClick }) {
  return (
    <button
      className={`flex items-center  box-border p-1  cursor-pointer hover:bg-orange-300 hover:text-white transition-all duration-300 text-sm md:text-lg capitalize ${active ? ' bg-orange-300 text-white': ''}`}
      onClick={() => onClick()}
    >
      {active ? <HiXMark /> : <HiCheck />}
      {children}
    </button>
  );
}
