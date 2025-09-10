import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import secureLocalStorage from 'react-secure-storage';

export const Logout = () => {

    useEffect(() => {
        const handleStorage = (event) => {
            if (event.key === "auth" && event.newValue === null) {
                logout();
            }
        }

        window.addEventListener("storage", handleStorage);
        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, []);

    const logout = () => {
        window.location.href = "/login";
    };
    return <Outlet />;
}
