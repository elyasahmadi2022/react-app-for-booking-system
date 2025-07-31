import { createContext, useContext, useEffect, useState } from "react";
import Menu from "./Menu";
const HeaderContext = createContext();
export default function Header({ children }) {
  const [isScrolled,setIsScrolled] = useState(false);
  useEffect(function(){
    function handleScroll(){
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  },[isScrolled])
  return (
    <HeaderContext.Provider value={{isScrolled}}>
      <header className="lg:w-full relative">{children}</header>
    </HeaderContext.Provider>
  );
}
function Contacts({ children }) {
  const {isScrolled} = useContext(HeaderContext)
  return (
    <div className={` bg-stone-900 text-slate-100 h-12 hidden justify-between transition-all duration-100  sm:hidden md:hidden lg:flex ${isScrolled ? 'hidden' : ''}`}>
      {children}
    </div>
  );
}
function Navs({ children }) {
  const {isScrolled} = useContext(HeaderContext)
  return  <nav
      className={`flex items-center justify-around bg-orange-400  sm:gap-1 sm:text-sm transition-all duration-100   sm:py-1 max-sm:pt-3 max-sm:ml-0 z-50 ${isScrolled ? 'fixed top-0 left-0 right-0 ': ''}`}
    >
      {children}
    </nav>;
}
Header.Contacts = Contacts;
Header.Navs = Navs;
