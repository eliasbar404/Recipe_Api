import React from "react";
import { createBrowserRouter} from "react-router-dom";
// import Pages
import Index from "./Pages/Index";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/login",
        element: <div>login</div>,
    },
    {
        path: "/register",
        element: <div>login</div>,
    },
]);

export default router;