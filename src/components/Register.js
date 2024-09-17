import React, { useState } from 'react'
import registerInputFields from '../utils/RegisterInputFields'
import InputField from './InputField'
import { REGISTER_FORM_TITLE } from '../utils/constants';
import Button from './Button';
import { registerUser } from '../services/UserService';
import "../assets/stylesheets/CheckBox.css"

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        contact: "",
        username: "",
        password: "",
        isAdmin: false
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

    const onCheck = (e) => {
        setUser({
            ...user,
            [e.target.value]: !user.isAdmin
        })
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

            <label className='checkBoxContainer'> isAdmin
                <input name="isAdmin" type='checkbox' onChange={onCheck} cheked={user.isAdmin} />
                <span className='checkmark'></span>
            </label>

            <Button button_name={'Register'} type="submit" onSubmit={register} />
        </React.Fragment>
    )
}

export default Register