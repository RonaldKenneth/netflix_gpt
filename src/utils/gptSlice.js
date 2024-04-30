import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptView: false,
        gtpMovies:[],
        movieNames:[],
    },
    reducers:{
        toggleGptView: (state,action)=>{
            state.gptView = !state.gptView;
        },
        addGPTresults:(state,action)=>{
            const{movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
    }
})

export const {toggleGptView, addGPTresults } = gptSlice.actions;

export default gptSlice.reducer;