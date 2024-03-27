import {createSlice} from "@reduxjs/toolkit";
import {IDailyForecastState} from "../../models/dailyForecast.models";

const initialState: IDailyForecastState = {
    error: null,
    loading: false
}

export const dailyForecastSlice = createSlice({
    name: 'dailyWeatherSlice',
    initialState,
    reducers: {

    }
})