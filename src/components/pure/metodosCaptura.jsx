import React, { useState } from 'react';

const MetodosCaptura = () => {
    const colores = {
        red: 0,
        green: 0,
        blue: 0
    }

    const numeroRandom = () => {
        let numero = Math.ceil(Math.random() * 255)
        return numero;
    }

    const [changeColor, setChangeColor] = useState(colores);

    const [stop, setStop] = useState(false);

    const stopChange = () =>{
        setStop(!stop)
    }

    
    const newColor = () => {
        if (!stop) {
            setChangeColor({ red: numeroRandom(), green: numeroRandom(), blue: numeroRandom() });
        }
    }





    const square = {
        backgroundColor: `rgb(${changeColor.red},${changeColor.green},${changeColor.blue})`,
        width: '255px',
        height: '255px'
    }



    return (
        <div className='container p-5'>
            <div
                className='d-flex justify-content-center mx-auto'
                style={square}
                onMouseOver={newColor}
                onDoubleClick={stopChange}
            >
                <p>{changeColor.red}, {changeColor.green}, {changeColor.blue}</p>
            </div>
            <div className='d-flex justify-content-center flex-column mx-auto'>
                <h3 >Instruciones</h3>
                <ul>
                    <li>Si te ubicas sobre el cuadro cambiara de color</li>
                    <li>Si haces doble click en el cuadro detendras el cambio</li>
                    <li>Si haces doble click en el cuadro reanudaras el cambio de color al mover el mouse</li>
                </ul>
                

            </div>
        </div>
    );
}

export default MetodosCaptura;
