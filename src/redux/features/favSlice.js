import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fav: [],
  isInFav: false,
};

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default favSlice.reducer;
