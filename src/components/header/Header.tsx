import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.items}>
                    <div className={s.logo}>
                        <img src="" alt=""/>
                    </div>
                    <div className={s.links}>
                        <NavLink to={''}>Home</NavLink>
                        <NavLink to={'/popular'}>Popular</NavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;