import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { NetFlix_BG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={NetFlix_BG} alt="NetFlix_BG" />
      </div>
      <div>
      <GptSearchBar />
      <GptSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
