import { useContext } from "react"
import {recipecontext} from "../../Context/RecipesContext"
import RecipeCard from "../../Components/RecipeCard/RecipeCard"
import styles from './Recipes.module.css'
const Recipes = () => {
  const{data} = useContext(recipecontext);
  const renderrecipe = (data || []).map((data)=>(
    <RecipeCard key={data.id} recipe={data}/>
  ));

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h1>All Recipes</h1>
        <p>Browse and manage your recipe collection</p>
      </div>

      <div className={styles.t}>
        {data && data.length > 0 ? (
          renderrecipe
        ) : (
          <div className={styles.empty}>
            <h2>No recipes found</h2>
            <p>Start by adding your first recipe!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Recipes
