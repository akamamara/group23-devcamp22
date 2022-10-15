import { configureStore } from '@reduxjs/toolkit';
import problemDetailsReducer from '../reducers/problemDetailsReducer';

export const store = configureStore({
  reducer: {
    problemDetails: problemDetailsReducer,
  },
});
