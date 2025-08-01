import styles from "./About.module.css"
import { GiMeal, GiChefToque } from 'react-icons/gi';
import { FaUsers } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
const About = () => {
  const navig = useNavigate();
  return (
    <div className={styles.h}>
      <section className={styles.s1}>
        <div className={styles.tit}>
          <h1>Bringing People Together Through Food</h1>
          <p>We're on a mission to make cooking accessible, enjoyable, and inspiring for everyone. Join our community of food lovers and share your culinary journey.</p>
        </div>
        <div className={styles.card}>
          <div className={styles.c}>
            <GiMeal className={styles.ico}/>
            <p>Recipes</p>
          </div>
          <div className={styles.c}>
            <FaUsers className={styles.ico}/>
            <p>Community</p>
          </div>
          <div className={styles.c}>
            <AiFillHeart className={styles.ico}/>
            <p>Favorites</p>
          </div>
          <div className={styles.c}>
            <GiChefToque className={styles.ico}/>
            <p>Contributors</p>
          </div>
        </div>
      </section>
      <section className={styles.s2}>
        <div className={styles.bbig}>
          <h2>Our Mission</h2>
          <p>We believe that good food has the power to bring people together and create lasting memories. Our platform is designed to inspire creativity in the kitchen and foster a supportive community of food enthusiasts from all walks of life.</p>
          <button onClick={()=>navig('/create')}>Add Recipes</button>
        </div>
      </section>
      <section className={styles.s3}>
        <div className={styles.sma}>
          <div className={styles.para}>
            <h2>Get in Touch</h2>
            <p>Have questions or suggestions? We'd love to hear from you!</p>
          </div>
          <div className={styles.butt}>
            <button className={styles.b1} type="submit">Conatct Us</button>
            <button className={styles.b2} type="submit">Send Feedback</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About