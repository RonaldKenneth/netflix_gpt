import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name:"Language",
    initialState:{
        lang:"en",
    },
    reducers:{
        selectLanguage: (state,action)=>{
            state.lang = action.payload;
        },
    },
});

export const {selectLanguage} = langSlice.actions;

export default langSlice.reducer;