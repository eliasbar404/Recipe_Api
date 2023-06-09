import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import token from '@/Helpers/Token';

export const fetchRecipe = createAsyncThunk(
    'recipe/fetchRecipe',
    async (id) => {
        const res = await axios('http://127.0.0.1:8000/api/recipe/'+id,{headers: {'Authorization': `Bearer ${token("GET")}`}})
        const data = await res.data
        return data
    }
)

const initialState = {
    isLoading:true,
    contents:{},
    error:""
}

export const recipeSlice = createSlice({
    name: 'recipe',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecipe.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchRecipe.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchRecipe.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },

})


export default recipeSlice.reducer