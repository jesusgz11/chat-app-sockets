import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/auth-slice';
import chatSlice from './slices/chat/chat-slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat: chatSlice,
  },
});
