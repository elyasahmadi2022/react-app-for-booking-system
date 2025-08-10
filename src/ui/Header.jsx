import { createContext } from "react";
const HeaderContext = createContext();
export default function Header({ children, className }) {
  return (
    <HeaderContext.Provider value={{}}>
      <header className={`w-full   bg-stone-100/10 h-12 p-0 box-border ${className}`}>{children}</header>
    </HeaderContext.Provider>
  );
}
function ToolBar({ children, className }) {
  return (
    <div className={`${className} absolute right-2  lg:right-6 top-2/4 -translate-y-2/4 p-1`}>
      {children}
    </div>
  );
}
function Navs({ children }) {
  return (
    <nav
      className={`flex items-center  min-h-10 justify-around  box-border  bg-orange-400  sm:gap-1 sm:text-sm transition-all duration-100 overflow-hidden   sm:py-1 max-sm:pt-3 max-sm:ml-0 
       absolute top-2/4 left-2/4 -translate-2/4 [&>a]:text-sm sm:font-semibold  min-w-2/4 max-sm:hidden  rounded-lg`}
    >
      {children}
    </nav>
  );
}
function Logo({ children }) {
  return <div className="w-2/14 flex items-center justify-center">{children}</div>;
}

Header.Logo = Logo;
Header.ToolBar = ToolBar;
Header.Navs = Navs;
