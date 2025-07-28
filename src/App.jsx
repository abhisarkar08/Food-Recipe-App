import Mainroutes from './routes/Mainroutes'
import styles from "./App.module.css";
import NavBar from './Components/NavBar';
import Footer from './Components/footer';

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
