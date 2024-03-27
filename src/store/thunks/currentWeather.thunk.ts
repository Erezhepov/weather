import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/api";
import {ICurrentWeatherResponse} from "../../models/currentWeather.models";


export const currentWeatherThunk = createAsyncThunk<ICurrentWeatherResponse, string, {rejectValue: string | null}>('currentWeather',
    async (cityName, {rejectWithValue}) => {
        try {
            const response = await instance.get(`weather?appid=faffa70c89f89ad08683cf373e1243ce&q=${cityName}`)
            const data = response.data
            return data
        }catch (e){
            return rejectWithValue('Not found')
        }
})