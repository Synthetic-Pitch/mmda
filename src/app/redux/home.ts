import { createSlice,PayloadAction } from "@reduxjs/toolkit"; 

type State = {
    todaysCoding : boolean
}

export const initialState:State = {
    todaysCoding : false
}

const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{
        setTodaysCoding : (state,action:PayloadAction<boolean>)=>{
            state.todaysCoding = action.payload
        }
    }
})

export const {
    setTodaysCoding,
} = homeSlice.actions
export default homeSlice.reducer;