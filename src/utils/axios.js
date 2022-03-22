import axios from "axios";
import { apiUrl } from "./index";

axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url);

    const allowedOrigins = [apiUrl];

    const token = localStorage.getItem("token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    console.log(error);

    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("axios error:", error);

    const statusCode = error.response ? error.response.status : null;

    if (Number(statusCode) === 401) {
      console.error("user needs logout");
    }

    return Promise.reject(error);
  }
);

export default axios;
