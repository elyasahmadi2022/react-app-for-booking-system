/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutSideClick } from "../hooks/useClickOutSide";
import { AnimatePresence, motion } from "framer-motion";
import { CgClose } from "react-icons/cg";
import { variants } from "../features/hotels/HotelModal";
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
      <div className={`relative  ${className}`}>{children}</div>
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useModal();
  return React.cloneElement(children, {
    onClick: () => {
      // e.stopPropagation();
      open(openWindowName);
    },
  });
}

function Window({ children, name, className }) {
  const { openName, close } = useModal();

  const ref = useOutSideClick(close);
  return createPortal(
    <AnimatePresence>
      {openName === name && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          className=" absolute inset-0  w-full flex justify-center items-center  min-h-screen bg-white/50 backdrop-blur-xs z-50"
        >
          {name !== "delete" && name !== "edit" ? (
            <motion.div
              variants={variants}
              exit="exit"
              ref={ref}
              className="relative w-auto h-auto [&>*]:text-sm md:[&>*]:text-[15px]    lg:w-[60%]   bg-white  shadow-md"
            >
              <CgClose
                size={20}
                className="absolute top-2 right-2 cursor-pointer z-10"
                onClick={close}
              />
              {children}
            </motion.div>
          ) : (
            children
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

NewModal.Open = Open;
NewModal.Window = Window;
