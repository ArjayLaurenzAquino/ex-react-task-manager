import { useState, useRef } from "react";
import Modal from "./Modal";

export default function editTaskModal({ show, onClose, task, onSave }) {
    const [editedTask, setEditedTask] = useState(task)

    const editFormRef = useRef()

    const changedEditedTask = (key, event) => {
        setEditedTask(prev => ({ ...prev, [key]: event.target.value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        onSave(editedTask)
    }

    const { title, description, status } = editedTask

    return <Modal
        title="Modifica Task"
        content={
            <form ref={editFormRef} onSubmit={handleSubmit}>
                <label>
                    Titolo Task:
                    <input
                        type="text"
                        value={title}
                        onChange={e => changedEditedTask('title', e)}
                    />
                </label>

                <label>
                    Descrizione:
                    <textarea
                        type="text"
                        value={description}
                        onChange={e => changedEditedTask('description', e)} />
                </label>

                <label>
                    Stato:
                    <select
                        type="text"
                        value={status}
                        onChange={e => changedEditedTask('status', e)}
                    >
                        {["To do", "Doing", "Done"].map((value, index) => {
                            <option value={value} key={index}>{value}</option>
                        })}
                    </select>
                </label>
            </form>
        }
        confirmText="Salva"
        show={show}
        onClose={onClose}
        onConfirm={() => editFormRef.current.requestSubmit()} />
}

