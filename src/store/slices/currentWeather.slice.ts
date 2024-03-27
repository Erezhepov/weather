import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICurrentWeatherState} from "../../models/currentWeather.models";
import {currentWeatherThunk} from "../thunks/currentWeather.thunk";

const initialState: ICurrentWeatherState = {
    loading: false,
    error: null,
    name: '',
    temp_max: null,
    temp_min: null,
    temp: null,
    feels_like: null,
    humidity: null,
    pressure: null,
    wind: null,
    cloudy: null,
    weather: {
        main: null,
        description: null,
        icon: null
    },
    isOpenSidebar: true
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeatherSlice',
    initialState,
    reducers: {
        isOpenSidebarHandler: (state, {payload}: PayloadAction<boolean>) => {
            state.isOpenSidebar = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(currentWeatherThunk.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(currentWeatherThunk.rejected, (state, {payload}) => {
            state.loading = false
            state.error = payload || null
        })
        builder.addCase(currentWeatherThunk.fulfilled, (state, {payload}) => {
            const K: number = 273.15
            state.loading = false
            state.error = null
            state.name = payload.name
            state.temp = payload.main.temp - K
            state.temp_min = payload.main.temp_min - K
            state.temp_max = payload.main.temp_max - K
            state.feels_like = payload.main.feels_like - K
            state.humidity = payload.main.humidity
            state.pressure = payload.main.pressure
            state.wind = payload.wind.speed
            state.cloudy = payload.clouds.all
            state.weather.main = payload.weather[0].main
            state.weather.description = payload.weather[0].description
            state.weather.icon = payload.weather[0].icon
        })
    }
})

export const {reducer} = currentWeatherSlice
export const {isOpenSidebarHandler} = currentWeatherSlice.actions