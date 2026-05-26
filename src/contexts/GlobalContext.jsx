import { createContext, useState, useEffect } from "react";
import useTask from "../hooks/useTasks";

const { VITE_API_URL } = import.meta.env

const GlobalContext = createContext()

function GlobalProvider({ children }) {

    const [tasks, setTasks] = useState([])


    useEffect(() => {

        fetch(`${VITE_API_URL}/tasks`)
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(error => console.error(error))
    }, [])


    return <GlobalContext.Provider value={{ tasks, setTasks }}>
        {children}
    </GlobalContext.Provider>

}

export { GlobalProvider, GlobalContext }