import { createContext, useContext, useState } from "react";
const MenuBarContext = createContext();
export default function MenuBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState('');
  const close = () => setIsOpen('');
  const open =(value) => setIsOpen(value)
  return (
    <MenuBarContext.Provider
      value={{
        isOpen,
        setIsOpen,
        close,
        open
      }}
    >
      {children}
    </MenuBarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMenuBar() {
  const context = useContext(MenuBarContext);
  if (context === undefined) throw new Error("The context is outside");
  return context;
}
