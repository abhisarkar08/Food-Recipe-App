import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.he}>
        <NavLink className={(e)=> e.isActive? styles.hh :""} to="/">Home</NavLink>
        <NavLink className={(e)=> e.isActive? styles.hh :""} to="/">Recipe</NavLink>
    </div>
  )
}

export default NavBar