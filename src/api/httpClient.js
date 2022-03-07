import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3000,
  withCredentials: true,
});

httpClient.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem("auth")}`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default httpClient;
