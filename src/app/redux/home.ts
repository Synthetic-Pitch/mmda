import { createSlice,PayloadAction } from "@reduxjs/toolkit"; 

type State = {
    todaysCoding : boolean
    trafficRoads: boolean
}

export const initialState:State = {
    todaysCoding : false,
    trafficRoads: false
}

const homeSlice = createSlice({
    name:'home',
    initialState,
    reducers:{
        setTodaysCoding : (state,action:PayloadAction<boolean>)=>{
            state.todaysCoding = action.payload
        },
        setTrafficRoads: (state,action:PayloadAction<boolean>)=>{
            state.trafficRoads = action.payload

        }
    }
})

export const {
    setTodaysCoding,setTrafficRoads
} = homeSlice.actions
export default homeSlice.reducer;