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
    const currentWeatherError = useAppSelector(state => state.currentWeather.error)
    const hourlyWeatherError = useAppSelector(state => state.hourlyWeather.error)
    useEffect(() => {
        dispatch(currentWeatherThunk('astana'))
    }, []);

    useEffect(() => {
        currentWeatherError && toast.error(currentWeatherError)
        hourlyWeatherError && toast.error(hourlyWeatherError)
    }, [currentWeatherError, hourlyWeatherError]);
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
                    {/*<DailyForecast />*/}
                    <HourlyForecast />
                </div>
            </div>
        </>
    );
};

export default HomePage;