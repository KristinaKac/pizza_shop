import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registration, login } from '../../http/userAPI'
import { jwtDecode } from "jwt-decode";

export const registrationThunk = createAsyncThunk('users/registration', async ({ name, email, password }) => {
    const { data } = await registration(name, email, password);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
})
export const loginThunk = createAsyncThunk('users/login', async ({ email, password }) => {
    const { data } = await login(email, password);
    console.log(data)
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
})

const initialState = {
    isAuth: false,
    user: {
        userInfo: {},
        status: 'loading'
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(registrationThunk.pending, (state, action) => {
            state.user.userInfo = {};
            state.user.status = 'loading';
        });
        builder.addCase(registrationThunk.rejected, (state, action) => {
            state.user.userInfo = {};
            state.user.status = 'error';
        });
        builder.addCase(registrationThunk.fulfilled, (state, action) => {
            state.user.userInfo = action.payload;
            state.user.status = 'loaded';
            state.isAuth = true;
        });

        builder.addCase(loginThunk.pending, (state, action) => {
            state.user.userInfo = {};
            state.user.status = 'loading';
        });
        builder.addCase(loginThunk.rejected, (state, action) => {
            state.user.userInfo = {};
            state.user.status = 'error';
        });
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            state.user.userInfo = action.payload;
            state.user.status = 'loaded';
            state.isAuth = true;
        });
    }
})

export const userReducer = userSlice.reducer
