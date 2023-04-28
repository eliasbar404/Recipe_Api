import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import token from '../../Helpers/Token';

export const fetchUser = createAsyncThunk(
    'auth/fetchUser',
    axios.get('http://127.0.0.1:8000/api/auth/user-profile',{headers: {'Authorization': `Bearer ${token("GET")}`}}).then(
        (res)=>{
            return res.data
        }
    )
)

const initialState = {
    status: false,
    user:{
        name:"ahmed"
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login:(state,action)=>{
            state.user.name=action.payload
        }
    }

})


export default authSlice.reducer

export const { login } = authSlice.actions



















// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   isLoggedIn: false,
//   user: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//     },
//     logoutSuccess: (state) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//   },
// });

// export const { loginSuccess, logoutSuccess } = authSlice.actions;

// export const login = ({ email, password }) => async (dispatch) => {
//   try {
//     const response = await axios.post('/api/auth/login', { email, password });
//     localStorage.setItem('token', response.data.access_token);
//     localStorage.setItem('refreshToken', response.data.refreshToken);
    
//     dispatch(getUserInfo());
//     console.log('login function fini')
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const logout = () => async (dispatch) => {
//   try {
//     await axios.post('/api/auth/logout');
//     localStorage.removeItem('token');
//     localStorage.removeItem('refreshToken');
//     dispatch(logoutSuccess());
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getUserInfo = () => async (dispatch) => {
//   try {
//     const token = localStorage.getItem('token');
//     const response = await axios.get('/api/auth/user-profile', { headers: { Authorization: `Bearer ${token}` } });
//     dispatch(loginSuccess(response.data));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const refreshJWTToken = () => async (dispatch) => {
//   try {
//     const refreshToken = localStorage.getItem('refreshToken');
//     const response = await axios.post('/api/auth/refresh', { refreshToken });
//     localStorage.setItem('token', response.data.token);
//     localStorage.setItem('refreshToken', response.data.refreshToken);
//     dispatch(getUserInfo());
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default authSlice.reducer;