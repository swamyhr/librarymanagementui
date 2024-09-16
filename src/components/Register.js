import React, { useState } from 'react'
import registerInputFields from '../utils/RegisterInputFields'
import InputField from './InputField'
import { REGISTER_FORM_TITLE } from '../utils/constants';
import Button from './Button';
import { registerUser } from '../services/UserService';

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
            [e.target.name]: e.target.value
        })
    }

    const getFormattedNewUserDetails = () => {
        console.log(user);

        return {
            name: user.name,
            emailId: user.email,
            phoneNumber: user.contact,
            userName: user.username,
            password: user.password
        }
    }

    const register = async (e) => {
        e.preventDefault();
        console.log("Called ");

        const newUser = getFormattedNewUserDetails();
        console.log("useUswer ", newUser);

        try {
            const response = await registerUser({ ...newUser });
            const data = await response.json();
            console.log("Data data", data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <h2>{REGISTER_FORM_TITLE}</h2>
            {
                registerInputFields.map((field) => {
                    return <InputField
                        key={field.id}
                        onChange={onChange}
                        value={user[field.label]}
                        {...field}
                    />
                })
            }
            <Button button_name={'Register'} type="submit" onSubmit={register} />
        </React.Fragment>
    )
}

export default Register