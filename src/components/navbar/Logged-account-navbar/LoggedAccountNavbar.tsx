import styles from '../Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Logo } from '../../../environments/imgs';
import Sidemenu from '../../menu/Sidemenu';
import { Avatar, Badge, Box, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import __VARIABLES__ from '../../../environments/variables';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { LocalStorageService } from '../../../environments/services';

export default function LoggedAccountNavbar({ _class = "navbar", isSignUp = false, typeAccount }: any) {

    const navigate = useNavigate();

    const [scrollTop, setScrollTop] = useState<number>(0);

    const [scrolling, setScrolling] = useState(false);

    const session = new LocalStorageService().getSession()

    const localStorageService = new LocalStorageService()

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



                        <Popover>
                            <PopoverTrigger>
                                <Flex>
                                    <Avatar src='https://bit.ly/sage-adebayo' />
                                    <Box ml='3'>
                                        <Text fontWeight='bold'>
                                            {session.user.userName}
                                        </Text>
                                        <Text fontSize='sm'>{typeAccount}</Text>
                                    </Box>
                                </Flex>
                            </PopoverTrigger>
                            <PopoverContent>
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverBody>
                                    <Button colorScheme='red' onClick={() => localStorageService.removeSession()}>Sair</Button>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </nav>
        </>
    )
}

