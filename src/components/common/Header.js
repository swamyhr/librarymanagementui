import React from 'react'
import { HEADER_TITLE } from '../../utils/constants'
import Button from '../Button'
import "../../assets/stylesheets/Header.css"

const Header = () => {

    const onSubmit = () => {
        console.log("Header Button Clicked");
    }

    return (
        <div className='lib-man-header'>
            <h1>{HEADER_TITLE}</h1>
            <div className='user-name-action-btn'>{"userName"}
                <Button type='button' onSubmit={onSubmit} button_name={"Header button"} />
            </div>

        </div>
    )
}

export default Header