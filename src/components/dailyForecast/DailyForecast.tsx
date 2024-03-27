import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {dailyForecastThunk} from "../../store/thunks/dailyForecast.thunk";

const DailyForecast = () => {
    const cityName = useAppSelector(state => state.currentWeather.name)
    const dispatch = useAppDispatch()
    useEffect(() => {
        debugger
        dispatch(dailyForecastThunk(cityName))
    }, [cityName]);

    return (
        <div>
            DailyForecast
        </div>
    );
};

export default DailyForecast;