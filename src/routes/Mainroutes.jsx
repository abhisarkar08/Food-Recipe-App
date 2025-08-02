import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import Create from "../pages/Create/Create";
import SingleRecipes from "../pages/SingleRecipe/SingleRecipes";
import Favorites from "../pages/Favorites/Favorites";
import Update from "../pages/Update/Update";
import About from "../pages/About/About"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/recipes/details/:id" element={<SingleRecipes/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes