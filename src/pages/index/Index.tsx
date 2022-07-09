import styles from './index.module.scss';

import { Outlet } from 'react-router-dom';
import __VARIABLES__ from '../../environments/variables';
import { Navbar, Footer } from '../../environments/elements';

export default function Index() {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}