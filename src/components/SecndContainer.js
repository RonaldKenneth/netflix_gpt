import React from "react";
import MovieList from "./MovieList";
import Lang from "../utils/LangConstant";
import { useSelector } from "react-redux";

const SecndContainer = () => {
  const movies = useSelector((store) => store.movies);
  const selectedLang = useSelector((store) => store.Language.lang);
  return (
    movies.playingNow && (
      <div className="bg-black">
        <div className="md:-mt-40 pl-4 md:pl-5 relative z-20 ">
          <MovieList title={Lang[selectedLang].Now_Playing} dt={movies.playingNow} />
          <MovieList title={Lang[selectedLang].Popular} dt={movies.popularNow} />
          <MovieList title={Lang[selectedLang].Top_Rated} dt={movies.topRatedNow} />
          <MovieList title={Lang[selectedLang].Upcoming} dt={movies.upComingNow} />
        </div>
      </div>
    )
  );
};

export default SecndContainer;
