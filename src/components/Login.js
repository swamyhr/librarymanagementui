import React, { useState } from 'react'

import loginInputFields from '../utils/loginInputFields'
import InputField from './InputField'
import { LOGIN_FORM_NAME, LOGIN_BUTTON_NAME } from '../utils/constants';
import Button from './Button';
import { paste } from '@testing-library/user-event/dist/paste';
import { login } from '../services/UserService';

const Login = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: [e.target.value]
        })
    }

    const getUserDetailsForLogin = () => {
        return {
            username: user.username,
            password: user.password
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const userDetailsToLogin = getUserDetailsForLogin();

            const response = await login(userDetailsToLogin);
            const data = await response.json();
            console.log(("data", data));

        } catch (error) {
            console.log("error ", error);

        }
    }

    return (
        <React.Fragment>
            <h2>{LOGIN_FORM_NAME}</h2>
            {
                loginInputFields.map((field) => {
                    return <InputField key={field.id}
                        onChange={onChange}
                        value={user[field.name]}
                        {...field} />
                })
            }

            <Button onSubmit={onSubmit} button_name={LOGIN_BUTTON_NAME} />

        </React.Fragment>
    )
}

export default Login