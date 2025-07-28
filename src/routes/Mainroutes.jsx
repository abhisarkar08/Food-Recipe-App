import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Recipes from "../pages/Recipes"

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipes" element={<Recipes/>}/>
        </Routes>
    </div>
  )
}

export default Mainroutes