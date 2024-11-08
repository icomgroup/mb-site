import ax from "axios";
import { API_BASE_URL } from "@/constants/domains";

let token = localStorage.getItem("token");

const axios = ax.create({
  baseURL: API_BASE_URL,
});

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept-Language"] = `ar`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export function refreshAxiosToken() {
  token = localStorage.getItem("token");
}

export default axios;
