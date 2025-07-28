import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"
import Create from "../pages/Create"
import About from "../pages/About"
import Favorites from "../pages/Favorites"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes