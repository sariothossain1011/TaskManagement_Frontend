import {createSlice} from "@reduxjs/toolkit";

export const SettingsSlice = createSlice({
    name:"settings",
    initialState:{
        loader:"d-none"
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader=" "
        },
        HideLoader:(state)=>{
            state.loader="d-none"
        },
    },
});

export const {ShowLoader,HideLoader}=SettingsSlice.actions;
export default SettingsSlice.reducer ;