import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feasure/todo/todoSlice';


export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
