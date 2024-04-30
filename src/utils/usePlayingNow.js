import { useDispatch, useSelector } from "react-redux";
import { addPlayingNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK_Playing } from "./constants";
import { useEffect } from "react";

const usePlayingNow = ()=>{
    const dispatch = useDispatch();

    const playingNow = useSelector(store => store.movies.playingNow)

    const getPlayingNow = async ()=>{
        const data = await fetch(TMDB_APILINK_Playing, TMDB_API);
        const json = await data.json();
        dispatch(addPlayingNow(json.results));
      }
      useEffect(()=>{
        !playingNow && getPlayingNow();
      },[]);

}

export default usePlayingNow;