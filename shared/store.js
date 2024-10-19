import { configureStore } from "@reduxjs/toolkit";
import TabColor from "./TabColor"

export default configureStore({
    reducer:{
        TabColor
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})