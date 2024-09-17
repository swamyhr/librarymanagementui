import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import "../assets/stylesheets/Home.css"
import Header from './common/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
                <Outlet />
                <Link to={"login"}>Login</Link>
                <br />
                <Link to={"register"}>register</Link>
                <br />
                <Link to={"addBook"}>Add Book</Link>
            </div>
        </div>
    )
}

export default Home