import React from 'react'

const InputField = (field) => {

    const { name, label, id, type, value, onChange } = field;

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                name={name}
                id={id}
                type={type}
                value={value}
                onChange={onChange} />
        </>
    )
}

export default InputField