import React from 'react';
import s from './HourlyForecastItem.module.scss'
import Icon from "../imageIcon/Icon";
import {HourlyForecastInfo} from "../../models/hourlyForecast.models";

interface IHourlyForecastItem{
    item: HourlyForecastInfo
}

const HourlyForecastItem: React.FC<IHourlyForecastItem> = ({item}) => {
    return (
        <div className={s.item}>
            <div className={s.time}>{item.dt_txt && item.dt_txt.slice(10,16)}</div>
            <div className={s.icon}>
                <Icon icon={item.weather[0].icon} />
            </div>
            <p className={s.temp}>{item.main.temp && Math.round(item.main.temp - 273.15)}°C</p>
            <p className={s.speed}>{item.wind.speed && Math.round(item.wind.speed)}km/h</p>
        </div>
    );
};

export default HourlyForecastItem;