import { useParams, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import Modal from "./Modal"
import EditTaskModal from "./EditTaskModal"

function TaskDetail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const { tasks, removeTask, updateTask } = useContext(GlobalContext)

    const task = tasks.find(t => t.id === parseInt(id))

    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)

    if (!task) {
        return <h2>Task non trovata</h2>
    }


    const handleDelete = async () => {

        try {
            await removeTask(task.id)
            alert("Task eliminata")
            navigate("/")
        } catch (error) {
            console.log(error)
            alert(error.message)
        }

    }

    const handleUpdate = async updatedTask => {
        try {
            await updateTask(updatedTask)
            setShowEditModal(false)
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    return <>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>{task.status}</p>
        <p>Data di creazione {new Date(task.createdAt).toLocaleDateString()}</p>
        <button onClick={() => setShowDeleteModal(true)}>Elimina Task</button>
        <button onClick={() => setShowEditModal(true)}>Modifica Task</button>


        <Modal
            title="Conferma eliminazione"
            content={<p>Sicuro?</p>}
            show={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={handleDelete}
            confirmText="Elimina"
        />

        <EditTaskModal
            task={task}
            show={showEditModal}
            onClose={() => setShowEditModal(false)}
            onSave={handleUpdate}
        />
    </>
}

export default TaskDetail