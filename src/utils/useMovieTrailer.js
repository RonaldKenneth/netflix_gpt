import { useEffect } from 'react'
import { TMDB_API } from './constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from './movieSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const movieTrailerChk = useSelector(store => store.movies.trailerVideo)
    const movieTrailer = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', TMDB_API);
      const json = await data.json();
      const filtered = json.results.filter((dt)=>dt.type=="Trailer")
      const trailer = filtered.length ? filtered[0] : json.result[0];
      dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{!movieTrailerChk && movieTrailer()},[])
}

export default useMovieTrailer