import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../../models/contacto.class';



const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');


    const addContact = (e) => {

        e.preventDefault();

        const newContact = new Contacto(
            nameRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            true

        )

        add(newContact);
    }

    return (
        <div className='card my-3 p-3 '>
            <h4>Agregar contacto</h4>
            <form onSubmit={addContact}
                className='mb-4 col-8 m-auto'>
                <div className='form-outline'>
                    <div className='row my-3'>
                        <div className='col-2 '>
                            <label
                                htmlFor='inputName'
                                className='form-label'>
                                Nombre
                            </label>
                        </div>
                        <div className='col-10'>
                            <input
                                ref={nameRef}
                                id='inputName'
                                type='text'
                                className='form-control'
                                required
                                autoFocus
                                placeholder='Ingrese su nombre'>
                            </input>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-2 '>
                            <label
                                htmlFor='inputApellido'
                                className='form-label'>
                                Apellido
                            </label>
                        </div>
                        <div className='col-10'>
                            <input
                                ref={apellidoRef}
                                id='inputApellido'
                                type='text'
                                className='form-control'
                                required
                                placeholder='Ingrese su apellido'>
                            </input>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <div className='col-2 '>
                            <label
                                htmlFor='inputEmail'
                                className='form-label'>
                                Email
                            </label>
                        </div>
                        <div className='col-10'>
                        <input
                            ref={emailRef}
                            id='inputEmail'
                            type='text'
                            className='form-control'
                            required
                            placeholder='Ingrese su email'>
                        </input>
                        </div>
                    </div>
                </div>
                <button
                    type='submit'
                    className='btn btn-success btn-lg mt-3'>
                    Agregar
                </button>
            </form >
        </div >
    )
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm
