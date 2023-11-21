import React from 'react';
import s from "./ToggleBtnSidebar.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {isOpenSidebarHandler} from "../../store/slices/currentWeather.slice";

const ToggleBtnSidebar = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(state => state.currentWeather.isOpenSidebar)
    const toggleBtn = () => {
        dispatch(isOpenSidebarHandler(!isOpen))
    }

    return (
        <div onClick={toggleBtn} className={isOpen ? `${s.navIcon} ${s.open}` : s.navIcon}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default ToggleBtnSidebar;