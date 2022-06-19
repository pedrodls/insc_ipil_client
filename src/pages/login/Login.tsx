import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../layout/navbar/Navbar';
import styles from './Login.module.css';
/*import { FaKey, FaEnvelope } from 'react-icons/fa';*/
import Form from './../../layout/form/Form';
import Input from './../../layout/input/Input';
import Button from './../../layout/button/Button';

export default function Login() {
    const [error, setError] = useState({ show: false, message: '' });
    const [spinner, setSpinner] = useState(false);

    const handleSubmit = () => { }
    const handleChange = () => { }

    return (
        <>
            <Navbar />
            <div className={styles.background + " page-header header-filter"}>
                <div className={styles.container + " container"}>
                    <div className="row">
                        <div className="d-flex justify-content-center">
                            <Form _class="login">
                                <h1 className="pt-2 text-dark">Faça o Login</h1>
                                {error.show && <p className='text-danger text-center'>{error.message}</p>}
                                <div className={`inputInvisible d-flex align-items-center mb-4`}>
                                    <div style={{ paddingLeft: '12px' }}>{/*<FaEnvelope color="8E959B" size="20" />*/}</div>
                                    <div style={{ width: '86%' }}><Input text="" type="email" name="email" placeholder="Insira seu Email" _class="invisible" required={true} handleEvent={handleChange} /></div>
                                </div>
                                <div className={`inputInvisible d-flex align-items-center mb-4`}>
                                    <div style={{ paddingLeft: '12px' }}>{/*<FaKey color="8E959B" size="20" />*/}</div>
                                    <div style={{ width: '86%' }}><Input text="" type="password" name="password" placeholder="Insira sua Palavra-Passe" _class="invisible" required={true} handleEvent={handleChange} /></div>
                                </div>
                                <Button text={spinner ? (<><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Aguarde...</>) : 'Entrar'}
                                    type="submit" _class="defaultDanger" handle={handleSubmit} disabled={spinner} />
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}