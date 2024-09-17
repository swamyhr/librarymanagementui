import React from 'react'
import "../assets/stylesheets/Button.css"

const Button = ({ button_name, type = 'button', onSubmit }) => {

    console.log("Button ", type, button_name, onSubmit);


    return (
        <>
            <button className='btn' onClick={onSubmit} type={type}>
                {button_name}
            </button>
        </>
    )
}

export default Button