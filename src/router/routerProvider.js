import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import DashBoard from "../components/DashBoard";
import Book from "../components/Book";
import BooksList from "../components/BooksList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
        children: [
            {
                path: "books",
                element: <BooksList />
            },
            {
                path: "book",
                element: <Book />
            }

        ]
    }
])

