import { createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import Logo from "./Logo";
const MenuContext = createContext();

export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  return (
    <MenuContext.Provider value={{ toggle, isOpen }}>
      <div className="hidden  max-sm:flex flex-col  items-center z-50  relative w-full min-h-12">
        <Logo className={'absolute left-1 -top-1.5'} />
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function Button() {
  const { isOpen, toggle } = useContext(MenuContext);
  return (
    <button onClick={toggle} className="cursor-pointer absolute right-3 top-0.5">
      {isOpen ? <HiXMark size={30} /> : <TiThMenu size={30} />}
    </button>
  );
}
function NavList({ children }) {
  const { isOpen } = useContext(MenuContext);
  return (
    <>
      {isOpen && (
        <ul className="flex min-w-full flex-col  items-center justify-start mt-10 [&>li]:w-full [&>li]:py-2 [&>li]:text-center [&>li]:font-poppins [&>li]:font-semibold [&>li]:capitalize [&>li]:hover:bg-orange-500/80  [&>li]:cursor-pointer border-t-2 border-stone-800">
          {children}
        </ul>
      )}
    </>
  );
}

Menu.Button = Button;
Menu.NavList = NavList;
