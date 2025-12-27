import { Link } from "react-router"
function MoviesCard({movie}){
    return(<div className="mcard">  
    <div className="poster">
        <Link to={`/Movies/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}  />
        </Link>
    </div>
    <div className="minfo">
        <p>{movie.title}</p>
        <p>{movie.release_date}</p>
    </div>
    </div>)

  
}
export default MoviesCard