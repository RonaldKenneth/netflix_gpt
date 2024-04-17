import { useDispatch } from "react-redux";
import { addPlayingNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK } from "./constants";
import { useEffect } from "react";

const usePlayingNow = ()=>{
    const dispatch = useDispatch();

    const getPlayingNow = async ()=>{
        const data = await fetch(TMDB_APILINK, TMDB_API);
        const json = await data.json();
        dispatch(addPlayingNow(json.results));
      }
      useEffect(()=>{
        getPlayingNow();
      },[]);

}

export default usePlayingNow;