import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import LoginPage from '../screens/loginPage';

import secureLocalStorage from 'react-secure-storage';
import { useEffect } from 'react';

const Protect = () => {
    const token = secureLocalStorage.getItem("token");

    return token  ? <Outlet /> : <LoginPage />;
}

export default Protect;