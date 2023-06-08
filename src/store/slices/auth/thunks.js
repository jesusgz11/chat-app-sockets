import { createAsyncThunk } from '@reduxjs/toolkit';
import apiChat from '../../../axios/chat-socket-server';
import { login, logout, startFetchingData } from './auth-slice';
import { saveToken } from '../../../helpers/saveToken';

export const loginUser = createAsyncThunk(
  'auth/user-login',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startFetchingData());
      const { data: axiosData } = await apiChat.post('auth/login', {
        email,
        password,
      });
      const token = axiosData.data?.token;
      const user = axiosData.data?.user;
      dispatch(login({ ...user }));
      saveToken(token);
      return { token };
    } catch (error) {
      dispatch(logout());
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/user-register',
  async ({ email, password, username }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startFetchingData());
      const { data: axiosData } = await apiChat.post('auth/create-user', {
        email,
        password,
        username,
      });
      const token = axiosData.data?.token;
      const user = axiosData.data?.user;
      dispatch(login({ ...user }));
      saveToken(token);
      return { token };
    } catch (error) {
      dispatch(logout());
      return rejectWithValue(error.response.data);
    }
  }
);

export const renewToken = createAsyncThunk(
  'auth/renew-token',
  async ({ token }, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startFetchingData());
      const { data: axiosData } = await apiChat.get('auth/renew-token', {
        headers: {
          'x-token': token,
        },
      });
      const newToken = axiosData.data?.token;
      const user = axiosData.data?.user;
      dispatch(login({ ...user }));
      return { newToken };
    } catch (error) {
      dispatch(logout());
      return rejectWithValue(error.response.data);
    }
  }
);
