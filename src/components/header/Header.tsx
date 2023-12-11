import React from 'react';
import s from './Header.module.scss'
import SearchBlock from "../searchBlock/SearchBlock";

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.items}>
                    <div className={s.mode}></div>
                    <SearchBlock />
                </div>
            </div>
        </header>
    );
};

export default Header;