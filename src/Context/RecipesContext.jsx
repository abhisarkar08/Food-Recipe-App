import { createContext, useEffect, useState } from "react"

export const recipecontext = createContext(null);

const RecipesContext = (props) => {
    const[data, setdata] =useState([]);
    const[fav, setfav] = useState([]);
    const[isLoaded, setIsLoaded] = useState(false)
    useEffect(()=>{
        setdata(JSON.parse(localStorage.getItem("recipes"))|| []);
        setfav(JSON.parse(localStorage.getItem("favorites")) || []);
        setIsLoaded(true);
    },[])
    const addfav = (recipe) =>{
      const same = fav.some((r)=> r.id == recipe.id);
      if(!same){
        setfav([...fav, recipe]);
      }
    };
  return (
    <recipecontext.Provider value={{data, setdata, fav, setfav, addfav, isLoaded}}>
        {props.children}
    </recipecontext.Provider>
  )
}

export default RecipesContext




// {
//       id: 1,
//       title: "Classic Margherita Pizza",
//       name: "Abhishek Sarkar",
//       ingredients: [
//         "Pizza dough",
//         "Tomato sauce",
//         "Fresh mozzarella cheese",
//         "Fresh basil leaves",
//         "Olive oil",
//         "Salt and pepper to taste"
//       ],
//       instruction: [
//         "Preheat the oven to 475°F (245°C).",
//         "Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves.",
//         "Drizzle with olive oil and season with salt and pepper.",
//         "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//         "Slice and serve hot."
//       ],
//       time: "20 minutes",
//       "userId": 166,
//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//       category: [
//         "dinner"
//       ],
//       description:["Roll out the pizza dough and spread tomato sauce evenly.",
//         "Top with slices of fresh mozzarella and fresh basil leaves."]
//     }