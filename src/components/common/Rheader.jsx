import { useState } from "react"
import Mlist from "../movies/Mlist";
import Movie from "../movies/Movie";
export default function Rheader({ setSearchMovies , movies }){
    const [title,setTitle]=useState('');
    //for the new fetch
    const [nmovies, setNMovies] = useState([]);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        if(title){
        
        try{
            const response= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b24188948d9a603274c706ed3a994d8f&query=${title}`);
            if (!response.ok) {
 throw new Error("Erreur lors de la récupération des données");}
            const data = await response.json();
            setSearchMovies(data.results);
            console.log(`Title:${title}, movie:${data.results}`)
        }catch (error) {
    console.error("Error fetching search results:", error);
  }}else{
    setSearchMovies(movies)
    console.log("we are here")
  }
        
    }
    return(<>
        <form onSubmit={handleSubmit}>
    <div className="Rheader">
        
        <input placeholder="Taper le nom du filme" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button>Chercher</button>
        
        {/* cosole.log(${title}) */}
    </div>
    </form>
    
    </>
)
}