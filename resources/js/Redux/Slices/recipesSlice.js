import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import token from '@/Helpers/Token';

export const fetchRecipes = createAsyncThunk(
    'recipes/fetchRecipes',
    async () => {
        const res = await axios('http://127.0.0.1:8000/api/recipes',{headers: {'Authorization': `Bearer ${token("GET")}`}})
        const data = await res.data
        return data
    }
)

const initialState = {
    isLoading:true,
    contents:[],
    error:""
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchRecipes.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchRecipes.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },

})


export default recipesSlice.reducer