import { createSlice } from "@reduxjs/toolkit";
   const initialState = {
 Song:[],
quotes:[],
url:"",
img:"",
 Movie:null,

}
const counterSlice = createSlice({

  name: "counter",
  initialState,
  reducers: {
    Song: (state,actions) => {
      state.Song =actions.payload
    },
 mega: (state,actions) => {
      state.url =actions.payload
    },
  Movies: (state,actions) => {
      state.Movie =actions.payload
    },
    Imgess: (state,actions) => {
      state.img =actions.payload
    },
    Quotes: (state,actions) => {
      state.quotes=actions.payload
    },
  },
});

export const {mega, Quotes, Song,Movies,Imgess } = counterSlice.actions;
export default counterSlice.reducer;