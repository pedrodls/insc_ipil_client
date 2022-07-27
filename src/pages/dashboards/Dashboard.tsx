import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DashboardNavbar, Footer } from "../../environments/elements";
import { getAccount } from "../../environments/functions";
import { UserDashboardRoutes } from "../../environments/routes";


export function DashboardPage({ type_account }: any) {

    const [data, setData] = useState<boolean>(false)

    const navigate = useNavigate()

    const location = useLocation()

    const fetchData = async () => {

        const _accountName = await getAccount()

        if (window.location.pathname == '/dashboard') {

            setData(true)

            navigate(UserDashboardRoutes[type_account || _accountName])

        } else
            setData(false)

    }

    useEffect(() => {

        fetchData()

    }, [location])

    return <>

        <DashboardNavbar isSignUp={true} type_account={type_account} />

        <Outlet />


    </>

}