import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

/* createStore */
export default configureStore({
  reducer: {
    user: userReducer,
  },
});

