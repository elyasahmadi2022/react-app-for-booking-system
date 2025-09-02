import React, { Children, cloneElement } from "react";
import { useOutSideClick } from "./../hooks/useClickOutSide";
import MenuBarProvider, { useMenuBar } from "./MenuBarProvider";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
const variants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.125,
      stiffness: 700,
    },
  },
};

export default function MenuBarModal({ children, className }) {
  return (
    <MenuBarProvider>
      <div className={`${className}`}>{children}</div>
    </MenuBarProvider>
  );
}
function Toggle({ children, id }) {
  const { open, isOpen, close } = useMenuBar();
  function handleOpen(e) {
    e.stopPropagation();
    isOpen === "" && isOpen !== id ? open(id) : close();
  }
  return cloneElement(children, { onClick: (e) => handleOpen(e) });
}
function MenusItem({ children, className, parent, id }) {
  const { isOpen, close } = useMenuBar();
  const ref = useOutSideClick(close);

  const parentElement = document.querySelector(`${parent}`);
  if (isOpen !== id) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        ref={ref}
        className={`flex flex-col shadow-2xl z-40  ${className}`}
      >
       {children}
      </motion.div>
    </AnimatePresence>,
    parentElement
  );
}

MenuBarModal.Toggle = Toggle;
MenuBarModal.MenusItem = MenusItem;
