import { createSlice } from "@reduxjs/toolkit";
import { festivalIndex } from "../thunks/festivalThunk.js";
import { localStorageUtil } from "../../utils/localStorageUtil.js";

const festivalSlice  = createSlice({
  name: 'festivalSlice',
  initialState: {
    // list: null, // festival list // 배열 data가 들어옴(null || [] || {} 로 초기데이터)
    list: localStorageUtil.getFestivalList() ? localStorageUtil.getFestivalList() : [], // 페스티벌 리스트
    page: localStorageUtil.getFestivalPage() ? localStorageUtil.getFestivalPage() : 0, // 초기값 0(festivalThunk에 +1되어 있으므로 0으로)
    scrollEventFlg: localStorageUtil.getFestivalScrollFlg() ? localStorageUtil.getFestivalScrollFlg() : true, // 스크롤 이벤트 디바운싱 제어 플래그
  },
  reducers: {
    // setList(state, action) { // state는 위의 initialState를 가리킨다.
    //   state.list = action.payload;
    // }
    setScrollEventFlg: (state, action) => {
      state.scrollEventFlg = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(festivalIndex.fulfilled, (state, action) => {
        // state는 위의 initialState를 가리킨다.
        // console.log(action.payload, action.type);
        // if(state.list !== null) {
        //   // 페이지 추가 처리
        //   state.list = [...state.list, ...action.payload.items.item]; // list에 담기
        //   state.page = action.payload.pageNo;
        // } else {
        //   // 초기 페이지 처리
        //   state.list = action.payload.items.item; // list에 담기
        //   state.page = action.payload.pageNo;
        // }
        if(action.payload.items?.item) {
          // state 저장
          state.list = [...state.list, ...action.payload.items.item];
          state.page = action.payload.pageNo;
          state.scrollEventFlg = true;

          // localstorage 저장
          localStorageUtil.setFestivalList(state.list);
          localStorageUtil.setFestivalPage(state.page);
          localStorageUtil.setFestivalScrollFlg(state.scrollEventFlg);
          
        } else {
          state.scrollEventFlg = false;
        }
      })
      // .addMatcher( // 필요없으면 지우기
      //   (action) => action.type.endsWith('/pending'), //결과:true, false
      //   (state) => {
      //     console.log('처리중입니다.');
      //   }
      // )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          console.error('에러에러.', action.error);
        }
      );
  }
});

// export로 객체로 내보낸다.(destructuring 문법으로 내보내고 받을때도)
export const {
  // setList
  setScrollEventFlg
} = festivalSlice.actions;

// export default 는 자체를 내보냄(받을때도 dextructuring 으로 안됨.)
export default festivalSlice.reducer; // store에서 사용하기 위함