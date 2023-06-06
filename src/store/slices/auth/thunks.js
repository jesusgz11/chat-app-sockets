import { createAsyncThunk } from '@reduxjs/toolkit';
import apiChat from '../../../axios/chat-socket-server';
import { login, logout, startFetchingData } from './auth-slice';
import { saveToken } from '../../../helpers/saveToken';
import Swal from 'sweetalert2';

export const loginUser = createAsyncThunk(
  'auth/user-login',
  async ({ email, password }, { dispatch }) => {
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
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
      dispatch(logout());
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/user-register',
  async ({ email, password, username }, { dispatch }) => {
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
    } catch (error) {
      Swal.fire('Error', error.response.data.message, 'error');
      dispatch(logout());
    }
  }
);
