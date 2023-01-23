import {createSlice} from "@reduxjs/toolkit";

export const SettingsSlice = createSlice({
    name:"settings",
    initialState:{
        loader:"d-none"
    },
    reducers:{
        ShowLoder:(state)=>{
            state.loader=" "
        },
        HideLoder:(state)=>{
            state.loader="d-none"
        },
    },
});

export const {ShowLoder,HideLoder}=SettingsSlice.actions;
export default SettingsSlice.reducer ;