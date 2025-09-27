import { CgChevronRight } from "react-icons/cg";
import { TiHomeOutline } from "react-icons/ti";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Breadcrumb6 = () => {
  const location = useLocation()
  const paths = location.pathname.split('/').filter((x) => x)
  return (
    <ul className="flex  items-center *:transition-all *:duration-100">
      <li className="flex items-center">
        <NavLink to={`/${paths[0]}/`} className="flex capitalize items-center text-base font-medium hover:text-slate-600 text-slate-700 dark:hover:text-primary text-dark">
          <span className="pr-2">
            <TiHomeOutline className=" w-4 text-slate-700 " />
          </span>
          {paths[0]}
        </NavLink>
        <span className="px-1">
          <CgChevronRight size={22} className=" text-slate-700" />
        </span>
      </li>
     {paths.slice(1, paths.length).map((path, index) => {
        const routeTo = "/"+paths.slice(0, index+1).join("/")
        const isLast = index === paths.length - 1
      return  <li className="flex items-center" key={index}>
        {isLast ? <NavLink className="text-base capitalize font-medium text-slate-700 hover:text-slate-600">
          {path}
        </NavLink>: <span className=" cursor-pointer hover:text-slate-500 text-slate-700 font-medium capitalize">{path}</span>}
        {isLast &&<span className="px-1">
          <CgChevronRight size={22} className=" text-slate-700" />
        </span>}
      </li>
     })}
     
    </ul>
  );
};

export default Breadcrumb6;
