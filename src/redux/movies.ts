import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { MovieResponse } from '@/types';

type query = string;

export const getSearchMovies = createAsyncThunk(
  'movies',
  async (query: query) => {
    return await axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=bb3ff48d`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });
  }
);

type MoviesState = {
  searchResult: MovieResponse;
  loading: boolean;
  error?: AxiosError;
};

const initialState = {
  searchResult: {},
  loading: false,
} as MoviesState;

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchMovies.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getSearchMovies.fulfilled, (state, action) => {
      const data = action.payload as MovieResponse;
      return { ...state, searchResult: data, loading: false };
    });
    builder.addCase(getSearchMovies.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error as AxiosError };
    });
  },
});

export default moviesSlice.reducer;
