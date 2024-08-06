import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/CounterSlice';
import tictactoeReducer from '../Features/Tictactoe/tictactoeSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    tictactoe: tictactoeReducer,
  },
});

export default store;
