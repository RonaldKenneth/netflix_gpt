import React, { useRef, useState } from "react";
import Lang from "../utils/LangConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { TMDB_API, searchMovieTMDBapi } from "../utils/constants";
import { addGPTresults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.Language.lang);
  const searchValue = useRef(null);
  const apikey = useRef(null);
  const dispatch = useDispatch();
  const [apiAvailable, setApiAvailable] = useState(() => {
    const dt = localStorage.getItem("apikey") || "null";
    return JSON.parse(dt);
  });
  console.log(apiAvailable);
  const handleApiKeyStore = () => {
    localStorage.setItem("apikey", JSON.stringify(apikey.current.value));
    setApiAvailable(() => {
      const dt = localStorage.getItem("apikey") || "null";
      return JSON.parse(dt);
    })
  };

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      searchMovieTMDBapi.api1 + movie + searchMovieTMDBapi.api2,
      TMDB_API
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClk = async () => {
    

    const gptQuery =
      "Act as a movie recommedation system and suggest some movies for the query :" +
      searchValue.current.value +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Leo, Jailer, Vikram, Santosh Subramaniam, Anniyan";

    openai.apiKey = apiAvailable;
    
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices) return (<div className='bg-red text-3xl text-black'>No movies found !</div> );
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
    // const gptMovies = [
    //   "Aval",
    //   " Maya",
    //   " Kanchana",
    //   " Demonte Colony",
    //   " Pisasu",
    // ];

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const TMDBresults = await Promise.all(promiseArray);
    dispatch(
      addGPTresults({ movieNames: gptMovies, movieResults: TMDBresults })
    );

    
  };

  return (
    <>
      <div className="pt-[50%] md:pt-[10%] flex justify-center">
        <form
          className="w-full mb-10 md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          {apiAvailable && (
            <>
              <input
                type="text"
                ref={searchValue}
                className="p-2 m-2 md:m-4 col-span-9 text-xs md:text-base"
                placeholder={Lang[selectedLang].gptSearchplaceholder}
              />
              <button
                onClick={handleGptSearchClk}
                className="col-span-3 mx-1 my-2 py-1 md:m-4 md:py-2 md:px-4 bg-red-700 text-white rounded-lg"
              >
                {Lang[selectedLang].search}
              </button>{" "}
            </>
          )}

          {!apiAvailable && (
            <>
              <input
                type="text"
                ref={apikey}
                className="p-2 m-2 md:m-4 col-span-9 text-xs md:text-base"
                placeholder={Lang[selectedLang].APIrequestPlaceHolder}
              />
              <button
                onClick={handleApiKeyStore}
                className="col-span-3 mx-1 my-2 py-1 md:m-4 md:py-2 md:px-4 bg-green-700 text-white rounded-lg"
              >
                {Lang[selectedLang].use}
              </button>
            </>
          )}
        </form>
      </div>{!apiAvailable && <p className="text-white bg-red-600 text-center p-4">
        {Lang[selectedLang].AboutAPIrequest}
      </p>}
      
    </>
  );
};

export default GptSearchBar;
