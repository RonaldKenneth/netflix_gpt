import React from "react";
import Header from "./Header";
import usePlayingNow from "../utils/usePlayingNow";
import MainContainer from "./MainContainer";
import SecndContainer from "./SecndContainer";
import usePopularNow from "../utils/usePopularNow";
import useTopRatedNow from "../utils/useTopRatedNow";
import useUpComingNow from "../utils/useUpComingNow";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

function Browse() {
  usePlayingNow();
  usePopularNow();
  useTopRatedNow();
  useUpComingNow();

  const toggleGptView = useSelector((store) => store.gpt.gptView);

  return (
    <div >
      <Header />
      {toggleGptView ? (
        <GptSearchPage />
      ) : (
        <div>
          <MainContainer />
          <SecndContainer />
        </div>
      )}
    </div>
  );
}

export default Browse;
