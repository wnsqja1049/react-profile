import { createSlice } from '@reduxjs/toolkit';

const slideMenuSlice =  createSlice({
  name:'slideMenu',
  initialState: { 
    value: false,
    isSliding: false,
  },
  reducers: {
    setSlideMenu (state, action) {
			state.value = action.payload;
    },
    setIsSlidingMenu (state, action) {
			state.isSliding = action.payload;
    },
    openSlideMenu (state) {
      state.value = true;
      state.isSliding = true;
    },
    closeSlideMenu (state) {
      state.value = false;
      state.isSliding = false;
    },
  },
});


export const { 
  setSlideMenu, 
  setIsSlidingMenu,
  openSlideMenu,
  closeSlideMenu
} = slideMenuSlice.actions;

export default slideMenuSlice.reducer;