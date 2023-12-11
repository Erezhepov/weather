import React, {useEffect} from 'react';
import s from './HourlyForecast.module.scss'
import {instance} from "../../api/api";
import {useAppSelector} from "../../hooks/hooks";

const HourlyForecast = () => {
    const {name} = useAppSelector(state => state.currentWeather)

    useEffect(() => {
        debugger
        instance.get(`forecast?q=${name}&appid=faffa70c89f89ad08683cf373e1243ce`).then((state) => {
            console.log(state)
        })
    }, [name]);

    return (
        <div className={s.item}>
            <h2 className="title">Hourly Forecast:</h2>
        </div>
    );
};

export default HourlyForecast;