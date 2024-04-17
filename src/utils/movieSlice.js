import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        playingNow: null,
        popularNow: null,
        topRatedNow:null,
        upComingNow:null,
        trailerVideo: null,
    },
    reducers: {
        addPlayingNow: (state, action) =>{
          state.playingNow  = action.payload;
        },
        addPopularNow: (state, action) =>{
          state.popularNow  = action.payload;
        },
        addTopRatedNow: (state, action) =>{
          state.topRatedNow  = action.payload;
        },
        addUpcomingNow: (state, action) =>{
          state.upComingNow  = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
          }
    }
});

export const {addPlayingNow,addPopularNow, addTopRatedNow, addUpcomingNow, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer