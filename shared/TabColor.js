import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "./Colors";

const TabColor = createSlice({
    name: "TabColor",
    initialState: {
        background: Colors.BG,
        icons: Colors.TXT
    },
    reducers:{
        setTabColor: (state, action) => {
            state.background = action.payload.background
            state.icons = action.payload.icons
        }
    }
})

export const {setTabColor} = TabColor.actions

export default TabColor.reducer