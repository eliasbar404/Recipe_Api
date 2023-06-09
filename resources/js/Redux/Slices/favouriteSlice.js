import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import token from '@/Helpers/Token';

export const fetchFavourites = createAsyncThunk(
    'favourites/fetchFavourites',
    async (id) => {
        const res = await axios('http://127.0.0.1:8000/api/fav/'+id,{headers: {'Authorization': `Bearer ${token("GET")}`}})
        const data = await res.data
        return data
    }
)

const initialState = {
    isLoading:true,
    contents:[],
    error:""
}

export const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        remove:(state,action)=>{
            state.contents = state.contents.filter((val,index)=>{
                if(val.recipe.id != action.payload){
                    return val
                }
            })

        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFavourites.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchFavourites.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchFavourites.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },

})


export default favouriteSlice.reducer

export const { remove } = favouriteSlice.actions