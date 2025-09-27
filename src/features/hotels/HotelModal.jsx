import { CgClose } from "react-icons/cg";
import { cloneElement } from "react";
import { createPortal } from "react-dom";
import MenuBarProvider, { useMenuBar } from "../../ui/MenuBarProvider";
import { useOutSideClick } from "../../hooks/useClickOutSide";
import { AnimatePresence, motion } from "framer-motion";
export const variants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      delay: 0.2,
      stiffness: 700,
    },
  },
  exit: {
    y: "-100vw",
    transition: {
      duration: 0.3,
      delay: 0.2,
      stiffness: 700,
    },
  },
};
function HotelModal({ children }) {
  return (
    <MenuBarProvider>
      <div className="relative w-[95%]  mx-auto  flex justify-between">{children}</div>
    </MenuBarProvider>
  );
}
function Toggle({ children, id }) {
  const { open, isOpen, close } = useMenuBar();
  function toggle() {
    id !== "" && id !== isOpen ? open(id) : close();
  }
  return cloneElement(children, { onClick: () => toggle() });
}
function Window({ children, id }) {
  const { isOpen, close } = useMenuBar();
  const ref = useOutSideClick(close);
  // if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ===id && (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            className=" absolute inset-0  w-full flex justify-center items-center  min-h-screen bg-white/50 backdrop-blur-xs z-50"
          >
            <motion.div
              variants={variants}
              exit="exit"
              ref={ref}
              className="relative  w-[95%] md:[80%] [&>*]:text-sm md:[&>*]:text-[15px] h-[95%]   lg:w-[60%]   bg-white  shadow-md"
            >
              <CgClose
                size={20}
                className="absolute top-2 right-2 cursor-pointer z-10"
                onClick={close}
              />
              {children}
            </motion.div>
          </motion.div>
        )}
    </AnimatePresence>,
    document.body
  );
}

HotelModal.Toggle = Toggle;
HotelModal.Window = Window;
export default HotelModal;
