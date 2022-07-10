import { Navigate, Outlet } from "react-router-dom";
import { AuthService } from "./services/main/AuthService";
import { LocalStorageService } from "./services/main/LocalStorageService";

export const userAuth = () => {

    let localStorage = new LocalStorageService().getSession()
    
    return localStorage && localStorage.token ;
}

export const userAuthAccount = () => {

    let localStorage = new LocalStorageService().getSession()
    
    return localStorage && localStorage.token && localStorage.authAccount;
}

const ProtectedRoutes =  () => {

    const isAuth =  userAuthAccount();

    return isAuth ? <Outlet /> : <Navigate to='/' />;
}

export default ProtectedRoutes;
