import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"


function TaskDetail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask } = useContext(GlobalContext)

    const task = tasks.find(t => t.id === parseInt(id))

    const handleDelete = async () => {
        if (!task) {
            try {
                await removeTask(task.id)
                alert("Task eliminata")
                navigate("/")
            } catch (error) {
                console.log(error)
                alert(error.message)
            }
        }
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