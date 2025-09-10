import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage';

export const Auth = () => {

    useEffect(() => {
        const handleStorage = (event) => {
            if (event.key === "auth" && event.newValue === null) {
                logout();
            }
            if (event.key == "auth" && event.newValue !== null) {
                login();
            }
        }

        window.addEventListener("storage", handleStorage);
        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    const login = () => {
        window.location.href = "/";
    };

    const logout = () => {
        window.location.href = "/login";
    };
    return <Outlet />;
}
