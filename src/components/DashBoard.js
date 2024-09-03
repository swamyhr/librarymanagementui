import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div>
            <Link to={"books"}>Books</Link>
            <hr />
            <Link to={"book"}>Book Detail</Link>
            <Outlet />
        </div>
    )
}

export default DashBoard