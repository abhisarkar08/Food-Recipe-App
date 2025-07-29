import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.ho}>
      <section className={styles.s1}>
        <div className={styles.h1}>
          <h1>Discover, Create, and Share <span>Delicious recipes</span> every day.</h1>
          <h4>Explore the world of mouthwatering recipes, create your own culinary masterpices, and share with them with a passionate foodie community. Let the flavours tell your story!</h4>
        </div>
        <div className={styles.h2}>
          <button>Create Recipes</button>
          <button>Go to Recipes</button>
        </div>
      </section>
      <div className={styles.trans}>
        <div className={styles.slider}>
          <div className={styles.text}>
            <p>Chicken Biryani</p>
            <p>Paneer Tikka</p>
            <p>Rajma Chawal</p>
            <p>Chole Bhature</p>
            <p>Curry Rice</p>
          </div>
          <div className={styles.text}>
            <p>Chicken Biryani</p>
            <p>Paneer Tikka</p>
            <p>Rajma Chawal</p>
            <p>Chole Bhature</p>
            <p>Curry Rice</p>
          </div>
          <div className={styles.text}>
            <p>Chicken Biryani</p>
            <p>Paneer Tikka</p>
            <p>Rajma Chawal</p>
            <p>Chole Bhature</p>
            <p>Curry Rice</p>
          </div>
        </div>
      </div>
      <section className={styles.s2}>
        <div className={styles.big}>
          <div className={styles.h3}>
            <h2>Cooking Tips and Tricks</h2>
          </div>
          <div className={styles.sma}>
            <div className={styles.box}>
              <div className={styles.num}>1</div>
              <div className={styles.con}>
                <h3>Prep Ingredients First</h3>
                <p>Having all ingredients measured, cut, peeled, sliced, and ready to go before cooking makes everything so much easier and reduces stress while cooking.</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.num}>2</div>
              <div className={styles.con}>
                <h3>Taste As You Go</h3>
                <p>Taste your dish throughout the cooking process to ensure proper seasoning and flavor development. Adjust seasonings gradually to achieve the perfect balance.</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.num}>3</div>
              <div className={styles.con}>
                <h3>Rest Your Meats</h3>
                <p>Allow meats to rest after cooking to redistribute juices and ensure maximum flavor and tenderness. For most cuts, 5-10 minutes under foil is sufficient.</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.num}>4</div>
              <div className={styles.con}>
                <h3>Sharp Knives Are Safer</h3>
                <p>Keep your knives sharp. Dull knives require more force and are more likely to slip and cause injury. Invest in a good knife sharpener for kitchen safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home