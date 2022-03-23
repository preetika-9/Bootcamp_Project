import axios from "axios";
import { apiUrl } from "./index";
import { errorConsole } from "./helper";

axios.defaults.baseURL = apiUrl;
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiYWRkcmVzcyI6IkxhbGl0cHVyLCBOZXBhbCIsInBob25lIjoiOTg0MTEyMzEyMyIsImVtYWlsIjoiYWRtaW5AZ3VyenUuY29tIiwiYWN0aXZlIjoxLCJkYXRlX29mX2JpcnRoIjoiMjAyMi0wMy0wMlQyMDo1OToyOC4xMTFaIiwiaWF0IjoxNjQ4MDI0MzMyLCJleHAiOjE2NDgxMTA3MzJ9.fT4zOnxKplyw6025vV5_HRkB2ZlFzhtIyBCiQ_gu-iU";

    config.headers.authorization = `Bearer ${token}`;

    return config;
  },

  (error) => {
    console.log(error);
    errorConsole(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("axios error:", error.URL);

    errorConsole(error);
    // const statusCode = error.response ? error.response.status : null;

    // if (Number(statusCode) === 401) {
    //   console.error("user needs logout");
    // }

    //return Promise.reject(error);
  }
);

export default axios;
