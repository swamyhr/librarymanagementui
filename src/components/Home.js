import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div>Home

            <Link to={"login"}>Login</Link>
            <hr />
            <Link to={"register"}>register</Link>


            <Outlet />
        </div>
    )
}

export default Home