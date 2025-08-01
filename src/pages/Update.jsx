import { useForm } from "react-hook-form";
import styles from "./Update.module.css"

const Update = () => {
  const { register, handleSubmit } = useForm(); // ✅ Add this

  const SubmitHandler = (data) => {
    console.log(data); 
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