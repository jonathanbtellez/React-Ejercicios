import React, { useEffect, useState } from 'react';
import '../styles/clock.scss';

const LifeCycleComponent = () => {
    const dataInicial = {
        fecha: new Date(),
        edad: 15,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [data, setData] = useState(dataInicial);


    useEffect(() => {
        const tick = () => {
            return setData({nombre: data.nombre, apellidos: data.apellidos, edad: data.edad + 1, fecha: new Date()});
            
        }
        const timerID = setInterval(() =>
            tick(), 1000
        )
        return () => {
            clearInterval(timerID);
        };
    }, [data]);
    
    return (
        <div>
            <h2 className='fecha'>
                Hora Actual:
                {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1 className='edad'>Edad: {data.edad}</h1>
        </div>
    );
}

export default LifeCycleComponent;
