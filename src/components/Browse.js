import React, { useEffect } from "react";
import Header from "./Header";
import usePlayingNow from "../utils/usePlayingNow";
import MainContainer from "./MainContainer";
import SecndContainer from "./SecndContainer";

function Browse() {
  usePlayingNow();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecndContainer />
    </div>
  );
}

export default Browse;
