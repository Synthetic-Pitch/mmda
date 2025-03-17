import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type State = {
    loginState:{
        login_username:string;
        login_password:string;
    },
    inputTypeError:{
        username:boolean;
        password:boolean;
    },
    buttonTrigger:boolean
}

export const initialState : State = {
    loginState:{
        login_username:'',
        login_password:''
    },
    inputTypeError:{
        username:false,
        password:false
    },
    buttonTrigger:false
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        setLogin_Username : (state,action:PayloadAction<string>)=>{
            state.loginState.login_username = action.payload;
        },
        setLogin_Password : (state,action:PayloadAction<string>)=>{
            state.loginState.login_password = action.payload
        },
        setTypeError_Username : (state,action:PayloadAction<boolean>)=>{
            state.inputTypeError.username = action.payload
        },
        setTypeError_Password : (state,action:PayloadAction<boolean>)=>{
            state.inputTypeError.password = action.payload
        },
        setBtnTrigger : (state)=>{
            state.buttonTrigger = !state.buttonTrigger
        }
        
        
    }
})

export const {
    setLogin_Username,setLogin_Password,setTypeError_Username,setTypeError_Password,
    setBtnTrigger
} = loginSlice.actions
export default loginSlice.reducer;