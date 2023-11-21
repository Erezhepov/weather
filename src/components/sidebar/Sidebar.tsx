import React from 'react';
import s from './Sidebar.module.scss'
import SearchBlock from "../searchBlock/SearchBlock";
import CurrentWeatherInfo from "../currentWeatherInfo/CurrentWeatherInfo";
import {useAppSelector} from "../../hooks/hooks";
import ToggleBtnSidebar from "../toggleBtnSidebar/toggleBtnSidebar";

const Sidebar = () => {
    const isOpen = useAppSelector(state => state.currentWeather.isOpenSidebar)

    return (
        <div className={isOpen ? s.sidebar : `${s.sidebar} ${s.close}`}>
            <ToggleBtnSidebar />
            <SearchBlock />
            <CurrentWeatherInfo />
        </div>
    );
};

export default Sidebar;