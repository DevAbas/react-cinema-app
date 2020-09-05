import { createSlice } from '@reduxjs/toolkit';

interface Movie {
  name: string;
}

const initialState: Movie[] = [];

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {}
});

export default movieSlice.reducer;
