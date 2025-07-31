import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {recipecontext} from "../Context/RecipesContext"
import styles from "./SingleRecipes.module.css"
import { FaRegClock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTags, FaArrowLeft } from "react-icons/fa";
import { FaRegHeart, FaSyncAlt, FaRegTrashAlt, FaHeart } from "react-icons/fa";
import { useState } from "react";
const SingleRecipes = () => {
  const {data} = useContext(recipecontext);
  const params = useParams(); 
  const recipe = data.find((data)=>String(params.id) == String(data.id));
  const navig = useNavigate();
  const[like, setlike]=useState(false);
  return (
    <div className={styles.big}>
      <div className={styles.smaa}>
        <div className={styles.bb}>
          <button className={styles.bac} onClick={() => navig(`/recipes`)}>
            <FaArrowLeft />
            Back to recipes
          </button>
        </div>
        <div className={styles.icon}>
          <div className={styles.heart} onClick={() => setlike(!like)}>
            {like ? <FaHeart /> : <FaRegHeart />}
          </div>
          <div className={styles.update}>
            <FaSyncAlt/>
          </div>
          <div className={styles.trash}>
            <FaRegTrashAlt/>
          </div>
        </div>
      </div>
      <div className={styles.cbig}>
        <div className={styles.top}>
          <img className={styles.img} src={recipe.image} alt="img"/>
          <h1>{recipe.title}</h1>
        </div>
        <div className={styles.smal}>
          <div className={styles.time}>
            <FaRegClock className={styles.t} />
            <p>Cook Time</p>
            <h5 className={styles.t}>{recipe.time}</h5>
          </div>
          <div className={styles.name}>
            <FaUser className={styles.n} />
            <p>Cheif Name</p>
            <h5 className={styles.n}>{recipe.name}</h5>
          </div>
          <div className={styles.cate}>
            <FaTags className={styles.c}/>
            <p>Category</p>
            <h5 className={styles.c}>{recipe.category}</h5>
          </div>
        </div>
        <div className={styles.des}>
          <p>{recipe.description}</p>
        </div>
        <div className={styles.in}>
          <div className={styles.ins}>
            <h4>Instructions</h4>
            <ol>
              {recipe.instruction.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div className={styles.ing}>
            <h4>Ingredients</h4>
            <ol>
              {recipe.ingredients.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleRecipes