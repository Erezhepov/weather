import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {reducer as current} from "./slices/currentWeather.slice";


const rootReducers = combineReducers({
    currentWeather: current
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch