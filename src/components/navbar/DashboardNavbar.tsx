import styles from './Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Logo } from '../../environments/imgs';
import Sidemenu from '../menu/Sidemenu';
import { Avatar, Badge, Box, Button, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import __VARIABLES__ from '../../environments/variables';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LoggedAccountNavbar from './Logged-account-navbar/LoggedAccountNavbar';

export default function DashboardNavbar({ _class = "navbar", isSignUp = false, type_account }: any) {

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
            {
                <LoggedAccountNavbar _class={_class} isSignUp={isSignUp} type_account={type_account} />
            }

        </>
    )
}

