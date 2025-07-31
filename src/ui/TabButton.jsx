import { useSearchParams } from "react-router-dom";

export default function TabButton ({label, onClick}) {
    const [searchParams] = useSearchParams();
    const isSelected = searchParams.get("searchFor") === label;
  return (<button onClick={onClick} className={` box-border px-2 py-1.5 rounded-full w-2/6 mx-1 cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-200 text-sm md:text-lg capitalize ${isSelected ? ' bg-orange-400 text-white': ''}`}>{label}</button>);
}