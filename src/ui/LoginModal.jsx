import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { useOutSideClick } from "../hooks/useClickOutSide";
import { motion, AnimatePresence } from "framer-motion";

const ModalContext = createContext();
export default function LoginModal({ children }) {
  const [openId, setOpenId] = useState("");
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <ModalContext.Provider value={{ openId, open, close }}>
      <div className="relative"> {children}</div>
    </ModalContext.Provider>
  );
}
function Toggle({ children, id }) {
  const { open, close, openId } = useContext(ModalContext);

  const handleClick = () => {
    openId === "" || openId !== id ? open(id) : close();
  };
  return cloneElement(children, { onClick: (e) => handleClick(e) });
}
function Window({ children, name }) {
  const { openId, close } = useContext(ModalContext);
  const ref = useOutSideClick(close);
  let parentElement = document.querySelector("header") || document.body;
  return createPortal(
    <AnimatePresence>
      {openId === name && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{ opacity: 0, scale: 0.4 }}
          transition={{ duration: 0.4, stiffness: 1000 }}
          className="z-50 backdrop-blur-xs  fixed top-2/4 left-2/4 -translate-2/4 w-full min-h-screen flex justify-center items-center bg-stone-100/80"
        >
          <motion.div
            ref={ref}
            className={`relative  bg-stone-100 rounded-sm shadow-2xl px-2 py-2 box-border  h-[80vh] xl:w-2/6  lg:w-2/5  md:w-2/4  max-md:w-2/3 max-sm:w-2/3  transition-all duration-300 flex items-center justify-center`}
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

LoginModal.Toggle = Toggle;
LoginModal.Window = Window;
