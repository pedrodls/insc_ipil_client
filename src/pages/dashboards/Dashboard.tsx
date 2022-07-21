import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../../environments/elements";
import { getAccount } from "../../environments/functions";
import { UserDashboardRoutes } from "../../environments/routes";


export function DashboardPage({ type_account }: any) {

    const [data, setData] = useState<boolean>(false)

    const navigate = useNavigate()

    const fetchData = async () => {

        const _accountName = await getAccount()

        _accountName || type_account ? setData(true) : setData(false)

        if (window.location.pathname == '/dashboard') {
            
            setData(false)

            navigate(UserDashboardRoutes[type_account || _accountName])
        }

    }

    useEffect(() => {

        fetchData()

    }, [])

    return <>

        {
            data ? 

            <>
                <Navbar isSignUp={true} />

                <Outlet />

                <Footer />

            </>

            : 

            <>
            </>
        }

    </>

}