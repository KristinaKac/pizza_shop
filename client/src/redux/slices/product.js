import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createProduct, getAllProducts, getOneProduct } from '../../http/productAPI';

export const createProductThunk = createAsyncThunk('product/create', async (product) => {
    const { data } = await createProduct(product);
    return data;
})
export const getAllProductsThunk = createAsyncThunk('product/getAll', async () => {
    const { data } = await getAllProducts();
    return data;
})
export const getOneProductThunk = createAsyncThunk('product/getOne', async (id) => {
    const { data } = await getOneProduct(id);
    return data;
})

const initialState = {
    products: {
        items: [],
        status: 'loading'
    },
    product: {
        item: [],
        status: 'loading'
    }
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

    },
    extraReducers: builder => {
        builder.addCase(getAllProductsThunk.pending, (state, action) => {
            state.products.items = [];
            state.products.status = 'loading';
        });
        builder.addCase(getAllProductsThunk.rejected, (state, action) => {
            state.products.items = [];
            state.products.status = 'error';
        });
        builder.addCase(getAllProductsThunk.fulfilled, (state, action) => {
            state.products.items = action.payload.rows;
            state.products.status = 'loaded';
        });
        builder.addCase(getOneProductThunk.pending, (state, action) => {
            state.product.item = [];
            state.product.status = 'loading';
        });
        builder.addCase(getOneProductThunk.rejected, (state, action) => {
            state.product.item = [];
            state.product.status = 'error';
        });
        builder.addCase(getOneProductThunk.fulfilled, (state, action) => {
            state.product.item = action.payload;
            state.product.status = 'loaded';
        });
    }
});

// export const { setIsAuth, setUser } = productSlice.actions;

export const productReducer = productSlice.reducer
