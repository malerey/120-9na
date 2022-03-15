import { useState, useContext } from "react"
import Context from "../context/Context"
import "./Nav.scss";

const Nav = () => {
  const context = useContext(Context)
  const [mostrarFormIniciarSesion, setMostrarFormIniciarSesion] = useState(false)
  const [contrasenia, setContrasenia] = useState("")
  const [nombreUsuario, setNombreUsuario] = useState("")

  const handleClickMostrarInicioSesion = () => {
    setMostrarFormIniciarSesion(true)
  }

  const handleChangeNombreUsuario = (e) => {
    setNombreUsuario(e.target.value)
  }

  const handleChangeContrasenia = (e) => {
    setContrasenia(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://reqres.in/api/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
    })
    .then(res => res.json())
    .then(data => {
        context.setUser({
          name: "Diamela", 
          lastName: "Giardini", 
          age: 23,
          email: "diame@gmail.com",  
          leGustaLaFranela: true, 
          tienePatasDeGallo: false, 
          recuerdaTorresGemelas: false, 
          sabeQuienEsElDuki: true, 
        })
    }) 
  }

  
  const handleClickCerrarSesion = () => {
    context.setUser({})
  }

  const sesionIniciada = context.user.name 
  return (

    <nav className={sesionIniciada ? "nav-sesion-iniciada" : "nav"}>
    {sesionIniciada
      ? <h2>Bienvenide, {context.user.name}</h2> 
      : <h2>Bienvenide</h2>
    }

    {sesionIniciada && 
        <button onClick={handleClickCerrarSesion}>Cerrar sesion</button>
      }
      
      {!sesionIniciada && 
        <button onClick={handleClickMostrarInicioSesion}>Iniciar sesion</button>
      }

      {!sesionIniciada && mostrarFormIniciarSesion && 
      <form onSubmit={handleSubmit}>
      {/* // deberia tener label o aria-label */}
        <input 
          type="text" 
          placeholder="Nombre de usuario" 
          value={nombreUsuario}
          onChange={handleChangeNombreUsuario}
          />
        <input 
          type="password" 
          placeholder="Contrasenia" 
          value={contrasenia}
          onChange={handleChangeContrasenia}
          />
        <input type="submit" value="Iniciar sesion" />
      </form>}
    </nav>
  )
}

export default Nav
