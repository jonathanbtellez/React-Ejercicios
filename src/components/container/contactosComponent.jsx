import React, { useState } from 'react';
import { Contacto } from '../../models/contacto.class.js';
import ContactoComponent from '../pure/contactoComponent';
import ContactForm from '../pure/forms/contactForm.jsx';




const ContactosComponent = () => {
    const defaulContact = new Contacto('Andres', 'Guzman', 'Andguz@correo.com', false);
    const defaulContact1 = new Contacto('Andres', 'Guzman', 'Andguz@correo.com', false);
    const defaulContact2 = new Contacto('Andres', 'Guzman', 'Andguz@correo.com', false);

    const [contacts, setContacts] = useState([defaulContact, defaulContact1, defaulContact2]);

    const conectedContact = (contacto) => {
        const index = contacts.indexOf(contacto);
        const tempContacs = [...contacts];
        tempContacs[index].conectado = !tempContacs[index].conectado;

        //We update  the state of the component and it will update the iteration of the tasks 
        //in order to show the task updated with the new list of task
        setContacts(tempContacs);
    }

    const removeContact = (contacto) => {
        const index = contacts.indexOf(contacto);
        console.log('clieck en index', index);
        const tempContacs = [...contacts];
        tempContacs.splice(index, 1);
        console.log(tempContacs)
        setContacts(tempContacs);
    }


    const showContacs = () => {
        return(
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact, index) => {
                    return (
                        <ContactoComponent
                            key={index}
                            contacto={contact}
                            conected={conectedContact}
                            remove={removeContact}>
                        </ContactoComponent>)
                })}
            </tbody>
        </table>);
    }

    const insertContact = (contacto) => {
        const tempContacs = [...contacts];
        tempContacs.push(contacto)
        setContacts(tempContacs);
    }

    return (
        <div className='container col-sm-8 m-auto'>
            <section className='card my-4'>
            <div > 
                <h1 className='card-title'>Informacion del contacto</h1>
            </div>
            <div className='card-body'>
                {contacts.length > 0?showContacs():<h5>No hay contactos para mostrar, use el formulario para agregar contactos</h5>}
            </div>
            </section>
            <ContactForm add={insertContact}></ContactForm>
        </div>
    );
};

export default ContactosComponent;
