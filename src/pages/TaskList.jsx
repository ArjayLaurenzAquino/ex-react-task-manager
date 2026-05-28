import { useContext, useState, useMemo, useCallback } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import TaskRow from "../components/TaskRow"

function debounce(callback, delay) {
    let timer
    return (value) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(value)
        }, delay)
    }
}

function TaskList() {

    const { tasks, addTask, removeTask, updateTask } = useContext(GlobalContext)

    const [searchQuery, setSearchQuery] = useState("")

    const debounceSearch = useCallback(debounce(setSearchQuery, 500), [])

    const [sortBy, setSortBy] = useState("createdAt")
    const [sortOrder, setSortOrder] = useState(1)

    const handleSort = (field) => {
        if (sortBy === field) {
            setSortOrder(prev => prev * -1)
        } else {
            setSortBy(field)
            setSortOrder(1)
        }
    }

    const filteredAndSortedTask = useMemo(() => {
        return [...tasks]
            .filter(t => t.title.toLowerCase()
                .includes(searchQuery.toLowerCase())).sort((a, b) => {

                    let comparison

                    if (sortBy === "title") {
                        comparison = a.title.localeCompare(b.title)
                    } else if (sortBy === "status") {
                        const statusOptions = ["To do", "Doing", "Done"]
                        comparison = statusOptions.indexOf(a.status) - statusOptions.indexOf(b.status)
                    } else if (sortBy === "createdAt") {
                        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                    }

                    return comparison * sortOrder
                })
    }, [tasks, sortBy, sortOrder, searchQuery])

    return <>

        <h1>Lista Tasks</h1>

        <input
            type="text"
            placeholder="Ricerca..."

            onChange={e => debounceSearch(e.target.value)}
        />

        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort("title")}>Nome</th>
                    <th onClick={() => handleSort("status")}>Stato</th>
                    <th onClick={() => handleSort("createdAt")}>Data di Creazione</th>
                </tr>
            </thead>

            <tbody>
                {filteredAndSortedTask.map(task => {
                    return <TaskRow key={task.id} {...task} />
                })}
            </tbody>

        </table>
    </>
}

export default TaskList