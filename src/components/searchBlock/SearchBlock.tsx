import React, {ChangeEvent, useState} from 'react';
import s from "./SearchBlock.module.scss";
import {useAppDispatch} from "../../hooks/hooks";
import {currentWeatherThunk} from "../../store/thunks/currentWeather.thunk";
import useLocalStorage from "use-local-storage";

const SearchBlock = () => {
    const [data, setData] = useState('')
    const [, setValue] = useLocalStorage('city', '')
    const dispatch = useAppDispatch()
    const changeData = (e: ChangeEvent<HTMLInputElement>) => setData(e.target.value)
    const send = () => {
        if (data.length > 0){
            dispatch(currentWeatherThunk(data))
            setValue(data)
            setData('')
        }
    }
    const sendEnter = (e:  React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && data.length > 0){
            dispatch(currentWeatherThunk(data))
            setValue(data)
            setData('')
        }
    }

    return (
        <div className={s.searchBlock}>
            <input onKeyPress={sendEnter} placeholder={'Search Location...'} onChange={changeData} value={data} type="text"/>
            <button disabled={!data.length} onClick={send} type={'submit'}>Find</button>
        </div>
    );
};

export default SearchBlock;