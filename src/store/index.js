import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
