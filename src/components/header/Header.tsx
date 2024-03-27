import React, {FC} from 'react';
import s from './Header.module.scss'
import SearchBlock from "../searchBlock/SearchBlock";
import ToggleTheme from "../toggleTheme/ToggleTheme";

interface IHeader {
    isDark: boolean,
    setIsDark: any
}

const Header: FC<IHeader> = ({isDark, setIsDark}) => {

    return (
        <header className={s.header}>
            <div className="container">
                <div className={s.items}>
                    <ToggleTheme toggleChange={() => setIsDark(!isDark)} isChecked={isDark} />
                    <SearchBlock />
                </div>
            </div>
        </header>
    );
};

export default Header;