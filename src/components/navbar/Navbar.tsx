import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Logo } from '../../envs/imgs';

export default function Navbar({ _class = "navbar" }) {
    return (
        <>

            <nav className={styles[_class]}>
                <div className="container-fluid">
                    {/**------------------------------Menu------------------------------------- */}
                    <div className="navbar-header d-flex justify-content-between align-items-center">
                        <Link to={'/'}>
                            <div className="logo-container">
                                <div className="logo">
                                    <img className={styles.logo} src={Logo} alt="Logotipo" />
                                </div>
                            </div>
                        </Link>
                        <button id="menu-toggle" type="button" className={styles['navbar-toggle'] + " btn btn-danger"}>
                            <FaBars />
                        </button>
                        {/**------------------------------Colapso------------------------------------- */}
                        <div className={styles.collapse + " " + styles['navbar-collapse']}>
                            <ul className="nav d-flex">
                                <li>
                                    <Link to={'/signup'} className="btn btn-primary">Fazer Inscrição</Link>
                                </li>
                                <li>
                                    <Link to={'/search'} className="btn btn-primary">Consultar Inscrição</Link>
                                </li>
                                <li>
                                    <Link to={'/search'} className="btn btn-primary">Contacte-nos</Link>
                                </li>
                                <li>
                                    <Link to={'/login'} className="btn btn-danger">Entrar</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}