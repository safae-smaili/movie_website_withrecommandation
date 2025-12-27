import React from 'react'
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Accueil from './pages/Accueil'
import Ajouter from './pages/Ajouter';
import Details from './pages/Details';
import Recherche from './pages/Recherche';

import NotFound from './components/common/NotFound';
import Foter from './components/common/Foter';
function App() {
  const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); 
    //const totalPages = 5;

    useEffect(() => {
const fetchMovies = async () => {
try {
const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=b24188948d9a603274c706ed3a994d8f&page=${page}`);
if (!response.ok) {
throw new Error("Erreur lors de la récupération des données");
}

const data = await response.json();
setMovies(data.results);
} catch (error) {
console.error("Erreur lors de l'appel API :", error);
} finally {
setLoading(false);
}
};

fetchMovies();
}, [page]);


  return (
    <>
      
      
      
        {/* <Header/> */}
        <Routes>

          <Route path="/" element={<Accueil movies={movies} page={page} setPage={setPage} loading={loading}/>}/>
          <Route path="/Recherche" element={<Recherche movies={movies} page={page} setPage={setPage}/>}/>
          <Route path="/Ajouter" element={<Ajouter/>}/>
          <Route path="/Movies/:id" element={<Details movies={movies}/>}/>


          <Route path="*" element={<NotFound/>} />

        </Routes>

        <Foter/>
      
      
    </>
  )
}

export default App
