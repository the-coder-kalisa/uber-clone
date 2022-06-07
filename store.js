import { configureStore } from "@reduxjs/toolkit";
import navSclice from './slices/navSclice';
export const store = configureStore({
    reducer: {
        nav: navSclice
    }
})