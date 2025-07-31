import { useContext } from "react"
import {recipecontext} from "../Context/RecipesContext"
import RecipeCard from "../Components/RecipeCard"
import styles from './Recipes.module.css'
const Recipes = () => {
  const{data} = useContext(recipecontext);
  const renderrecipe =data.map((data)=>(
    <RecipeCard key={data.id} recipe={data}/>
  ));
  return (
    <div className={styles.t}>{renderrecipe}</div>
  )
}

export default Recipes