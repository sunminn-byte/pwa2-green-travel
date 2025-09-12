import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk.js";

const festivalSlice  = createSlice({
  name: 'festivalSlice',
  initialState: {
    list: null, // festival list // 배열 data가 들어옴(null || [] || {} 로 초기데이터)
  },
  reducers: {
    setList(state, action) { // state는 위의 initialState를 가리킨다.
      state.list = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        // state는 위의 initialState를 가리킨다.
        console.log(action.payload, action.type);
      })
      .addMatcher(
        (action) => action.type.endsWith('./pending'), //결과:true, false
        (state) => {
          console.log('처리중입니다.');
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('./rejected'),
        (state) => {
          console.error('에러에러.');
        }
      );
  }
});

// export로 객체로 내보낸다.(destructuring 문법으로 내보내고 받을때도)
export const {
  setList
} = festivalSlice.actions;

// export default 는 자체를 내보냄(받을때도 dextructuring 으로 안됨.)
export default festivalSlice.reducer; // store에서 사용하기 위함