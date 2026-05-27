import { useState, useRef, useMemo, useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function AddTask() {

    const { addTask } = useContext(GlobalContext)

    const [title, setTitle] = useState("")
    const descriptionRef = useRef()
    const statusRef = useRef()

    const titleVerify = useMemo(() => {
        if (!title.trim()) return "Il campo non può essere vuoto."

        if ([...title].some(char => symbols.includes(char))) {
            return "Il titolo non può avere simboli."
        }
    }, [title])

    const handleSubmit = async e => {
        e.preventDefault()
        if (titleVerify)
            return

        const newTask = {
            title: title.trim(),
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        try {
            await addTask(newTask)
            alert("Task aggiunta")
            setTitle("")
            descriptionRef.current.value = ""
            statusRef.current.value = ""
        } catch (error) {
            alert(error.message)
        }

        console.log('task da aggiungere', newTask)
    }

    return <form onSubmit={handleSubmit}>

        <label>Titolo:
            <input
                type="text"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)} />
        </label>
        {titleVerify &&
            <p style={{ color: "red" }}>{titleVerify}</p>}

        <label>Descrizione:
            <textarea
                id="description"
                ref={descriptionRef} />
        </label>

        <label htmlFor="status">Status:
            <select
                id="status"
                ref={statusRef}
                defaultValue="To do">
                <option value="To do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
        </label>

        <button type="submit" disabled={titleVerify}>Aggiungi Task</button>

    </form>
}

export default AddTask