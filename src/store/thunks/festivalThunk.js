import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig";
import axios from "axios";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  async (page) => {
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
        pageNo: page,
        eventStartDate: '20250401'
      }
    }

    const response = await axios.get(url, config);

    return response.data.response.body;
  }
);

export {
  festivalIndex
};