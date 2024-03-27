import {createSlice} from "@reduxjs/toolkit";
import {HourlyForecastState} from "../../models/hourlyForecast.models";
import {hourlyForecastThunk} from "../thunks/hourlyForecast.thunk";

const initialState: HourlyForecastState = {
    loading: false,
    error: null,
    city: {
        name: null
    },
    list: [],
    message: null
}

export const hourlyForecastSlice = createSlice({
    name: 'hourlyWeatherSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(hourlyForecastThunk.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(hourlyForecastThunk.fulfilled, (state, {payload}) => {
            state.loading = false
            state.error = null
            state.list = payload.list.slice(0, 6 )
            state.message = payload.message
            state.city = payload.city
        })
        builder.addCase(hourlyForecastThunk.rejected, (state, {payload}) => {
            state.loading = false
            payload ? state.error = payload : state.error = null
        })
    }
})

export const {reducer} = hourlyForecastSlice