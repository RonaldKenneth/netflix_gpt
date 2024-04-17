import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecndContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.playingNow && (
      <div className="bg-black">
        {" "}
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} dt={movies.playingNow} />
          <MovieList title={"Popular"} dt={movies.popularNow} />
          <MovieList title={"Top Rated"} dt={movies.topRatedNow} />
          <MovieList title={"Upcoming"} dt={movies.upComingNow} />
        </div>
      </div>
    )
  );
};

export default SecndContainer;
