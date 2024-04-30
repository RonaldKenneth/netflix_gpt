import React from "react";
import useMovieTrailer from "../utils/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBG = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div >
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBG;
