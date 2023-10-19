import axios from "axios";
import { API_KEY } from "@/utils/constants/Config";

export const API_URL = axios.create({
  baseURL: `https://dapi.kakao.com/v3/search/book`,
  headers: { Authorization: `KakaoAK ${API_KEY}` },
});

export const test = () => {
  async () => {
    const resp = await API_URL.get(`/query=데미안`);
    return resp.data;
  };
};
