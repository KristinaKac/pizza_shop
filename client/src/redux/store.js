import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user';

const store = configureStore({
    reducer: {
        userReducer: userReducer,
    },
    // middleware: 
})

export default store;