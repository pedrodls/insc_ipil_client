import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../../environments/elements"; 1
import styles from './Dashboard.module.scss'


export function DashboardPage() {


    return <>



        <Navbar isSignUp={true} />

        <Outlet />

        <Footer />


    </>

}