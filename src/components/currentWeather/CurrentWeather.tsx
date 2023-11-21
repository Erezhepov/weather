import React from 'react';
import s from './CurrentWeather.module.scss'
import {useAppSelector} from "../../hooks/hooks";
import Icon from '../imageIcon/Icon';

const CurrentWeather = () => {
    const {temp, name, weather} = useAppSelector(state => state.currentWeather)

    return (
        <div className={s.info}>
            <div className={s.degree}>{temp && Math.round(temp)}°C</div>
            <span className={s.city}>{name}</span>
            <Icon icon={weather.icon}  />
        </div>
    );
};

export default CurrentWeather;