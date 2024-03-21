import React, {useEffect} from 'react';
import s from './HomePage.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {currentWeatherThunk} from "../../store/thunks/currentWeather.thunk";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import CurrentWeatherAbout from "../../components/currentWeatherAbout/CurrentWeatherAbout";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import {toast, ToastContainer} from "react-toastify";

const HomePage = () => {
    const dispatch: any = useAppDispatch()
    const {currentWeather, hourlyWeather} = useAppSelector(state => state)
    useEffect(() => {
        dispatch(currentWeatherThunk('astana'))
    }, []);

    useEffect(() => {
        currentWeather.error && toast.error(currentWeather.error)
        hourlyWeather.error && toast.error(hourlyWeather.error)
    }, [currentWeather.error, hourlyWeather.error]);
    return (
        <>
            <div className={s.homePage}>
                <div className={`container ${s.items}`}>
                    <ToastContainer
                        position="top-left"
                        autoClose={5000}
                    />
                    <CurrentWeatherAbout />
                    <CurrentWeather />
                    <HourlyForecast />
                </div>
            </div>
        </>
    );
};

export default HomePage;