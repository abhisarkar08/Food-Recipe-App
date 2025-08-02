import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.css";
import { FiMenu, FiX } from "react-icons/fi";
import { FaHome, FaPlus, FaHeart, FaBookOpen, FaInfo } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Tasty Recipes</div>

      <div className={styles.burger} onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      <div className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <h3 className={styles.menuTitle}>Menu</h3>

        <NavLink to="/" className={(e) => e.isActive ? styles.hh : styles.hp}>
          <FaHome />
          Home
        </NavLink>

        <NavLink to="/recipes" className={(e) => e.isActive ? styles.hh : styles.hp}>
          <FaBookOpen />
          Recipes
        </NavLink>

        <NavLink to="/create" className={(e) => e.isActive ? styles.hh : styles.hp}>
          <FaPlus />
          Create
        </NavLink>

        <NavLink to="/about" className={(e) => e.isActive ? styles.hh : styles.hp}>
          <FaInfo />
          About
        </NavLink>

        <NavLink to="/favorites" className={(e) => e.isActive ? styles.hh : styles.hp}>
          <FaHeart />
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

