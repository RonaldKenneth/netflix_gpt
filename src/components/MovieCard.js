import React from "react";
import { MovieImg } from "../utils/constants";

let genreids = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const MovieCard = ({ dt }) => {
  const { poster_path, title, genre_ids, vote_average } = dt;
 
  return (
    <div className="w-28 md:w-48 pr-4 ">
      {/* <div className="absolute -mb-5 w-44 h-[20%] pl-2 text-transparent hover:bg-gray-500 hover:text-white">
        <div className="text-xl font-bold">{title}</div>
        <br />
        <div className="italic">
          {genre_ids.map((dt) => {
            return genreids[dt] + ", ";
          })}
        </div>
        <br />
        <div>Rating: {vote_average.toFixed(1)}</div>
      </div> */}
      <img
        className=""
        src={MovieImg + poster_path}
        alt="MovieCard"
      />
    </div>
  );
};

export default MovieCard;