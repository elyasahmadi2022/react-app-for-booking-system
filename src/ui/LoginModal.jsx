import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { FaXmark } from "react-icons/fa6";
import { useOutSideClick } from "../hooks/useClickOutSide";
const ModalContext = createContext();
export default function LoginModal({ children }) {
 
  const [openId, setOpenId] = useState("");
  const open = setOpenId;
  const close = () => setOpenId("");
  return (
    <ModalContext.Provider
      value={{ openId, open, close }}
    >
      {children}
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
  const parentElement = document.querySelector("header");
  if (openId === name) {
    return createPortal(
      <div className="z-50 backdrop-blur-xs  fixed top-2/4 left-2/4 -translate-2/4 w-full min-h-screen flex justify-center items-center bg-stone-100/80">
        <div
          ref={ref}
          className={`relative  bg-stone-100 rounded-sm shadow-2xl px-2 py-2 box-border  h-[80vh] xl:w-2/6  lg:w-2/5  md:w-2/4  max-md:w-2/3 max-sm:w-2/3  transition-all duration-300 flex items-center justify-center`}
        >
          <FaXmark
            size={20}
            className="absolute top-2 right-2 cursor-pointer hover:fill-red-700 z-50"
            onClick={close}
          />
          {children}
        </div>
      </div>,
      parentElement
    );
  }
}

LoginModal.Toggle = Toggle;
LoginModal.Window = Window;
