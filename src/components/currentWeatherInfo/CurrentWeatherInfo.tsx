import React from 'react';
import s from './CurrentWeatherInfo.module.scss'
import {useAppSelector} from "../../hooks/hooks";

const CurrentWeatherInfo = () => {
    const state = useAppSelector(state => state.currentWeather)

    return (
        <div className={s.content}>
            <h3>Weather Details...</h3>
            <div className={s.body}>
                <p className={s.description}>{state.weather.description}</p>
                <p className={s.feelsLike}>Feels like <span>{state.feels_like && Math.round(state.feels_like)}°C</span></p>
                <p className={s.maxTemp}>Temp max <span>{state.temp_max && Math.round(state.temp_max)}°C</span></p>
                <p className={s.minTemp}>Temp min <span>{state.temp_min && Math.round(state.temp_min)}°C</span></p>
                <p className={s.humidity}>Humidity <span>{state.humidity && Math.round(state.humidity)}%</span></p>
                <p className={s.cloudy}>Cloudy <span>{state.cloudy && Math.round(state.cloudy)}%</span></p>
                <p className={s.wind}>Wind <span>{state.wind && Math.round(state.wind)}km/h</span></p>
            </div>
        </div>
    );
};

export default CurrentWeatherInfo;