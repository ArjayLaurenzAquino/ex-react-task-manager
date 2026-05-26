import { createContext, useState, useEffect } from "react";
import useTasks from "../hooks/useTasks";


const GlobalContext = createContext()

function GlobalProvider({ children }) {

    return <GlobalContext.Provider value={useTasks}>
        {children}
    </GlobalContext.Provider>

}

export { GlobalProvider, GlobalContext }