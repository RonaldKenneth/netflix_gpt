import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  
  if (!movieNames) return null;
  return (
    <div className=" text-white ">
      <div className="bg-black bg-opacity-70">
        {movieNames.map((movie, idx) => (
          <MovieList key={movie} title={movie} dt={movieResults[idx]} />
        ))}
      </div>
    </div>
  );
};

export default GptSuggestion;
