import { configureStore } from "@reduxjs/toolkit";
import effectSlice from "./effectSlice";
import loginSlice from "./login";

const store =configureStore({
    reducer:{
        effectSlice:effectSlice,
        loginSlice:loginSlice
    }
})

export default store