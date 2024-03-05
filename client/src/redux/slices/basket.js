import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createProduct, createType, getAllTypes } from '../../http/adminAPI';
import { addToCart, getAllProductsId, getBasket } from '../../http/basketAPI';

export const getBasketThunk = createAsyncThunk('basket/get', async () => {
    const { data } = await getBasket();
    return data;
});
export const addToCartThunk = createAsyncThunk('basket/add', async (id) => {
    const { data } = await addToCart(id);
    return data;
});
export const getAllProductsIdThunk = createAsyncThunk('basket/getAll', async () => {
    const { data } = await getAllProductsId();
    return data;
});


const initialState = {
    basket: {
        id: null,
        status: 'loading'
    },
    productsAtCart: {
        products: [],
        status: 'loading'
    }
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {


    },
    extraReducers: builder => {
        builder.addCase(getBasketThunk.pending, (state, action) => {
            state.basket.id = null;
            state.basket.status = 'loading';
        });
        builder.addCase(getBasketThunk.rejected, (state, action) => {
            state.basket.id = null;
            state.basket.status = 'error';
        });
        builder.addCase(getBasketThunk.fulfilled, (state, action) => {
            state.basket.id = action.payload.id;
            state.basket.status = 'loaded';
        });
        builder.addCase(getAllProductsIdThunk.pending, (state, action) => {
            state.productsAtCart.products = [];
            state.productsAtCart.status = 'loading';
        });
        builder.addCase(getAllProductsIdThunk.rejected, (state, action) => {
            state.productsAtCart.products = [];
            state.productsAtCart.status = 'error';
        });
        builder.addCase(getAllProductsIdThunk.fulfilled, (state, action) => {
            state.productsAtCart.products = action.payload.rows;
            state.productsAtCart.status = 'loaded';
        });
    }
});

export const basketReducer = basketSlice.reducer