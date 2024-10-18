import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import './estilos.css'
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';//viene de un archivo css externo a mi proyecto
import "bootswatch/dist/morph/bootstrap.min.css";//se exporta el contenido del tema minty de la pagina de bootswatch



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <App/>
  </StrictMode>,
)
