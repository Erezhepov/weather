import React, { FC } from 'react';

interface IIcon{
    icon: string | null
}

const Icon: FC<IIcon> = ({icon}) => {
    return (
        <img src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt=""/>
    );
};

export default Icon;