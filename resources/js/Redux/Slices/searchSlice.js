import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    on:false,
    title:"",
    rating:"",
    origin:"",
    pre_time_min:"",
    pre_time_max:"",
    difficulty:"",
    category:""
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        set_On:(state,action)=>{
            state.on = action.payload
        },
        set_Title:(state,action)=>{
            state.title = action.payload;
        },
        set_Rating:(state,action)=>{
            state.rating = action.payload;
        },
        set_Origin:(state,action)=>{
            state.origin = action.payload;
        },
        set_Pre_time_min:(state,action)=>{
            state.pre_time_min = action.payload;
        },
        set_Pre_time_max:(state,action)=>{
            state.pre_time_max = action.payload;
        },
        set_Difficulty:(state,action)=>{
            state.difficulty = action.payload;
        },
        set_Category:(state,action)=>{
            state.category = action.payload;
        }
    }

})

export default searchSlice.reducer
export const { set_On,set_Title,set_Rating,set_Origin,set_Pre_time_min,set_Pre_time_max,set_Difficulty,set_Category } = searchSlice.actions