import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ username: '', password: ''});
    const [login, { error, data }] = useMutation(LOGIN_USER);
    const handleChange = (e) => {
        const { username, value } = e.target;
        setFormState({
            ...formState,
            [username]: value,
        });
    };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }
        setFormState({
            username: '',
            password: '',
        });
    };
    return (
        <main>
            <div className="login">
                <h3 className="loginHeader">Login</h3>
                <div className="form">
                    <card>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className="username"
                                placeholder="Please enter your username here"
                                name="user"
                                value={formState.username}
                                onChange={handleChange}
                            />
                            <input
                                className="password"
                                placeholder="Please enter your password here"
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <button
                                className="formSubmit"
                                type="submit"
                                > LOGIN </button>
                            <p className="Signup">
                                Need to create an account? <Link to="/signup">Please signup here</Link>
                            </p>
                        </form>
                    </card>
                    {error && (
                        <div className="errorMessage">
                            {error.message}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Login;