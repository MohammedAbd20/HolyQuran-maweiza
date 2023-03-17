import { configureStore } from "@reduxjs/toolkit";
import quranapiSlice from "./Slice/quranapiSlice";

export const store = configureStore({
    reducer:{
        quran : quranapiSlice,
    }
})