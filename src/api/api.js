import axios from "axios";
import { API_KEY } from "@/utils/constants/Config";

export const API_URL = axios.create({
  baseURL: `https://dapi.kakao.com/v3/search/book?`,
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

// 도서 불러오기
export const fetchBook = async () => {
  const resp = await API_URL.get("target=title&query=해리포터");
  return resp.data;
};

// 도서 검색
export const searchBook = async (keyword) => {
  console.log(keyword);
  const params = {
    query: keyword,
    sort: "accuracy", // accuracy | recency 정확도 or 최신
    size: 20,
  };
  const resp = await API_URL.get("target=title", { params });
  console.log(resp.data);
  return resp.data;
};

// json-server
export const jsonServer = async () => {
  try {
    const resp = await axios.get(`http://localhost:3000/documents`);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
};
