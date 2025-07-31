import { useContext } from "react"
import {recipecontext} from "../Context/RecipesContext"
const Recipes = () => {
  const{data} = useContext(recipecontext);
  const renderrecipe =data.map((data)=>(
    <div key={data.id}>
      <h1>{data.title}</h1>
    </div>
  ));
  return (
    <div>{renderrecipe}</div>
  )
}

export default Recipes