import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig.js";
import axios from "axios";
import { dateCalculater } from "../../utils/dateCalculater.js";
import { dateFormatter } from "../../utils/dateFormatter.js";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  async (arg, thunkAPI) => { // (외부에서 주입받는 값, thunk가 실행될때 해당 slice(또는 해당 redux관련)에 접근하게 해주는 파라미터)
    // state 접근 방법
    const state = thunkAPI.getState();
    const pastDateYMD = dateFormatter.formatDateToYMD(dateCalculater.getPastDate((1000*60*60*24*30)));

    const url = `${axiosConfig.BASE_URL}/searchFestival2`;
    // ↓ destructuring 문법
    // const params = {
    //   serviceKey: axiosConfig.serviceKey,
    //   MobileOS: axiosConfig.MobileOS,
    //   MobileApp: axiosConfig.MobileApp,
    //   _type: axiosConfig.type,
    //   arrange: axiosConfig.arrange
    // }
    // const response = await axios.get(url, {params});

    const config = {
      // AxiosRequestConfig의 default값 말고 셋팅할 값만 작성
      // headers: {},
      params: {
        serviceKey: axiosConfig.SERVICE_KEY,
        MobileOS: axiosConfig.MOBILE_OS,
        MobileApp: axiosConfig.MOBILE_APP,
        _type: axiosConfig.TYPE,
        arrange: axiosConfig.ARRANGE,
        numOfRows: axiosConfig.NUM_OF_ROWS,
        pageNo: state.festival.page + 1,
        eventStartDate: pastDateYMD
      }
    }

    const response = await axios.get(url, config);
    return response.data.response.body;
  }
);

export {
  festivalIndex
};