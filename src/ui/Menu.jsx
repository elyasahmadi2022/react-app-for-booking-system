import { createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
const MenuContext = createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  return (
    <MenuContext.Provider value={{ toggle, isOpen }}>
      <div className="  hidden max-sm:flex flex-col max-sm:w-full  items-center relative top-0 min-h-8">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function Button() {
  const { isOpen, toggle } = useContext(MenuContext);
  return (
    <button onClick={toggle} className="absolute right-2 top-1 cursor-pointer">
      {isOpen ? <HiXMark size={30} /> : <TiThMenu size={30} />}
    </button>
  );
}
function NavList({ children }) {
  const { isOpen } = useContext(MenuContext);
  return (
    <ul className="flex max-sm:min-w-2xl overflow-hidden flex-col items-center mt-10 [&>li]:w-full [&>li]:py-2 [&>li]:text-center [&>li]:font-poppins [&>li]:font-semibold [&>li]:capitalize [&>li]:hover:bg-orange-500/80  [&>li]:cursor-pointer">
      {isOpen && children}
    </ul>
  );
}

Menu.Button = Button;
Menu.NavList = NavList;
