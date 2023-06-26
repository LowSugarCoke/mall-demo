import React, { useState } from 'react';

type SubmitFunction = (credentials: { email: string; password: string }) => void;

interface AuthFormProps {
    isLoginMode: boolean;
    onSubmit: SubmitFunction;
}

function AuthForm({ isLoginMode, onSubmit }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>{isLoginMode ? 'Login' : 'Register'}</button>
        </form>
    );
};

export default AuthForm;