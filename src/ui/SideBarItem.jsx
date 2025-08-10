import { NavLink } from "react-router-dom";

export function SideBarItem({icon,navitem}) {
    const {path, label} = navitem;
  return <li className="">
    <NavLink to={path} className={"peer group flex items-center gap-1 py-1 font-poppins text-[14px] hover:bg-orange-300 border-b border-white hover:border-none"}>
    <span className="flex justify-center">{icon}</span>
    <span className="hidden group-hover:block">{label}</span>
    </NavLink>
  </li>;
}