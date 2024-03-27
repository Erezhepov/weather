import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/api";


export const dailyForecastThunk = createAsyncThunk<any, string, {rejectValue: string | null}>('dailyForecastThunk',
    async (cityName, {rejectWithValue}) => {
    try {
        const response = await instance.get(`forecast?q=${cityName}&appid=faffa70c89f89ad08683cf373e1243ce`)
        const data = response.data
        return data
    }catch (e){
        return rejectWithValue('Not found')
    }

})