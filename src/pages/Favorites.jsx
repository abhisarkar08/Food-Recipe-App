import { useContext } from "react";
import { recipecontext } from "../Context/RecipesContext";
import RecipeCard from "../Components/RecipeCard";
import styles from "./Favorites.module.css";

const Favorites = () => {
  const { fav } = useContext(recipecontext);

  return (
    <div className={styles.page}>
      <div className={styles.head}>
        <h1>Your Favorites</h1>
        {fav.length > 0 && (
          <p>Only your liked recipes will appear here.</p>
        )}
      </div>

      {fav.length === 0 ? (
        <p className={styles.empty}>No favorites added yet.</p>
      ) : (
        <div className={styles.t}>
          {fav.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
