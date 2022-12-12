import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class.js';


const ContactoComponent = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h2>Apellido: {contacto.apellido}</h2>
            <h3>Email: {contacto.email}</h3>
            <h4>Conectado: {contacto.conectado?'Conectado':'No conectado'}</h4>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf( Contacto ),
};


export default ContactoComponent;
