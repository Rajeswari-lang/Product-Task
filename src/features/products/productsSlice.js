import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from './productsAPI';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
        state.items.push(action.payload);
      }, 
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;

