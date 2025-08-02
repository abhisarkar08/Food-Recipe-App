import { FaHeart } from "react-icons/fa";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.t}>
        <h2 className={styles.hh}>Tasty Recipes</h2>
        <h3 className={styles.hp}>Discover, cook, and enjoy delicious recipes every day.</h3>
        <h4 className={styles.hc}>Build with <FaHeart /> by Abhishek Sarkar</h4>
    </div>
  )
}

export default Footer