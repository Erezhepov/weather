import {createSlice} from "@reduxjs/toolkit";
import {HourlyWeatherState} from "../../models/hourlyWeather.models";
import {hourlyWeatherThunk} from "../thunks/hourlyWeather.thunk";

const initialState: HourlyWeatherState = {
    loading: false,
    error: null,
    city: {
        name: null
    },
    list: [],
    message: null
}

export const hourlyWeatherSlice = createSlice({
    name: 'hourlyWeatherSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(hourlyWeatherThunk.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(hourlyWeatherThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.error = null
            state.list = payload.list.slice(0, 5)
            state.message = payload.message
            state.city = payload.city
        })
        builder.addCase(hourlyWeatherThunk.rejected, (state, {payload}) => {
            state.loading = false
            payload ? state.error = payload : state.error = null
        })
    }
})

export const {reducer} = hourlyWeatherSlice