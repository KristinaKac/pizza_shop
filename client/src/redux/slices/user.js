import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registration, login, checkAuth } from '../../http/userAPI'
import { jwtDecode } from "jwt-decode";

export const registrationThunk = createAsyncThunk('users/registration', async ({ name, email, password }) => {
    const { data } = await registration(name, email, password);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
})
export const loginThunk = createAsyncThunk('users/login', async ({ email, password }) => {
    const { data } = await login(email, password);
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
})
export const checkAuthThunk = createAsyncThunk('users/auth', async () => {
    const { data } = await checkAuth();
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
})

const initialState = {
    isAuth: false,
    isAdmin: false,
    user: {
        userInfo: {},
        status: 'loading'
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
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
            if (action.payload.role === 'ADMIN') {
                state.isAdmin = true;
            }
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
            if (action.payload.role === 'ADMIN') {
                state.isAdmin = true;
            }
            state.user.userInfo = action.payload;
            state.user.status = 'loaded';
            state.isAuth = true;
        });

        builder.addCase(checkAuthThunk.pending, (state, action) => {
            state.user.userInfo = {};
            state.user.status = 'loading';
        });
        builder.addCase(checkAuthThunk.rejected, (state, action) => {
            state.user.userInfo = {};
            state.user.status = 'error';
        });
        builder.addCase(checkAuthThunk.fulfilled, (state, action) => {
            if (action.payload.role === 'ADMIN') {
                state.isAdmin = true;
            }
            state.user.userInfo = action.payload;
            state.user.status = 'loaded';
            state.isAuth = true;
        });
    }
});

export const { setIsAuth, setUser } = userSlice.actions;

export const userReducer = userSlice.reducer
