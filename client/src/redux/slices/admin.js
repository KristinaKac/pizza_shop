import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createType, getAllTypes } from '../../http/adminAPI';

export const createTypeThunk = createAsyncThunk('type/create', async (name) => {
    const { data } = await createType(name);
    return data;
});
export const getAllTypesThunk = createAsyncThunk('type/getAll', async () => {
    const { data } = await getAllTypes();
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
        // builder.addCase(getOneProductThunk.pending, (state, action) => {
        //     state.product.item = [];
        //     state.product.status = 'loading';
        // });
        // builder.addCase(getOneProductThunk.rejected, (state, action) => {
        //     state.product.item = [];
        //     state.product.status = 'error';
        // });
        // builder.addCase(getOneProductThunk.fulfilled, (state, action) => {
        //     state.product.item = action.payload;
        //     state.product.status = 'loaded';
        // });
    }
});

// export const { setIsAuth, setUser } = productSlice.actions;

export const adminReducer = adminSlice.reducer