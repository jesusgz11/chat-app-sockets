import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  username: null,
  email: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }) {
      state.uid = payload.uid;
      state.checking = false;
      state.logged = true;
      state.username = payload.username;
      state.email = payload.email;
    },
    logout(state) {
      state.uid = null;
      state.checking = false;
      state.logged = false;
      state.username = null;
      state.email = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
