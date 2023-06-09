import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import token from '@/Helpers/Token';

export const fetchCreator = createAsyncThunk(
    'creator/fetchCreator',
    async (id) => {
        const res = await axios('http://127.0.0.1:8000/api/user/'+id,{headers: {'Authorization': `Bearer ${token("GET")}`}})
        const data = await res.data
        return data
    }
)

const initialState = {
    isLoading:true,
    contents:{},
    error:""
}

export const creatorSlice = createSlice({
    name: 'creator',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCreator.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCreator.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchCreator.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },

})


export default creatorSlice.reducer