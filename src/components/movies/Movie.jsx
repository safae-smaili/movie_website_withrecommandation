import React from "react";
import { useEffect } from "react";
function Movie(){
    const getMovie =()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=b24188948d9a603274c706ed3a994d8f')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }
    useEffect(()=>{
       getMovie() 
    },[])

    return<>
    <p></p>
    </>
}
export default Movie