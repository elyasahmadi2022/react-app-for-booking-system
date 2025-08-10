/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()
function GlobalProvider({children}) {
  const [isLightMode,setIsLightMode] = useState(false)
  return <GlobalContext.Provider value={{isLightMode,setIsLightMode}}>
    {children}
  </GlobalContext.Provider>
}

function useGlobalContext(){
    const context = useContext(GlobalContext)
    if(context === undefined) throw new Error("Context outside the global provider")

    return context;
}

export {useGlobalContext, GlobalProvider}