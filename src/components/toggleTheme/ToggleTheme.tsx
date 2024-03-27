import React, {FC} from 'react';
import s from './ToggleTheme.module.scss'

interface IToggleTheme {
    toggleChange: any,
    isChecked: boolean
}

const ToggleTheme: FC<IToggleTheme> = ({toggleChange, isChecked}) => {
    return (
        <div className={s.toggleContainer}>
            <input type="checkbox"
                id={'check'}
                   className={s.toggle}
                   onChange={toggleChange}
                   checked={isChecked}
            />
            <label htmlFor="check">Dark Mode</label>
        </div>
    );
};

export default ToggleTheme;