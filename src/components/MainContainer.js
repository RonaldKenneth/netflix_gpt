import React from "react";
import { VideoTitle } from "./VideoTitle";
import VideoBG from "./VideoBG";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const playingNow = useSelector((store) => store.movies?.playingNow);
  if (!playingNow) return;
  const { title, overview, id } = playingNow[0];
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={title} overview={overview}/>
      <VideoBG movieId={id} />
    </div>
  );
};

export default MainContainer;
