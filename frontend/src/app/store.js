import { configureStore } from '@reduxjs/toolkit';
import initialReducer from '../features/initialReducer';

export const store = configureStore({
  reducer: {
    setup: initialReducer,
  },
});
