import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';
import arrayReducer from './slice/arraySlice';
import slideMenuReducer from './slice/slideMenuSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    array: arrayReducer,
    slideMenu: slideMenuReducer
  },
})

export default store