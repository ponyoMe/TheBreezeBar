import { createContext, useContext, useState } from "react";
import type { NavItems } from "../layout/NavBar";

type ActivePageProps = {
    name: NavItems['name'],
    setActivePage: (name: NavItems['name']) => void
}
const ActivePageContext = createContext<ActivePageProps | undefined>(undefined)

export function ActivePageProvider({children}: {children:React.ReactNode}){
    const [activePage, setActivePage] = useState<NavItems['name']>('Home');
    const setActivePageHandler = (name: NavItems['name'])=>{
        setActivePage(name)
    }

    return(
        <ActivePageContext.Provider value={{ name:activePage, setActivePage:setActivePageHandler }} >
            {children}
        </ActivePageContext.Provider>
    )
}

export function useActivePage(){
    const context = useContext(ActivePageContext);
    if (!context) {
        throw new Error("useActivePage must be used within an ActivePageProvider");
    }
    return context;
}