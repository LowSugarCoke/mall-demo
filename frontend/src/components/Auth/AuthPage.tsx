import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { UserApi } from '../API/UserApi';
import { useNavigate } from 'react-router-dom';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = async (credentials: { email: string, password: string }) => {
        const { email, password } = credentials;

        // Call either login or register API here
        if (isLogin) {
            // Call login API
            console.log('Logging in:', credentials);
            try {
                const success = await UserApi.userLogin(email, password);
                if (success) {
                    alert('Login successful');
                    navigate('/products');
                } else {
                    alert('Login failed');
                }
            } catch (error) {
                console.error('An error occurred during login:', error);
            }
        } else {
            // Call register API
            console.log('Registering:', credentials);
            try {
                const success = await UserApi.userRegister(email, password);
                if (success) {
                    alert('Registration successful');
                } else {
                    alert('Registration failed');
                }
            } catch (error) {
                console.error('An error occurred during registration:', error);
            }
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
