import { createContext, useState, useEffect } from "react";
import useTasks from "../hooks/useTasks";


const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const taskData = useTasks()

    return <GlobalContext.Provider value={taskData}>
        {children}
    </GlobalContext.Provider>

}

export { GlobalProvider, GlobalContext }