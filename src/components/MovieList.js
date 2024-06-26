import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, dt }) => {
  return (
    //
    <div className="px-2 md:px-6">
      <h1 className="text-xl md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className=" flex ">
          {dt?.map((movie) => (
            <MovieCard key={movie.id} dt={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
