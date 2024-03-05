import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './slices/user';
import { productReducer } from './slices/product';
import { adminReducer } from './slices/admin';
import { basketReducer } from './slices/basket';

const store = configureStore({
    reducer: {
        userReducer,
        productReducer,
        adminReducer,
        basketReducer,
    }
})

export default store;