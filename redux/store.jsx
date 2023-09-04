import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./slices/adverts";

const store = configureStore({
    reducer:{
        adverts: advertsReducer
    }
});

export default store;