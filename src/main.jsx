import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import RecipesContext from './Context/RecipesContext.jsx';

createRoot(document.getElementById('root')).render(
  <RecipesContext>
    <BrowserRouter>
      <App />
      <ToastContainer/>
    </BrowserRouter>
  </RecipesContext>



)
