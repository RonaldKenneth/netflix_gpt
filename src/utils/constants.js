export const NetFlix_BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_medium.jpg";
export const NetFlix_Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const Netflix_Avatar =
  "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const TMDB_API = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTk2MWM2OGViYTc1MmFlZjFkOGY0Y2Y3NmZjY2Y0ZCIsInN1YiI6IjY2MWZhOWMzMWNmZTNhMDE2NDliNmU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q4BONBYHreDmTZKsZr81ESfpzydhJLvcIPBuGptEm6E',
    }
  };

export const MovieImg ="https://image.tmdb.org/t/p/w500";

export const TMDB_APILINK_Playing = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
export const TMDB_APILINK_Popular = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
export const TMDB_APILINK_TopRated = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
export const TMDB_APILINK_UpComing = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const Supported_Language =[{identifier:"en",name:"English"},{identifier:"tamil",name:"Tamil"},{identifier:"spanish",name:"Spanish"}];



export const searchMovieTMDBapi ={api1:"https://api.themoviedb.org/3/search/movie?query=",api2: "&include_adult=false&language=en-US&page=1"}