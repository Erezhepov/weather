import React, {useEffect} from 'react';
import s from './HourlyForecast.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {hourlyWeatherThunk} from "../../store/thunks/hourlyWeather.thunk";
import Icon from "../imageIcon/Icon";

const HourlyForecast = () => {
    const {name} = useAppSelector(state => state.currentWeather)
    const {list} = useAppSelector(state => state.hourlyWeather)
    const dispatch = useAppDispatch()
    useEffect(() => {
        name && dispatch(hourlyWeatherThunk(name))
    }, [name]);
    return (
        <div className={s.body}>
            <h2 className="title">Hourly Forecast:</h2>
            <div className={s.items}>
                {list.map((item, index) => {
                    return <div key={index} className={s.item}>
                        <div className={s.time}>{item.dt_txt && item.dt_txt.slice(10,16)}</div>
                        <div className={s.icon}>
                            <Icon icon={item.weather[0].icon} />
                        </div>
                        <p className={s.temp}>{item.main.temp && Math.round(item.main.temp - 273.15)}°C</p>
                        <p className={s.speed}>{item.wind.speed && Math.round(item.wind.speed)}km/h</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default HourlyForecast;