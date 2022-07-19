import styles from './index.module.scss';

import { Outlet, useNavigate } from 'react-router-dom';
import __VARIABLES__ from '../../environments/variables';
import { Navbar, Footer } from '../../environments/elements';
import { useEffect } from 'react';

export default function Index() {


    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}