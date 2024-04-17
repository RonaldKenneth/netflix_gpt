import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, dt }) => {
  return (
    //
    <div className="p-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {dt?.map((movie) => (
            <MovieCard key={movie.id} imgPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
