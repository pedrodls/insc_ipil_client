import styles from './index.module.scss';

import { Link, Outlet } from 'react-router-dom';
import __VARIABLES__ from './../../envs/variables';
import { Navbar, Footer } from './../../envs/elements';
import { FaArrowUp } from 'react-icons/fa';
import { Button, ButtonGroup, Heading } from '@chakra-ui/react';

export default function Index() {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}