import React from "react";
import { createBrowserRouter} from "react-router-dom";
// import Pages
import Index from "./Pages/Index";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
]);

export default router;