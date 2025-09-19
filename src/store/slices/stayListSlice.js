import { createSlice } from "@reduxjs/toolkit";
import { stayIndex } from "../thunks/stayThunk.js";

const stayListSlice = createSlice({
  name: 'stayListSlice',
  initialState: {
    list: null,
    page: 0,
    scrollEventFlg: false,
  },
  reducers: {
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(stayIndex.fulfilled, (state, action) => {
        if(action.payload.items?.item) {
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;

        } else {
          state.scrollEventFlg = false;
        }  
      })
  }
});

export const  {
  setScrollEventFlg
} = stayListSlice.actions;

export default stayListSlice.reducer;