import React, { useEffect } from "react";
import Header from "./Header";
import usePlayingNow from "../utils/usePlayingNow";
import MainContainer from "./MainContainer";
import SecndContainer from "./SecndContainer";
import usePopularNow from "../utils/usePopularNow";
import useTopRatedNow from "../utils/useTopRatedNow";
import useUpComingNow from "../utils/useUpComingNow";

function Browse() {
  usePlayingNow();
  usePopularNow();
  useTopRatedNow();
  useUpComingNow();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecndContainer />
    </div>
  );
}

export default Browse;
