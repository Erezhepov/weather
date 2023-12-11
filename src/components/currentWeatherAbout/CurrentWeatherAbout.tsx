import React from 'react';
import s from './CurrentWeatherAbout.module.scss'
import {useAppSelector} from "../../hooks/hooks";

const CurrentWeatherAbout = () => {
    const {name, weather} = useAppSelector(state => state.currentWeather)
    return (
        <div className={s.content}>
            <div className={s.city}>
                {name}
                <p>{weather.description}</p>
            </div>
        </div>
    );
};

export default CurrentWeatherAbout;