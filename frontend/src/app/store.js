import { configureStore } from '@reduxjs/toolkit';
import { changeMechanic } from '../reducers/mechanicReducer';
import problemDetailsReducer from '../reducers/problemDetailsReducer';
import changeMechanicReducer from '../reducers/mechanicReducer'
export const store = configureStore({
  reducer: {
    problemDetails: problemDetailsReducer,
    mechanicDetails: changeMechanicReducer
  },
});
