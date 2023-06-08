import { createSelector } from '@reduxjs/toolkit';

const selectAuthState = (state) => state.auth;

export const selectUserId = createSelector([selectAuthState], (auth) => {
  return auth.uid;
});

export const selectUsername = createSelector([selectAuthState], (auth) => {
  return auth.username;
});
