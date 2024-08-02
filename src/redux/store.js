import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import mainReducer from './features/slice';

export const store = configureStore({
  reducer: { auth: authReducer, main: mainReducer },
});
