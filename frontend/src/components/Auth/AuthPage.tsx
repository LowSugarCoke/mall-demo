import React, { useState } from 'react';
import AuthForm from './AuthForm';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (credentials: { email: string, password: string }) => {
        // Call either login or register API here
        if (isLogin) {
            // Call login API
            console.log('Logging in:', credentials);
        } else {
            // Call register API
            console.log('Registering:', credentials);
        }
    };

    return (
        <div>
            <h1>{isLogin ? 'Login' : 'Register'}</h1>
            <AuthForm isLoginMode={isLogin} onSubmit={handleSubmit} />
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? 'Register' : 'Login'}
            </button>
        </div>
    );
};

export default AuthPage;
