import { useDispatch } from "react-redux";
import { addUpcomingNow } from "./movieSlice";
import { TMDB_API, TMDB_APILINK_UpComing } from "./constants";
import { useEffect } from "react";

const useUpComingNow = ()=>{
    const dispatch = useDispatch();

    const getUpComingNow = async ()=>{
        const data = await fetch(TMDB_APILINK_UpComing, TMDB_API);
        const json = await data.json();
        dispatch(addUpcomingNow(json.results));
      }
      useEffect(()=>{
        getUpComingNow();
      },[]);

}

export default useUpComingNow;