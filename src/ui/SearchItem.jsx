import { TbReportSearch } from "react-icons/tb";
export default function SearchItem({ children }) {
  return (
    <div className="py-3 cursor-pointer hover:bg-orange-100 flex items-center  gap-3 pl-4">
      <TbReportSearch size={30} /> {children}
    </div>
  );
}
