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
    buttonTrigger:boolean,
    createAccount:{
        create_username:string;
        create_password:string;
        create_gmail:string;
    }
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
    buttonTrigger:false,
    createAccount:{
        create_username:'',
        create_password:'',
        create_gmail:'',
    }
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
        },
        setCreate_Username:(state,action:PayloadAction<string>)=>{
            state.createAccount.create_username = action.payload
        },
        setCreate_Password:(state,action:PayloadAction<string>)=>{
            state.createAccount.create_password = action.payload
        },
        setCreate_Gmail : (state,action:PayloadAction<string>)=>{
            state.createAccount.create_gmail = action.payload;
        }
        
    }
})

export const {
    setLogin_Username,setLogin_Password,setTypeError_Username,setTypeError_Password,
    setBtnTrigger,setCreate_Username,setCreate_Password,setCreate_Gmail

} = loginSlice.actions
export default loginSlice.reducer;