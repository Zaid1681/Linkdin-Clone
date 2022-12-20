import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counterSlice'; //getting user from user reducer

// configuring store
export const store = configureStore({
  reducer: {
    user: userReducer,  //
  },
});

export default store ;
