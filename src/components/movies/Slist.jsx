import MoviesCard from "./MovieCard";
// import {s} from "../../style/details.css"
import '../../style/details.css'
function Slist({movies}){

    return (
<>


        <>
        <span className="slcard">
          <div onClick={() => window.scrollTo(0, 0)} className='mlist'>
            {movies.slice(0,6).map(movie => (
              <MoviesCard  key={movie.id} movie={movie} />
            ))}
          </div>
        </span>
          
        </>
      
    </>
  );

}
export default Slist;