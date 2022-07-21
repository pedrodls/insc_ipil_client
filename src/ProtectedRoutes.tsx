import { Navigate, Outlet } from "react-router-dom";
import { AuthService } from "./services/main/AuthService";
import { LocalStorageService } from "./services/main/LocalStorageService";

export const userAuthAccount = () => {

    let localStorage: any = new LocalStorageService().getSession()

    if (localStorage)
        return localStorage.token && localStorage.user.authAccount;

    return false
}

export const SuperProtectedRoutes = () => {

    const isAuth = userAuthAccount();

    return isAuth ? <Outlet /> : <Navigate to='/' />;

}

export const UnProtectedRoutes = () => {

    const isAuth = userAuthAccount();

    return isAuth ? <Navigate to='/dashboard' /> : <Outlet />;

}

const ProtectedRoutes = () => {

    const isAuth = userAuthAccount();

    return isAuth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;
