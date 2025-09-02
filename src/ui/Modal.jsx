import { cloneElement, createContext, useContext, useState } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { useOutSideClick } from "./../hooks/useClickOutSide";

import { motion, AnimatePresence } from "framer-motion";
const ModalContext = createContext();
const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    tranistion: {
      duration: 0.3,
      delay: 0.2,
      stiffness: 700,
    },
  },
  exit: {
    y: -100,
    opacity:0,
    tranistion: {
      duration: 0.3,
      delay: 0.2,
      stiffness: 700,
    },
  },
};
export default function Modal({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState({});
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <ModalContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </ModalContext.Provider>
  );
}
function Toggle({ children, id }) {
  const { open, close, openId, setPosition } = useContext(ModalContext);
  const handleClick = (e) => {
    openId === "" || openId !== id ? open(id) : close();
    setPosition({
      x: e.clientX + "px",
      y: e.clientY + "px",
    });
  };
  return cloneElement(children, { onClick: (e) => handleClick(e) });
}
function Window({ children, name }) {
  const { openId, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);
  const parentElement = document.querySelector("header") || document.body;

  return createPortal(
    <AnimatePresence>
      {openId === name && (
        <motion.div
          layout
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="z-40 backdrop-blur-xs  fixed top-2/4 left-2/4 -translate-2/4 w-full min-h-screen flex justify-center items-center bg-stone-100/50"
        >
          <motion.div
            variants={variants}
            exit="exit"
            ref={ref}
            className={`relative bg-stone-100 rounded-sm shadow-2xl px-2 py-2  h-[80vh] w-2/3  max-md:w-2/3  transition-all duration-300 z-50`}
          >
            <FaXmark
              size={20}
              className="absolute top-2 right-2 cursor-pointer hover:fill-red-700 z-50"
              onClick={close}
            />
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    parentElement
  );
}

Modal.Toggle = Toggle;
Modal.Window = Window;
