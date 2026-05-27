import { useParams } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


function TaskDetail() {

    const { id } = useParams()
    const { tasks } = useContext(GlobalContext)

    const task = tasks.find(t => t.id === parseInt(id))

    if (!task) {
        return <h2>Task non trovata</h2>
    }

    const handleDelete = () => {
        console.log("Elimino Task:", task.id)
    }

    return <>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.status}</p>
        <p>Data di creazione {new Date(task.createdAt).toLocaleDateString()}</p>
        <button onClick={handleDelete}>Elimina Task</button>
    </>
}

export default TaskDetail