import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutSideClick } from "../hooks/useClickOutSide";
import { AnimatePresence, motion } from "framer-motion";

const MenusContext = createContext();

function useMenus() {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error("useMenus must be used within a MenusProvider");
  }
  return context;
}

export default function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ open, close, openId }}>
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-end ${className}`}>
      {children}
    </div>
  );
}

function Toggle({ id }) {
  const { openId, open, close } = useMenus();

  const handleClick = (e) => {
    e.stopPropagation();
    openId === "" || openId !== id ? open(id) : close();
  };

  return (
    <button
      onClick={handleClick}
      className="bg-none border-none p-1 absolute top-2/4 left-4 -translate-x-2/4 transition-all duration-200 hover:bg-gray-100 transform  rounded-sm"
    >
      <HiEllipsisVertical className="w-6 h-6 text-gray-700" />
    </button>
  );
}

function List({ children, id, className = "", parent }) {
  const containerParent = document.querySelector(`.${parent}`) || document.body
  const { openId, close } = useMenus();
  const ref = useOutSideClick(close);

  return createPortal(
    <AnimatePresence>
      {openId === id && (
        <motion.ul
          initial={{opacity: 0, x: 10}}
          animate={{opacity: 1, x:0}}
          transition={{duration: 0.123, stiffness: 1000}}
          exit={{opacity:0, x:-10}}
          ref={ref}
          className={` absolute left-2/4 -translate-x-2/4 bottom-2/12  bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50 min-w-[150px] ${className}`}
        >
          {children}
        </motion.ul>
      )}
    </AnimatePresence>,
    containerParent
  );
}

function Button({ children, icon, onClick, className = "" }) {
  const { close } = useMenus();

  function handleClick(e) {
    e.stopPropagation();
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className={`w-full text-left bg-none border-none py-2 px-4 text-sm transition-all duration-200 flex items-center gap-3 hover:bg-gray-100 text-gray-700 ${className}`}
      >
        {icon && (
          <span className="w-4 h-4 text-gray-500 transition-all duration-300">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;
