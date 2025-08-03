import { useForm } from "react-hook-form";
import styles from "./Update.module.css"
import { useParams, useNavigate } from "react-router-dom";
import { recipecontext } from "../../Context/RecipesContext";
import { useContext, useEffect} from "react";
import { toast } from "react-toastify";
const Update = () => {
    const navig = useNavigate();
    const {id} = useParams();
    const { data, setdata } = useContext(recipecontext);
    const recipe = data.find((r) => String(r.id) === String(id));
    const { register, handleSubmit, reset } = useForm({
        defaultValues: recipe || {}
    });
    useEffect(() => {
        if (recipe) {
            reset(recipe); // jab data mile tab form me set ho
        }
    }, [recipe, reset]);
    const SubmitHandler = (recipe) => {
        const confirmUp = window.confirm("Are you sure you want to Update this recipe?");
  
        if (!confirmUp) {
            return; 
        }



        const index = data.findIndex((recipe)=> String(id) == String(recipe.id));
        const copydata = [...data];
        copydata[index] = {...copydata[index], ...recipe};
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("Update Successfully", {
            position: "top-center"
        });

        navig(`/recipes/details/${id}`);
    };
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            <h1 className={styles.head}>Update Form</h1>
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
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Update

