import styles from "./Create.module.css"
const Create = () => {
  return (
    <div className={styles.h}>
      <div className={styles.wel}>
        <h1>Share Your Recipe</h1>
        <p>Let others discover your culinary masterpiece</p>
      </div>
      <section className={styles.s1}>
        <form className={styles.form}>
          <div className={styles.row}>
            <div className={styles.bo}>
              <label className={styles.lab}>Recipe Title</label>
              <input className={styles.in} type="text" placeholder="🍴 Enter Recipe Title"/>
            </div>
            <div className={styles.bo}>
              <label className={styles.lab}>Category</label>
              <select className={styles.sele}>
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
              <input className={styles.in} type="text" placeholder="Your Name"/>
            </div>
            <div className={styles.bo}>
              <label className={styles.lab}>Cooking Time</label>
              <input className={styles.in} type="text" placeholder="🕑 eg., 30 minutes"/>
            </div>
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Description</label>
            <textarea className={styles.tex} placeholder="Enter a brief description of the recipe"/>
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Ingredients</label>
            <textarea className={styles.tex} placeholder="📃 Enter ingredients (one per line)"/>
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Cooking Instructions</label>
            <textarea className={styles.tex} placeholder="Enter step-by-step instructions"/>
          </div>
          <div className={styles.bo}>
            <label className={styles.lab}>Recipe Image URL</label>
            <input className={styles.in} type="text" placeholder="📷 Enter Image URL"/>
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