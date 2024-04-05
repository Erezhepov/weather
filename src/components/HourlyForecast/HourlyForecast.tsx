import React, {useEffect} from 'react';
import s from './HourlyForecast.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {hourlyForecastThunk} from "../../store/thunks/hourlyForecast.thunk";
import {toast} from "react-toastify";
import HourlyForecastItem from "../hourlyForecastItem/HourlyForecastItem";

const HourlyForecast = () => {
    const name = useAppSelector(state => state.currentWeather.name)
    const error = useAppSelector(state => state.hourlyWeather.error)
    const list  = useAppSelector(state => state.hourlyWeather.list)
    const dispatch = useAppDispatch()
    useEffect(() => {
        name && dispatch(hourlyForecastThunk(name))
    }, [name]);
    error && toast.error(error)
    return (
        <div className={s.body}>
            <h2 className="title">Hourly Forecast:</h2>
            <div className={s.items}>
                {list.map((item, index) => <HourlyForecastItem item={item} key={index}/>)}
            </div>
        </div>
    );
};

export default HourlyForecast;