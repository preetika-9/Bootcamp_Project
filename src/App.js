import "./App.css";
import React from "react";

import { AppRoutes } from "./Routes";
//import { useNavigate } from "react-router-dom";

//import jwt_decode from "jwt-decode";

function App() {
  // const navigate = useNavigate();
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };

  // const timeCheck = () => {
  //   //const token = localStorage.getItem("token");
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiYWRkcmVzcyI6IkxhbGl0cHVyLCBOZXBhbCIsInBob25lIjoiOTg0MTEyMzEyMyIsImVtYWlsIjoiYWRtaW5AZ3VyenUuY29tIiwiYWN0aXZlIjoxLCJkYXRlX29mX2JpcnRoIjoiMjAyMi0wMy0wMlQyMDo1OToyOC4xMTFaIiwiaWF0IjoxNjQ2NzM2MzY5LCJleHAiOjE2NDY4MjI3Njl9.BTdrEKy1LD6hfRu0UM2yOxz-sht1ux-3n-UrLWQJmBM";
  //   console.log(token);

  //   const decoded = jwt_decode(token);
  //   const timezoneOffset = new Date().getTime() / 1000;
  //   const browserTime = Math.round(timezoneOffset);
  //   const expTime = decoded?.exp;

  //   console.log(browserTime);
  //   console.log(expTime);

  //   if (browserTime >= expTime) {
  //     logout();
  //   }
  //   logout();
  // };
  // useEffect(() => {
  //   timeCheck();
  // }, []);
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
