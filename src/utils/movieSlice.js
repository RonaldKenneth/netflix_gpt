import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        playingNow: null,
        trailerVideo: null,
    },
    reducers: {
        addPlayingNow: (state, action) =>{
          state.playingNow  = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
          }
    }
});

export const {addPlayingNow, addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer