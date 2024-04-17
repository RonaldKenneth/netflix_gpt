import { useDispatch } from "react-redux";
import { addTopRatedNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK_TopRated } from "./constants";
import { useEffect } from "react";

const useTopRatedNow = ()=>{
    const dispatch = useDispatch();

    const getTopRatedNow = async ()=>{
        const data = await fetch(TMDB_APILINK_TopRated, TMDB_API);
        const json = await data.json();
        dispatch(addTopRatedNow(json.results));
      }
      useEffect(()=>{
        getTopRatedNow();
      },[]);

}

export default useTopRatedNow;