import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Slices/authSlice';
import recipesSlice from './Slices/recipesSlice';
import recipeSlice from './Slices/recipeSlice';
import creatorSlice from './Slices/creatorSlice';
import searchSlice from './Slices/searchSlice';
import favouriteSlice from './Slices/favouriteSlice';

const store = configureStore({
    reducer: {
        auth:authSlice,
        recipes:recipesSlice,
        recipe:recipeSlice,
        creator:creatorSlice,
        search:searchSlice,
        favourites:favouriteSlice
    },
})

export default store;