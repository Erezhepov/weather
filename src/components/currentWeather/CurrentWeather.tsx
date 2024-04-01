import React, {useEffect} from 'react';
import s from './CurrentWeather.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import Icon from '../imageIcon/Icon';
import CurrentWeatherInfo from "../currentWeatherInfo/CurrentWeatherInfo";
import {currentWeatherThunk} from "../../store/thunks/currentWeather.thunk";

const CurrentWeather = React.memo(() => {
    console.log('CurrentWeather')
    const dispatch = useAppDispatch()
    const temp = useAppSelector(state => state.currentWeather.temp)
    const weather = useAppSelector(state => state.currentWeather.weather)
    const feels_like = useAppSelector(state => state.currentWeather.feels_like)

    useEffect(() => {
        dispatch(currentWeatherThunk('astana'))
    }, [dispatch]);

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
});

export default CurrentWeather;