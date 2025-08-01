import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import Create from "../pages/Create"
import About from "../pages/About"
import Update from "../pages/Update"
import Favorites from "../pages/Favorites"
import SingleRecipes from "../pages/SingleRecipes"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/recipes/details/:id" element={<SingleRecipes/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes