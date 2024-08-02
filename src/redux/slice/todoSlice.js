import { createSlice } from '@reduxjs/toolkit';


const todoSlice =  createSlice({
  name:'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
      prepare: (text) => {
        const id = nanoid()
        return { payload: { id, text } }
      },
    },
  }
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice;