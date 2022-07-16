import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../environments/elements";
import { UserDashboardRoutes } from "../../environments/routes";

import styles from './Dashboard.module.scss'


export function DashboardPage() {


    const navigate = useNavigate()

    useEffect(() => {

        //Redirecionar na rota que tem acesso, ou seja, a que tem sessão!

        if(window.location.pathname == '/dashboard')
            navigate(UserDashboardRoutes[0])

    }, [])

    return <>


        <Navbar isSignUp={true} />

        <Outlet />

        <Footer />

    </>

}