import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig";
import axios from "axios";

const festivalIndex = createAsyncThunk(
  'festivalSlice/festivalIndex',
  async () => {
    const url = `${axiosConfig.baseUrl}/searchFestival2`;
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
        serviceKey: axiosConfig.serviceKey,
        MobileOS: axiosConfig.MobileOS,
        MobileApp: axiosConfig.MobileApp,
        _type: axiosConfig.type,
        arrange: axiosConfig.arrange,
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