import React from 'react'

const Button = ({ button_name, type = 'button', onSubmit }) => {

    console.log("Button ", type, button_name, onSubmit);


    return (
        <>
            <button onClick={onSubmit} type={type}>
                {button_name}
            </button>
        </>
    )
}

export default Button