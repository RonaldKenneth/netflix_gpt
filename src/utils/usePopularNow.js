import { useDispatch } from "react-redux";
import { addPopularNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK_Popular } from "./constants";
import { useEffect } from "react";

const usePopularNow = ()=>{
    const dispatch = useDispatch();

    const getPopularNow = async ()=>{
        const data = await fetch(TMDB_APILINK_Popular, TMDB_API);
        const json = await data.json();
        dispatch(addPopularNow(json.results));
      }
      useEffect(()=>{
        getPopularNow();
      },[]);

}

export default usePopularNow;