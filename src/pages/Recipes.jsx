import { useContext } from "react"
import {recipecontext} from "../Context/RecipesContext"
import RecipeCard from "../Components/RecipeCard"
const Recipes = () => {
  const{data} = useContext(recipecontext);
  const renderrecipe =data.map((data)=>(
    <RecipeCard key={data.id} recipe={data}/>
  ));
  return (
    <div>{renderrecipe}</div>
  )
}

export default Recipes