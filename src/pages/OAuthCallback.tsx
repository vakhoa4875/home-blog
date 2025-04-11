import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { handleOAuthCallback } from '../modules/auth/services/authService';

const OAuthCallback: React.FC = () => {

    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        let called = false;
    
        const handle = async () => {
            if (called) return; // Đảm bảo chỉ gọi 1 lần
            called = true;
    
            const token = await handleOAuthCallback();
    
            if (token) {
                login(token);
                window.history.replaceState({}, document.title, "/"); // Clean URL
                navigate("/"); // Chuyển hướng về home
            } else {
                navigate("/login?error=oauth_failed");
            }
        };
    
        handle();
    }, [navigate, login]);
    

    return (
        <div className='text-center min-h-screen bg-[var(--background-color)] px-4'>
            <h1>Processing OAuth Callback...</h1>
            <p>Please wait while we complete the authentication process.</p>
        </div>
    );
};

export default OAuthCallback;