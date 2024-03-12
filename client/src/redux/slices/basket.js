import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToCart, getAllProductsId, removeFromCart } from '../../http/basketAPI';
import { getAllProducts } from '../../http/productAPI';

export const addToCartThunk = createAsyncThunk('basket/add', async (id) => {
    const { data } = await addToCart(id);
    return data;
});
export const removeFromCartThunk = createAsyncThunk('basket/remove', async (id) => {
    const { data } = await removeFromCart(id);
    return data;
});
export const productsIdAtCartThunk = createAsyncThunk('basket/getAll', async () => {
    const { data } = await getAllProductsId();
    return data;
});
export const getProductsThunk = createAsyncThunk('product/get', async () => {
    const { data } = await getAllProducts();
    return data;
})

const initialState = {
    basket: {
        productsId: {},
        status: 'loading'
    },
    products: {
        items: [],
        status: 'loading'
    },
    basketProduct: {
        items: [],
        status: 'loading'
    }
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasketProduct: (state, action) => {
            state.basketProduct.items = action.payload;
            state.basketProduct.status = 'loaded'
        },
    },
    extraReducers: builder => {
        builder.addCase(productsIdAtCartThunk.pending, (state, action) => {
            state.basket.productsId = [];
            state.basket.status = 'loading';
        });
        builder.addCase(productsIdAtCartThunk.rejected, (state, action) => {
            state.basket.productsId = [];
            state.basket.status = 'error';
        });
        builder.addCase(productsIdAtCartThunk.fulfilled, (state, action) => {

            const idArr = action.payload.rows.map(product => product.productId);
            const result = {};

            idArr.forEach(id => {
                if (Object.hasOwn(result, id)) {
                    result[id]++;
                } else {
                    result[id] = 1;
                }
            });
            state.basket.productsId = result;
            state.basket.status = 'loaded';
        });


        builder.addCase(getProductsThunk.pending, (state, action) => {
            state.products.items = [];
            state.products.status = 'loading';
        });
        builder.addCase(getProductsThunk.rejected, (state, action) => {
            state.products.items = [];
            state.products.status = 'error';
        });
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {
            state.products.items = action.payload.rows;
            state.products.status = 'loaded';
        });
    }
});

export const {setBasketProduct } = basketSlice.actions;

export const basketReducer = basketSlice.reducer