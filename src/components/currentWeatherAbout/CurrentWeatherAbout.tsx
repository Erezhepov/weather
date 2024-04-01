import React, {useEffect} from 'react';
import s from './CurrentWeatherAbout.module.scss'
import {useAppSelector} from "../../hooks/hooks";
import {toast} from "react-toastify";

const CurrentWeatherAbout = () => {
    const name = useAppSelector(state => state.currentWeather.name)
    const weather = useAppSelector(state => state.currentWeather.weather)
    const error = useAppSelector(state => state.currentWeather.error)

    useEffect(() => {
        error && toast.error(error)
    }, [error]);
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