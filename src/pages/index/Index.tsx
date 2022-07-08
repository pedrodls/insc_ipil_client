import styles from './index.module.scss';

import { Outlet } from 'react-router-dom';
import __VARIABLES__ from './../../envs/variables';
import { Navbar, Footer } from './../../envs/elements';

export default function Index() {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}