import Ahader from "../components/common/Ahader"
import Mlist from "../components/movies/Mlist"
// import Movie from "../components/movies/Movie"
import Hader from "../components/common/Hader"
//import MoviesCard from "../components/movies/MovieCard"
import Movielist from "../components/movies/Slist"
import { Link } from "react-router"
import {useState, useEffect} from "react";
import Slist from "../components/movies/Slist"
import Lmlist from "../components/movies/Lmlist"
function Accueil({movies,page,setPage,loading}){
    const [lsmovies, setLsmovies] = useState([]);
      useEffect(() => {
    // Charger les films au démarrage
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setLsmovies(storedMovies);
  }, []);

    const ranmovie=movies[Math.floor(Math.random()*movies.length)];
    if(loading) return <p>Chargement...</p>
    return (<div>
      <Link to={`/Movies/${ranmovie.id}`}>
      <div className="subheader" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${ranmovie.backdrop_path})`}}>
    <Hader/>
    
    <Ahader id='section2' movies={movies} ranmovie={ranmovie} />
   
    </div> 
    </Link>
    {/* <Slist movies={lsmovies}/> */}
    
    <Mlist movies={movies} page={page} setPage={setPage}/>
    <Lmlist movies={lsmovies}/>
    </div>)
    
}
export default Accueil