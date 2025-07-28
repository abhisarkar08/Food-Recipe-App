import React from 'react'
import Mainroutes from './routes/Mainroutes'
import styles from "./App.module.css";
import NavBar from './Components/NavBar';

const App = () => {
  
  return (
    <div className={styles.hh}>
      <NavBar/>
      <Mainroutes/>
    </div>
  )
}

export default App
