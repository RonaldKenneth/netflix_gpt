import { useDispatch, useSelector } from "react-redux";
import { addTopRatedNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK_TopRated } from "./constants";
import { useEffect } from "react";

const useTopRatedNow = ()=>{
    const dispatch = useDispatch();
    
    const topRatedNow = useSelector(store => store.movies.topRatedNow)

    const getTopRatedNow = async ()=>{
        const data = await fetch(TMDB_APILINK_TopRated, TMDB_API);
        const json = await data.json();
        dispatch(addTopRatedNow(json.results));
      }
      useEffect(()=>{
       !topRatedNow && getTopRatedNow();
      },[]);

}

export default useTopRatedNow;