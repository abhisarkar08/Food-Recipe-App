import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css"
const RecipeCard = (props) => {
  const{id,image,title,description,name} =props.recipe;
  return (<Link className={styles.link}>
  <img className={styles.img} src={image} alt=""/>
  <h1 className={styles.h1}>{title}</h1>
  <p className={styles.p}>{description.slice(0,100)}</p></Link>
  );
}

export default RecipeCard