import { createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import { useOutSideClick } from "../hooks/useClickOutSide";
import { motion, AnimatePresence } from "framer-motion";
const MenuContext = createContext();
const buttonVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.01,
      duration: 0.125,
      stiffness: 700,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.123,
      stiffness: 700,
    },
  },
};
export default function Menu({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  return (
    <MenuContext.Provider value={{ toggle, isOpen, setIsOpen }}>
      <div className="hidden   max-sm:flex flex-col  items-center  relative w-full min-h-12">
        {children}
      </div>
    </MenuContext.Provider>
  );
}

function Button() {
  const { isOpen, toggle } = useContext(MenuContext);
  return (
    <button
      onClick={toggle}
      className="cursor-pointer absolute left-3 top-2/4 -translate-y-2/4"
    >
      {isOpen ? (
        <HiXMark size={30} color="white" />
      ) : (
        <TiThMenu size={30} color="white" />
      )}
    </button>
  );
}
function NavList({ children }) {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const close = () => setIsOpen(false);
  const ref = useOutSideClick(close);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
            ref={ref}
            className="flex min-w-2/5 flex-col absolute left-0 top-2  shadow-lg  items-center  justify-start mt-10 [&>li]:w-full [&>li]:py-2 [&>li]:text-center [&>li]:font-poppins [&>li]:font-semibold [&>li]:capitalize   [&>li]:hover:bg-orange-300  [&>li]:cursor-pointer transition-all duration-300 bg-stone-100/50 menubar"
          >
            {children}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

Menu.Button = Button;
Menu.NavList = NavList;
