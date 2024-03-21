import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/api";
import {HourlyWeatherResponse} from "../../models/hourlyWeather.models";


export const hourlyWeatherThunk = createAsyncThunk<HourlyWeatherResponse, string, {rejectValue: string | null}>('hourlyWeather',
    async (name, {rejectWithValue}) => {
    try {
        const response = await instance.get(`forecast?q=${name}&appid=faffa70c89f89ad08683cf373e1243ce`)
        const data = response.data
        debugger
        return data
    }
    catch (e){
        return rejectWithValue('Ошибка при получении часового прогноза')
    }
})