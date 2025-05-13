import { configureStore } from "@reduxjs/toolkit";
import effectSlice from "./effectSlice";
import loginSlice from "./login";
import homeSlice from "./home";
import reclamationSlice from "./reclamation";
const store =configureStore({
    reducer:{
        effectSlice:effectSlice,
        loginSlice:loginSlice,
        homeSlice:homeSlice,
        reclamationSlice:reclamationSlice,
    }
})

export default store