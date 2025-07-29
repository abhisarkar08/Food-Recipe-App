import styles from "./Create.module.css"
const Create = () => {
  return (
    <div className={styles.h}>
      <div className={styles.wel}>
        <h1>Share Your Recipe</h1>
        <p>Let others discover your culinary masterpiece</p>
      </div>
      <div className={styles.w}>
        <h1>Tips for a Great Recipe</h1>
        <ul>
          <li>Be specific with measurements and quantities</li>
          <li>Include prep time and cooking time</li>
          <li>Write clear, step-by-step instructions</li>
          <li>Add notes for any special techniques or substitutions</li>
        </ul>
      </div>
    </div>
  )
}

export default Create