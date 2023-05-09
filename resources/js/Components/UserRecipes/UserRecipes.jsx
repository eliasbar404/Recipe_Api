import React from 'react';
import { Link } from 'react-router-dom';

const UserRecipes = () => {
    return (
    <div>
        UserRecipes
        <Link to="/user/recipe/create">Add Recipe</Link>
    </div>
)
}

export default UserRecipes