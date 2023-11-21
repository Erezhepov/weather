import React, {useEffect} from 'react';
import s from './HomePage.module.scss'
import {useAppDispatch} from "../../hooks/hooks";
import {currentWeather} from "../../store/thunks/currentWeather.thunk";
import CurrentWeather from "../../components/currentWeather/CurrentWeather";

const HomePage = () => {
    const dispatch: any = useAppDispatch()

    useEffect(() => {
        dispatch(currentWeather('astana'))
    }, []);
    return (
        <div className={s.homePage}>
            <div className="container">
                <CurrentWeather />
            </div>
        </div>
    );
};

export default HomePage;