import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user';
import { productReducer } from './slices/product';
import { adminReducer } from './slices/admin';

const store = configureStore({
    reducer: {
        userReducer,
        productReducer,
        adminReducer,
    }
})

export default store;