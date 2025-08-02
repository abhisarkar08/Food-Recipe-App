import Mainroutes from './routes/Mainroutes'
import styles from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

const App = () => {
  
  return (
    <div className={styles.hh}>
      <NavBar/>
      <Mainroutes/>
      <Footer/>
    </div>
  )
}

export default App
