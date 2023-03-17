import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    addId:[],
    suraIndex:[],
    audioName:[],
    addColorToAyatAlsujud:[]
}
export const quranapiSlice = createSlice({
    initialState,
    name:"quranapiSlice",
    reducers:{
        addId:(state,action)=>{
            state.addId.push(action.payload)
        },
        suraIndix:(state,action)=>{
            state.suraIndex.push(action.payload)
        },
        audioName:(state,action)=>{
            state.audioName.push(action.payload)
        },
        addColorToAyatAlsujud:(state,action)=>{
            state.addColorToAyatAlsujud.push(action.payload)
        },
        athkar:(state,action)=>{
            state.addColorToAyatAlsujud.push(action.payload)
        },
    },

})

export const {addId,suraIndix,audioName,addColorToAyatAlsujud} = quranapiSlice.actions
export default quranapiSlice.reducer