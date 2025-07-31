import {useNavigate } from "react-router-dom";
import styles from "./RecipeCard.module.css"
const RecipeCard = (props) => {
  const{id,image,title,description,name} =props.recipe;
  const navigate = useNavigate();
  return (
    <div className={styles.top}>
      <div className={styles.link}>
        <img className={styles.img} src={image} alt=""/>
        <div className={styles.con}>
          <h1 className={styles.h1}>{title}</h1>
          <p className={styles.name}>{name}</p>
          <p className={styles.p}>{description.slice(0,100)}...<small>more</small></p>
          <button onClick={() => navigate(`/recipes/details/${id}`)}>
            See Recipe
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard
