import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/AuthSlice';
import { apiSlice } from './Slices/apiSlice';

export default configureStore({
  reducer: { 
    auth: authReducer ,
  [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(apiSlice.middleware),
  devTools: true,
});
