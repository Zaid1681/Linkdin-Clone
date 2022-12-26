import {  createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',  //intializing 
  initialState:{
    user :   null //globally declare the user in initial state
  } ,  
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    loginUser: (state , action) => {
    
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  
  },
 
 
});

export const {  logoutUser, loginUser } = userSlice.actions;

export const selectUser = (state) => state.user.user  ; //selector used to get the user


export default userSlice.reducer;
