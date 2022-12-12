import React from 'react';
import { Contacto } from '../../models/contacto.class.js';
import ContactoComponent from '../pure/contactoComponent';




const ContactosComponent = () => {
    const defaulContact = new Contacto('Andres','Guzman','Andguz@correo.com',false);
    return (
        <div>
            <div>
                <h1>Informacion del contacto</h1>
            </div>
            <ContactoComponent contacto={defaulContact}></ContactoComponent>
        </div>
    );
};

export default ContactosComponent;
