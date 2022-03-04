// import { useState } from "react";
// import axios from "axios";

// const apiUrl = "http://localhost:3005/api/login";

// axios.interceptors.request.use(
//   (config) => {
//     const { origin } = new URL(config.url);

//     const allowedOrigins = [apiUrl];

//     const token = localStorage.getItem("token");

//     if (allowedOrigins.includes(origin)) {
//       config.headers.authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// function LoginApi() {
//   const storedJwt = localStorage.getItem("token");

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [jwt, setJwt] = useState(storedJwt || null);
//   const [fetchError, setFetchError] = useState(null);
// }

// // POST
// const getJwt = async (e) => {
//   e.preventDefault();

//   const postData = {
//     email, // input from form field username
//     password, // input from form field password
//   };

//   const { data } = await axios.post(`${apiUrl}/jwt`, postData);

//   localStorage.setItem("token", data.token);

//   setJwt(data.token);
// };

// function removeToken() {
//   localStorage.removeItem("token");
// }

// export default LoginApi;
