import React, {ChangeEvent, useState} from 'react';
import s from "./SearchBlock.module.scss";
import {useAppDispatch} from "../../hooks/hooks";
import {currentWeatherThunk} from "../../store/thunks/currentWeather.thunk";

const SearchBlock = () => {
    const [data, setData] = useState('')
    const changeData = (e: ChangeEvent<HTMLInputElement>) => setData(e.target.value)
    const dispatch = useAppDispatch()
    const send = () => {
        if (data.length > 0){
            dispatch(currentWeatherThunk(data))
            setData('')
        }
    }
    const sendEnter = (e:  React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && data.length){
            dispatch(currentWeatherThunk(data))
            setData('')
        }
    }

    return (
        <div className={s.searchBlock}>
            <input onKeyPress={sendEnter} placeholder={'Search Location...'} onChange={changeData} value={data} type="text"/>
            <button onClick={send} type={'submit'}>Find</button>
        </div>
    );
};

export default SearchBlock;