import {useState, useEffect, useContext} from "react"
import Context from "../context/Context"
import Card from "./Card"

import "./Main.scss"

const Main = () => {
  const context = useContext(Context)

  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=07b7fbf0aa198d742f7f3020308675d2&language=${context.language}`)
    .then(res => res.json())
    .then(data => {
      setPeliculas(data.results)
    })
  }, [context.language])

  const handleChangeIdioma = (e) => {
   context.setLanguage(e.target.value) 
  }

  console.log(context)

  return (
    <div>

   { context.user.name && 
   <section className="ofertas">
      <h2>Ofertas solo para usuarios que tengan {context.user.age} años</h2>
    </section>}

      <h1>Peliculas Populares</h1>

      <select onChange={handleChangeIdioma}>
        <option value="es">Español</option>
        <option value="en">Ingles</option>
        <option value="lv">Latvian</option>
        <option value="ko">한국어/조선말</option>
      </select>

      <div className="container-tarjetas">
      {peliculas.map(pelicula => ( 
          <Card 
            key={pelicula.id}
            title={pelicula.title} 
            img={pelicula.poster_path} />
      ))}
      </div>
    </div>
  )
}

export default Main
