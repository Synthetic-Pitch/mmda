import { configureStore } from "@reduxjs/toolkit";
import effectSlice from "./effectSlice";

const store =configureStore({
    reducer:{
        effectSlice:effectSlice
    }
})

export default store