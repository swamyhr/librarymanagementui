import React, { useState } from 'react'
import registerInputFields from '../utils/RegisterInputFields'
import InputField from './InputField'
import { REGISTER_FORM_TITLE } from '../utils/constants';

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
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
            <h2>{REGISTER_FORM_TITLE}</h2>
            {
                registerInputFields.map((field) => {
                    return <InputField
                        key={field.id}
                        onChang={onChange}
                        value={user[field.label]}
                        {...field}
                    />
                })
            }
        </React.Fragment>
    )
}

export default Register