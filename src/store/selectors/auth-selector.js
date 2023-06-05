import { createSelector } from '@reduxjs/toolkit';

export const selectAuthState = () => createSelector((state) => state.auth);
