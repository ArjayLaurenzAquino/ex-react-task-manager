import React, { memo } from "react"
import style from "./TaskRow.module.css"

const TaskRow = React.memo(({ title, status, createdAt }) => {

    return <tr>
        <td>{title}</td>
        <td className={
            (status === 'To do') ?
                style.red : (status === 'Done') ?
                    style.green : style.yellow
        }>{status}</td>
        <td>{createdAt}</td>
    </tr>

})

export default TaskRow