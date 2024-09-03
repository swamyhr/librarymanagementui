import React, { useState } from 'react'

import loginInputFields from '../utils/loginInputFields'
import InputField from './InputField'
import { LOGIN_FORM_NAME } from '../utils/constants';

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


        </React.Fragment>
    )
}

export default Login