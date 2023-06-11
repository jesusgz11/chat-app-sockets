import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadHistoryChat, startFetchingData } from './chat-slice';
import apiChat from '../../../axios/chat-socket-server';

export const getHistoryChat = createAsyncThunk(
  'chat/history-chat',
  async (chatId, { dispatch, rejectWithValue }) => {
    try {
      dispatch(startFetchingData());
      const { data: axiosData } = await apiChat.get(`messages/${chatId}`, {
        headers: {
          'x-token': localStorage.getItem('token'),
        },
      });
      dispatch(loadHistoryChat(axiosData?.data?.messages || []));
      return;
    } catch (error) {
      dispatch(loadHistoryChat([]));
      return rejectWithValue(error.response.data);
    }
  }
);
