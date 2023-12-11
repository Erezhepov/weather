import React, {useEffect} from 'react';
import s from './HomePage.module.scss'
import {useAppDispatch} from "../../hooks/hooks";
import {currentWeather} from "../../store/thunks/currentWeather.thunk";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import CurrentWeatherAbout from "../../components/currentWeatherAbout/CurrentWeatherAbout";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";

const HomePage = () => {
    const dispatch: any = useAppDispatch()

    useEffect(() => {
        dispatch(currentWeather('astana'))
    }, []);
    return (
        <div className={s.homePage}>
            <div className={`container ${s.items}`}>
                <CurrentWeatherAbout />
                <CurrentWeather />
                <HourlyForecast />
            </div>
        </div>
    );
};

export default HomePage;