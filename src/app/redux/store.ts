import { configureStore } from "@reduxjs/toolkit";
import effectSlice from "./effectSlice";
import loginSlice from "./login";
import homeSlice from "./home";

const store =configureStore({
    reducer:{
        effectSlice:effectSlice,
        loginSlice:loginSlice,
        homeSlice:homeSlice
    }
})

export default store