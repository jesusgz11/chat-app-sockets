import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  checking: false,
  username: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startFetchingData(state) {
      state.checking = true;
    },
    login(state, { payload }) {
      state.uid = payload.uid;
      state.checking = false;
      state.username = payload.username;
      state.email = payload.email;
    },
    logout(state) {
      state.uid = null;
      state.checking = false;
      state.username = null;
      state.email = null;
    },
  },
});

export const { login, logout, startFetchingData } = authSlice.actions;

export default authSlice.reducer;
