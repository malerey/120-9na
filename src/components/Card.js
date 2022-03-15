import "./Card.scss"

const Card = ({title, img}) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={`Poster de ${title}`}/>
    </article>
  )
}

export default Card
