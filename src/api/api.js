import axios from "axios";
import { API_KEY } from "@/utils/constants/Config";

export const API_URL = axios.create({
  baseURL: `https://dapi.kakao.com/v3/search/book?query=`,
  headers: { Authorization: `KakaoAK ${API_KEY}` },
});

API_URL.interceptors.request.use(
  (config) => {
    console.log("request start", config);
    return config;
  },
  (error) => {
    console.log("request error", error);
    return Promise.reject(error);
  }
);

API_URL.interceptors.response.use(
  (resp) => {
    console.log("get response", resp);
    return resp;
  },
  (error) => {
    console.log("response error", error);
    return Promise.reject(error);
  }
);

// 도서 검색
export const searchBook = async (params) => {
  console.log(params);
  const resp = await API_URL.get("?title=", { params });
  return resp.data;
};

// 도서 불러오기
export const fetchBook = async () => {
  const resp = await API_URL.get(`title`);
  return resp.data;
};

export const jsonServer = async () => {
  try {
    const resp = await axios.get(`http://localhost:3000/documents`);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
