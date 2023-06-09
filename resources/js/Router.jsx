import React from "react";
import { createBrowserRouter} from "react-router-dom";
// import Pages
import Index from "./Pages/Index";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Contact from "./Pages/Contact";
// import components
import Home from "./Components/Home";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import UserRecipes from "./Components/UserRecipes/UserRecipes";
import CreateRecipe from "./Components/UserRecipes/CreateRecipe";
import RecipesList from "./Components/RecipesList";
import RecipeDetails from "./Components/RecipeDetails";
import CreatorProfile from "./Components/CreatorProfile";
import Favourite from "./Components/Favourite";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
        children:[
            {path:"/"                   , element:<Home/>},
            {path:"/recipe/:id"         , element:<RecipeDetails/>},
            {path:"/profile/:id"         , element:<CreatorProfile/>},
            {path:"/user/profile"            , element:<Profile/>},
            {path:"/user/profile/update"     , element:<UpdateProfile/>},
            {path:"/user/recipes"       , element:<UserRecipes/>},
            {path:"/user/recipe/create" , element:<CreateRecipe/>},
            {path:"/user/recipe/:id"    , element:<CreateRecipe/>},
            {path:"/favourite"    , element:<Favourite/>},
            


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
    {
        path: "/contact",
        element: <Contact/>,
    },
]);

export default router;