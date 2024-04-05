import React from 'react';
import s from './HomePage.module.scss'
import CurrentWeather from "../../components/currentWeather/CurrentWeather";
import CurrentWeatherAbout from "../../components/currentWeatherAbout/CurrentWeatherAbout";
import HourlyForecast from "../../components/HourlyForecast/HourlyForecast";
import {ToastContainer} from "react-toastify";

const HomePage = React.memo(() => {
    return (
        <>
            <ToastContainer position="top-left" autoClose={5000}/>
            <main>
                <div className={`container ${s.items}`}>
                    <CurrentWeatherAbout />
                    <CurrentWeather />
                    <HourlyForecast />
                </div>
            </main>
        </>
    );
});

export default HomePage;