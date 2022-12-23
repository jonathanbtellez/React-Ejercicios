import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class.js';


const ContactoComponent = ({ contacto, conected, remove }) => {
    const conectedButton = () => {
        if (contacto.conectado) {
            return (<span onClick={() => conected(contacto)} style={{ color: 'black', fontWeight: 'bold' }}>Conectado 
                <i className="bi bi-circle-fill greenIcon"></i>
            </span>)
        } else {
            return (<span onClick={() => conected(contacto)} style={{ color: 'black', fontWeight: 'bold' }}>No conectado
                <i className="bi bi-circle-fill redIcon" ></i>
            </span>)
        }
    }

    const trashButton = () => {
            return (<i onClick={() => remove(contacto) } className="bi bi-trash3 redIcon ms-5"></i>)
    }
    return (
        <tr>
            <td>{contacto.nombre}</td>
            <td>{contacto.apellido}</td>
            <td>{contacto.email}</td>
            <td>{conectedButton()}{trashButton()}</td>
        </tr>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};


export default ContactoComponent;
