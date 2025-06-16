import { createSlice } from "@reduxjs/toolkit";

type State = {
    Gov_ID:{
        image1:string;
        image2:string;
    },
    OR_CR:{
        image1:string;
        image2:string;
    },
    Ticket:{
        image1:string;
    },
    License:{
        image1:string;
        image2:string;
    }
}

const initialState:State = {
    Gov_ID:{
        image1: '',
        image2: '',
    },
    OR_CR:{
        image1: '',
        image2: '',
    },
    Ticket:{
        image1: '',
    },
    License:{
        image1: '',
        image2: '',
    }

}

const reclamationSlice = createSlice({
    name:'reclamation',
    initialState,
    reducers:{
        setGov_ID_Image1:(state,action)=>{
            state.Gov_ID.image1 = action.payload
        },
        setGov_ID_Image2:(state,action)=>{
            state.Gov_ID.image2 = action.payload
        },
        setOR_CR_Image1:(state,action)=>{
            state.OR_CR.image1 = action.payload
        },
        setOR_CR_Image2:(state,action)=>{
            state.OR_CR.image2 = action.payload
        },
        
        setTicket_Image1:(state,action)=>{
            state.Ticket.image1 = action.payload
        },
        setLicense_Image1:(state,action)=>{
            state.License.image1 = action.payload
        },
        setLicense_Image2:(state,action)=>{
            state.License.image2 = action.payload
        },
        reset: () => initialState,  // <-- reset state to initialState
    }
})

export const {
    setGov_ID_Image1,setGov_ID_Image2,
    setOR_CR_Image1,setOR_CR_Image2,
    setTicket_Image1,
    setLicense_Image1,setLicense_Image2,
    reset
} = reclamationSlice.actions;
export default reclamationSlice.reducer;