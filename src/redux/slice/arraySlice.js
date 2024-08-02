import { createSlice } from '@reduxjs/toolkit';

const arraySlice =  createSlice({
  name:'array',
  initialState: [],
  reducers: {
    setArray(state, action) {
      console.log(state)
      console.log(action.payload)
      state = action.payload;
      return state;
    }
  }
});


export const { setArray } = arraySlice.actions;

export default arraySlice.reducer;