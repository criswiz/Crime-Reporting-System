import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import complaintsReducer from '../features/complaints/complaintsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    complaint: complaintsReducer,
  },
});
