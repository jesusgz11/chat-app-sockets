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
  },
});

export const { startFetchingData, setUsers } = chatSlice.actions;

export default chatSlice.reducer;
