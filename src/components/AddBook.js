import React, { useState } from 'react'

import { bookInputFields } from '../utils/BookInputFields'
import InputField from './InputField'
import Button from './Button'
import { saveNewBook } from '../services/BookService'

const AddBook = () => {

    const [book, setBook] = useState({
        name: "",
        description: "",
        price: 0,
        author: "",
        quantity: 0
    })

    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const getNewBookDetails = () => {
        return {
            name: book.name,
            description: book.description,
            price: book.price,
            author: book.author,
            quantity: book.quantity
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const newBook = getNewBookDetails();

        try {
            const response = await saveNewBook({ ...newBook });
            const data = await response.json();

            console.log("Saved Book Data ", data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            {bookInputFields.map((inputField) => (<InputField key={inputField.id} {...inputField}
                onChange={onChange} />))}

            <Button type='submit' button_name={'Add'}
                onSubmit={onSubmit} />
        </div>
    )
}

export default AddBook