import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import Hader from "../components/common/Hader"
import Mlist from "../components/movies/Mlist"
import Slist from "../components/movies/Slist"
import Moviedl from "../components/movies/Moviedl";

function Details({movies}){
    const [movie,setMovie]=useState({});
    const [simillar,setSimilar]=useState([]);
    const params=useParams();

    const fetchSiilarML=async(movieId)=>{
        try{
            const response=await fetch(`https://movierecommendation-production-a624.up.railway.app/api/similar/${movieId}`);
            
            const data=await response.json()
            console.log(data);
            
        

            const recommendations= data.recommendations||[];
            console.log("🔍 Clés disponibles:", data[0]);
            if(!recommendations||recommendations.length==0){
                return[]
            }
            
            const detailedMovies=await Promise.all(
                recommendations.map(async (rec)=>{
                    const movieResponse=await fetch(
                        
                        `https://api.themoviedb.org/3/movie/${rec.id}?api_key=b24188948d9a603274c706ed3a994d8f`
                    );
                    
                    const movieData=await movieResponse.json();
                    return movieData;
                })
            );
            return detailedMovies;
        
        }catch(error){
            console.error("API ERREUR",error);
            return[];
        }
    }



    useEffect( ()=>{
        console.log(params)
        const getMovie = async()=>{
            console.log(params.id)
            const result =await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=b24188948d9a603274c706ed3a994d8f`)
            const data= await result.json();
            setMovie(data);
            console.log(movie)

            const similar=await fetchSiilarML(params.id);
            setSimilar(similar);
        }
        getMovie();
    },[params.id])

    return <>
   <Hader/>
  
   <Moviedl movie={movie}/>
   <h1 className='filme'>Films que vous pourriez aimmer:</h1>
   
    <Slist movies={simillar}/>
    {/* <Mlist movies={movies}/> */}
    </>
}
export default Details