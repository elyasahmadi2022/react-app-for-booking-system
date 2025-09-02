/* eslint-disable react-refresh/only-export-components */
import React, {  createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutSideClick } from "../hooks/useClickOutSide";
import { AnimatePresence, motion } from "framer-motion";

const ModalContext = createContext();

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export default function NewModal({ children, className }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ close, open, openName }}>
      <div className={`relative  ${className}`}>
      {children}

      </div>
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useModal();
  return React.cloneElement(children, { 
    onClick: () => {
      // e.stopPropagation();
      open(openWindowName);
    }
  });
}

function Window({ children, name , className}) {
  const { openName, close } = useModal();
  const ref = useOutSideClick(close);
  return createPortal(
    <AnimatePresence>
      {openName === name && (

    <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.123, stiffness:1000}}  exit={{opacity:0,transition: {duration: 0.9, stiffness: 1000}}}  className={`w-full h-screen absolute top-0 bottom-0 inset-0  bg-white/40 backdrop-blur-sm transition-all duration-500 z-50`}>
      <motion.div 
        ref={ref}
        className={`absolute  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-2 transition-all duration-500 min-w-[400px] ${className}`}
      >
        <button
          onClick={close}
          className="absolute top-3 right-5 bg-none cursor-pointer z-10 border-none p-1 rounded-sm transition-all duration-200 hover:bg-gray-100"
        >
          <HiXMark className="w-6 h-6 text-gray-500" />
        </button>
        {children}
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

NewModal.Open = Open;
NewModal.Window = Window;