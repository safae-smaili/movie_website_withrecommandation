import Hader from "../components/common/Hader"
import Rheader from "../components/common/Rheader"
import Mlist from "../components/movies/Mlist"
import { useState } from "react";
function Recherche({movies, page, setPage}){
    const [searchMovies, setSearchMovies] = useState(movies);
    return (<>
    <Hader/>
    <Rheader setSearchMovies={setSearchMovies} movies={movies}/>
    <span className="disp">
    <Mlist  movies={searchMovies} page={page} setPage={setPage} />
    </span>
    </>)
}
export default Recherche