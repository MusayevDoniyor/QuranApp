import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://quranapi.pages.dev/api",
});

export default api;
