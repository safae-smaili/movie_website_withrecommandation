//import { useEffect, useState } from 'react';
import MoviesCard from './MovieCard';
function Mlist({movies,page=1,setPage=1}) {
// const [movies, setMovies] = useState([]);
// const [loading, setLoading] = useState(true);
// const [page, setPage] = useState(1); 
//const totalPages = 5;


// useEffect(() => {
// const fetchMovies = async () => {
// try {
// const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b24188948d9a603274c706ed3a994d8f&page=${page}`);
// if (!response.ok) {
// throw new Error("Erreur lors de la récupération des données");
// }

// const data = await response.json();
// setMovies(data.results);
// } catch (error) {
// console.error("Erreur lors de l'appel API :", error);
// } finally {
// setLoading(false);
// }
// };

// fetchMovies();
// }, [page]);
////if (loading) return <p>Chargement des données...</p>;
return (
<>
<h1 id="section" className='filme'>FILME: </h1>

{movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <>
          <div onClick={() => window.scrollTo(0, 0)} className='mlist'>
            {movies.map(movie => (
              <MoviesCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="pagination">
            {[...Array(5)].map((_, i) => (
              <a className="pn" href='#section'>
              <button
                key={i}
                className={page === i + 1 ? 'active' : ''}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
export default Mlist ;