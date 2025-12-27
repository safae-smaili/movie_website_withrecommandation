import s from '../../style/moviedl.module.css'
export default function Moviedl({movie}){
//console.log(movie.genres['name'])
    return(<>
    <div>
    <div className={s.show}>
         <img className={s.poster} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title}  />
        
    
    <div className={s.minfo}>
        <h1 className={s.title}>{movie.title}</h1>
       
            
        <p className={s.description}>
                {movie.overview}
            </p>
     <div>
        <div className={s.ty}>
         {movie.genres?.map((genre) => (
             <span className={s.type} key={genre.id}>{genre.name}</span>
              

            ))}
        </div>
        <p>{movie.release_date}</p>
        </div>
    </div>
    
    </div>
   </div>
    </>)
}