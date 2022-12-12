import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import getConfig from 'next/config';

import { Products } from '@/types';

const { publicRuntimeConfig: config } = getConfig();

function fetchProducts() {
  const http = axios.create({
    baseURL: config.API_URL,
    headers: {
      'content-type': 'application/json',
    },
  });
  return http.get<Products[]>('products');
}

export const getAllProducts = createAsyncThunk('products', async () => {
  try {
    const res = await fetchProducts();
    return res;
  } catch (err) {
    return err;
  }
});

type ProductState = {
  products: Products[];
  loading: boolean;
  error?: AxiosError;
};

const initialState = {
  products: [],
  loading: false,
} as ProductState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((item) => item.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
    updateProducts: (state, action) => {
      const products = action.payload as Products[];
      products.forEach((product) => {
        const item = state.products.find((item) => item.id === product.id);
        if (item) {
          item.quantity -= product.quantity;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      const { data } = action.payload as { data: Products[] };
      data.forEach((item) => {
        item.quantity = 20;
      });
      return { ...state, loading: false, products: data };
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error as AxiosError };
    });
  },
});

export default productsSlice.reducer;
export const { updateQuantity, updateProducts } = productsSlice.actions;
