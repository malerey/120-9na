import {useState} from "react"
import './App.scss';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Context from "./context/Context"

// HICIMOS EN CLASE:
// una barra de navegacion que, 
// si el usuario esta logueado, diga "bienvenide, nombre usuario"
// si no lo esta, aparezca un boton que diga "iniciar sesion"

// quiero una seccion main que muestre tarjetas de peliculas
// con un select para elegir el idioma de las tarjetas

// TAREA:
// quiero un footer con un boton que permita cambiar a modo oscuro / modo claro 
// que avise si estoy en modo oscuro o modo claro
// Tip: tiene que cambiar la clase en este div que esta en App.js



function App() {
  const [user, setUser] = useState({})
  const [darkTheme, setDarkTheme] = useState(false)
  const [language, setLanguage] = useState("es")

  const context = {
    user: user,
    setUser: setUser,
    darkTheme: "?????", 
    setDarkTheme: "??????",
    language: language,
    setLanguage: setLanguage
  }

  
  return (
    <Context.Provider value={context}>
      <div className="modo-claro">
        <Nav />
        <Main />
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
