import { useDispatch, useSelector } from "react-redux";
import { addPopularNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK_Popular } from "./constants";
import { useEffect } from "react";

const usePopularNow = ()=>{
    const dispatch = useDispatch();

    const popularNow = useSelector(store => store.movies.popularNow)

    const getPopularNow = async ()=>{
        const data = await fetch(TMDB_APILINK_Popular, TMDB_API);
        const json = await data.json();
        dispatch(addPopularNow(json.results));
      }
      useEffect(()=>{
        !popularNow && getPopularNow();
      },[]);

}

export default usePopularNow;