import { createSelector } from '@reduxjs/toolkit';

const selectChatState = (state) => state.chat;

export const selectChatUsers = createSelector([selectChatState], (chat) => {
  return chat.users;
});

export const selectActiveChat = createSelector([selectChatState], (chat) => {
  return chat.chatUid;
});

export const selectMessages = createSelector([selectChatState], (chat) => {
  return chat.messages;
});
