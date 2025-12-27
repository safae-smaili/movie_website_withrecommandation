import { Link } from "react-router"
function Lmcard({movie}){
    return(<div className="mcard"> 
    <p id="flage">Ajouter</p> 
    <div className="poster">
        
        {/* <Link to={`/Movies/${movie.id}`}> */}
        <img src={`${movie.image}`} alt={movie.nom}  />
        {/* </Link> */}
        
    </div>
    <div className="minfo">
        <p>{movie.nom}</p>
        <p>{movie.date}</p>
    </div>
    </div>)

  
}
export default Lmcard