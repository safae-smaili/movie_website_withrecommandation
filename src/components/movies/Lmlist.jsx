import Lmcard from './Lmcard';
import MoviesCard from './MovieCard';
function Lmlist({movies,page=1,setPage=1}) {

return (
<>
<h1  className='filme'>FILME Ajouter : </h1>

{movies.length === 0 ? (
        <p id="locm">No movies found.</p>
      ) : (
        <>
          <div className='mlist'>
            {movies.map(movie => (
            //   <MoviesCard key={movie.id} movie={movie} />
            <Lmcard movie={movie}/>
            ))}
          </div>

          
        </>
      )}
    </>
  );
}
export default Lmlist ;