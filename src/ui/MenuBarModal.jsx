import { cloneElement } from "react";
import { useOutSideClick } from "./../hooks/useClickOutSide";
import MenuBarProvider, { useMenuBar } from "./MenuBarProvider";

export default function MenuBarModal({ children, className }) {
  return (
    <MenuBarProvider>
      <div className={`${className}`}>{children}</div>
    </MenuBarProvider>
  );
}
function Toggle({ children,id }) {
  const { open, isOpen, close } = useMenuBar();
  function handleOpen(e){
    e.stopPropagation();
    isOpen === '' && isOpen !== id ?open(id) : close()
  }
  return cloneElement(children, { onClick:(e) =>  handleOpen(e)});

}
function MenusItem({ children, className, id }) {
  const { isOpen, close } = useMenuBar();

  
  const ref = useOutSideClick(close);
  return isOpen === id ? (
    <div
      ref={ref}
      className={`absolute flex flex-col shadow-2xl  ${className}`}
    >
      {children}
    </div>
  ) : null;
}

MenuBarModal.Toggle = Toggle;
MenuBarModal.MenusItem = MenusItem;
