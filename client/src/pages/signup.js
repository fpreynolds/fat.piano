import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
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
            const { data } = await addUser({
                variables: { ...formState },
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <main>
            <div className="signup">
                <h3 className="signupHeader">Sign Up</h3>
                <div className="form">
                    <form onSubmit={handleFormSubmit}>
                        <input
                            className="username"
                            placeholder="Create your username here"
                            name="user"
                            type="text"
                            value={formState.username}
                            onChange={handleChange}
                        />
                        <input
                            className="email"
                            placeholder="Enter your email here"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                        />
                        <input
                            className="password"
                            placeholder="Create your password here"
                            name="password"
                            type="password"
                            value={formState.password}
                            onChange={handleChange}
                        />
                        <button
                            className="formSubmit"
                            type="submit"
                        >CREATE ACCOUNT</button>
                    </form>
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

export default Signup;