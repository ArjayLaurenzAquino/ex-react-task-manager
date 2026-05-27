import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import TaskRow from "../components/TaskRow"


function TaskList() {

    const { tasks, addTask, removeTask, updateTask } = useContext(GlobalContext)

    return <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Stato</th>
                <th>Data di Creazione</th>
            </tr>
        </thead>

        <tbody>
            {tasks.map(task => {
                return <TaskRow key={task.id} {...task} />
            })}
        </tbody>



    </table>
}

export default TaskList