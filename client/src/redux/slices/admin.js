import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createProduct, createType, getAllTypes, removeProduct } from '../../http/adminAPI';

export const createTypeThunk = createAsyncThunk('type/create', async (name) => {
    const { data } = await createType(name);
    return data;
});
export const getAllTypesThunk = createAsyncThunk('type/getAll', async () => {
    const { data } = await getAllTypes();
    return data;
});
export const createProductThunk = createAsyncThunk('product/create', async (formData) => {
    const { data } = await createProduct(formData);
    return data;
});
export const removeProductThunk = createAsyncThunk('product/removeProduct', async (product) => {
    const { data } = await removeProduct(product);
    return data;
});


const initialState = {
    types: {
        items: [],
        status: 'loading'
    },
}

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

    },
    extraReducers: builder => {
        builder.addCase(getAllTypesThunk.pending, (state, action) => {
            state.types.items = [];
            state.types.status = 'loading';
        });
        builder.addCase(getAllTypesThunk.rejected, (state, action) => {
            state.types.items = [];
            state.types.status = 'error';
        });
        builder.addCase(getAllTypesThunk.fulfilled, (state, action) => {
            state.types.items = action.payload;
            state.types.status = 'loaded';
        });
    }
});

export const adminReducer = adminSlice.reducer