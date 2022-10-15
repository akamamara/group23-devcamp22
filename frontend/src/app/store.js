import { configureStore } from '@reduxjs/toolkit';
import initialReducer from '../reducers/initialReducer';

export const store = configureStore({
  reducer: {
    setup: initialReducer,
  },
});
