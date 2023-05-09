import React from "react";
import { createBrowserRouter} from "react-router-dom";
// import Pages
import Index from "./Pages/Index";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
// import components
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import UserRecipes from "./Components/UserRecipes/UserRecipes";
import CreateRecipe from "./Components/UserRecipes/CreateRecipe";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children:[
            {path:"/profile"       , element:<Profile/>},
            {path:"/profile/update"       , element:<UpdateProfile/>},
            {path:"/user/recipes"  , element:<UserRecipes/>},
            {path:"/user/recipe/create" , element:<CreateRecipe/>},
            {path:"/user/recipe/:id"    , element:<CreateRecipe/>}
        ]
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