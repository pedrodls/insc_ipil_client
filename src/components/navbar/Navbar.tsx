import styles from './Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Logo } from '../../environments/imgs';
import Sidemenu from '../menu/Sidemenu';
import { Avatar, Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import __VARIABLES__ from '../../environments/variables';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function Navbar({ _class = "navbar", isSignUp = false }: any) {

    const navigate = useNavigate();

    const [scrollTop, setScrollTop] = useState<number>(0);

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {

        const onScroll = (e: any) => {

            setScrollTop(e.target.documentElement.scrollTop);

            if (scrollTop > 10)
                setScrolling(true);
            else
                setScrolling(false);

        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);

    }, [scrollTop]);

    return (
        <>
            <nav className={styles[(!scrolling && !isSignUp) ? _class : 'navbar-colored']}>
                <div className="container-fluid">
                    {/**------------------------------Menu------------------------------------- */}
                    <div className="navbar-header d-flex justify-content-between align-items-center">
                        <div>
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-5">
                                        <div className="sidemenu">
                                            <Sidemenu />
                                        </div>
                                    </div>
                                    <div className="col d-flex justify-content-center">
                                        <div className="logo">
                                            <Link to={'/'}>
                                                <img className={styles.logo} src={Logo} alt="Logotipo" onClick={() => navigate('/')} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/**------------------------------Colapso------------------------------------- */}
                        < div className={styles.collapse + " " + styles['navbar-collapse']}>
                            <ul className="nav d-flex justify-content-end">
                                <li className='nav-item me-5' onClick={() => navigate('/')}>
                                    Inicio
                                </li>
                                <li className='nav-item me-5' onClick={() => navigate('/informations')}>
                                    Informações
                                </li>
                                <li className='nav-item me-5' onClick={() => navigate('/informations')}>
                                    Validar Inscrição
                                </li>
                                <li className='nav-item' onClick={() => navigate('/contacts')}>
                                    Contactar
                                </li>
                            </ul>
                        </div>

                        <Button onClick={() => navigate('/login')} className={'border-0 me-3'} colorScheme={__VARIABLES__._orange_default_btn_}>
                            Entrar
                        </Button>


                    </div>
                </div>
            </nav>
        </>
    )
}

export function GuidesDashboardNavbar() {


    return <>

        Guides Navbar

    </>

}