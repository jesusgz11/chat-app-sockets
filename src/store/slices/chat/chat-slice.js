import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  chatUid: null,
  users: [],
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    startFetchingData(state) {
      state.loading = true;
    },
    setUsers(state, { payload }) {
      state.users = payload;
    },
    setActiveChat(state, { payload }) {
      if (state.chatUid === payload) {
        return state;
      }
      state.chatUid = payload;
      state.messages = [];
    },
    setPersonalMessage(state, { payload }) {
      if (state.chatUid === payload.from || state.chatUid === payload.to) {
        state.messages.push(payload);
      }
      return state;
    },
    loadHistoryChat(state, { payload }) {
      state.messages = payload;
    },
    resetMessages() {
      return initialState;
    },
  },
});

export const {
  startFetchingData,
  setUsers,
  setActiveChat,
  setPersonalMessage,
  loadHistoryChat,
  resetMessages,
} = chatSlice.actions;

export default chatSlice.reducer;
