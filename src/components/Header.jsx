import { NavLink } from "react-router-dom"
import style from "../components/Header.module.css"

function Header() {
    return <header>
        <nav>
            <NavLink className={style.nLinks} to="/">List of Tasks</NavLink>
            <NavLink className={style.nLinks} to="/AddTask">Add Task</NavLink>
        </nav>
    </header>
}

export default Header