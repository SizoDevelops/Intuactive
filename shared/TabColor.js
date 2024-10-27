import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "./Colors";

const TabColor = createSlice({
    name: "TabColor",
    initialState: {
        background: Colors.BG,
        icons: Colors.TXT,
        display: "flex"
    },
    reducers:{
        setTabColor: (state, action) => {
            state.background = action.payload.background
            state.icons = action.payload.icons
            state.display = action.payload.display
        }
    }
})

export const {setTabColor} = TabColor.actions

export default TabColor.reducer