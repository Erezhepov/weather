import React from 'react';
import s from './CurrentWeather.module.scss'
import {useAppSelector} from "../../hooks/hooks";
import Icon from '../imageIcon/Icon';
import CurrentWeatherInfo from "../currentWeatherInfo/CurrentWeatherInfo";

const CurrentWeather = () => {
    const {temp, weather, feels_like} = useAppSelector(state => state.currentWeather)

    return (
        <div className={s.info}>
            <div>
                <div className={s.degree}>{temp && Math.round(temp)}°C</div>
                <div className={s.feelsLike}>Feels like: <span>{feels_like && Math.round(feels_like)}°C</span></div>
            </div>
            <Icon icon={weather.icon}  />
            <CurrentWeatherInfo />
        </div>
    );
};

export default CurrentWeather;