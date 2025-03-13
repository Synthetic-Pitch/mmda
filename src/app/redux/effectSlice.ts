import { createSlice } from "@reduxjs/toolkit";

type State = {
    createAccount : boolean
}

export const initialState :State = {
    createAccount : false,
}

const effectSlice = createSlice({
    name : 'effect',
    initialState,
    reducers : {
        setcreateAccount : (state) => {
            state.createAccount = !state.createAccount
        }
    }
})

export const {
    setcreateAccount
} = effectSlice.actions
export default effectSlice.reducer