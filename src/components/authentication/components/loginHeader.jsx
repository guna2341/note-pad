
import { Typography, useMediaQuery } from '@mui/material';
import React from 'react'

export const LoginHeader = ({ darkMode, isLogin }) => {
    const isMobile = useMediaQuery("(max-width:600px)");

    return (
        <div className="mb-6 md:mb-8">
            <Typography variant={isMobile ? "h5" : "h4"}
                className={`font-bold mb-1 md:mb-2 ${darkMode ? 'text-purple-100' : 'text-blue-900'}`}>
                {isLogin ? 'Welcome Back' : 'Create Account'}
            </Typography>
            <Typography variant={isMobile ? "body2" : "body1"}
                className={`${darkMode ? 'text-purple-300' : 'text-blue-600'}`}>
                {isLogin ? 'Log in to continue to your workspace' : 'Join NotePad to start organizing your thoughts'}
            </Typography>
        </div>
    )
}

