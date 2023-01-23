import {configureStore} from "@reduxjs/toolkit";
import settingsResucer from "../State/SettingsSlice";
import taskSlice from "../State/TaskSlice";
import summarySlice from "../State/SummarySlice";
import profileSlice from "../State/ProfileSlice";

export default configureStore ({
    reducer:{
        settings:settingsResucer,
        task:taskSlice,
        summary:summarySlice,
        profile:profileSlice,
    }
})