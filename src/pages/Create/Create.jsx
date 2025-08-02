import styles from "./Create.module.css"
import { useForm } from 'react-hook-form'; 
import { nanoid } from 'nanoid';
import { recipecontext } from "../../Context/RecipesContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const navigate = useNavigate();
  const {data, setdata} = useContext(recipecontext);
  const {register, handleSubmit, reset} =useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    recipe.ingredients = recipe.ingredients 
    ? recipe.ingredients.split('\n').filter(item => item.trim() !== '')
    : [];
  
  recipe.instruction = recipe.instruction 
    ? recipe.instruction.split('\n').filter(item => item.trim() !== '')
    : [];
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata))
    // setdata([...data,recipe]);
    toast.success("New Recipe Created!")
    reset();
    navigate("/recipes");
  };
  return (
    <div className={styles.h}>
      <div className={styles.wel}>
        <h1>Share Your Recipe</h1>
        <p>Let others discover your culinary masterpiece</p>
      </div>
      <section className={styles.s1}>
        <form className={styles.form} onSubmit={handleSubmit(SubmitHandler)}>
          <div className={styles.row}>
            <div className={styles.bo}>
              <label className={styles.lab}>Recipe Title</label>
              <input 
                {...register("title")}
                className={styles.in} 
                type="text"
                placeholder="🍴 Enter Recipe Title"
              />
            </div>
            <div className={styles.bo}>
              <label className={styles.lab}>Category</label>
              <select className={styles.sele} {...register("category")}>
                <option value="">Select Category</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="dessert">Dssert</option>
              </select>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.bo}>
              <label className={styles.lab}>Cheif Name</label>
              <input 
                {...register("name")}
                className={styles.in} 
                type="text" 
                placeholder="Your Name"
              />
            </div>
            <div className={styles.bo}>
              <label className={styles.lab}>Cooking Time</label>
              <input 
                {...register("time")}
                className={styles.in} 
                type="text" 
                placeholder="🕑 eg., 30 minutes"
              />
            </div>
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Description</label>
            <textarea 
              {...register("description")}
              className={styles.tex} 
              placeholder="Enter a brief description of the recipe"
            />
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Ingredients</label>
            <textarea 
              {...register("ingredients")}
              className={styles.tex} 
              placeholder="📃 Enter ingredients (one per line)"
            />
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Cooking Instructions</label>
            <textarea
              {...register("instruction")}
              className={styles.tex} 
              placeholder="Enter step-by-step instructions"
            />
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Recipe Image URL</label>
            <input
              {...register("image")}
              className={styles.in} 
              type="url" 
              placeholder="📷 Enter Image URL"
            />
          </div>
          <div className={styles.but}>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className={styles.w}>
            <h1>Tips for a Great Recipe</h1>
            <ul>
              <li>Be specific with measurements and quantities</li>
              <li>Include prep time and cooking time</li>
              <li>Write clear, step-by-step instructions</li>
              <li>Add notes for any special techniques or substitutions</li>
            </ul>
        </div>
      </section>
    </div>
  )
}

export default Create