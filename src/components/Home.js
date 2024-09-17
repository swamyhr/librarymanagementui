import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "../assets/stylesheets/Home.css"

const Home = () => {
    return (
        <div className='home'>
            <Outlet />
            <Link to={"login"}>Login</Link>
            <br />
            <Link to={"register"}>register</Link>
            <br />
            <Link to={"addBook"}>Add Book</Link>
        </div>
    )
}

export default Home