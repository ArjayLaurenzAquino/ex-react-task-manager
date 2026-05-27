import React, { memo } from "react"
import style from "./TaskRow.module.css"
import { Link } from "react-router-dom"

const TaskRow = React.memo(({ id, title, status, createdAt }) => {

    return <tr>
        <td>
            <Link to={`/task/${id}`}>
                {title}
            </Link>
        </td>
        <td className={
            (status === 'To do') ?
                style.red : (status === 'Done') ?
                    style.green : style.yellow
        }>{status}</td>
        <td>{new Date(createdAt).toLocaleDateString()}</td>
    </tr>

})

export default TaskRow