import "./App.css";
import React from "react";

import { AppRoutes } from "./Routes";
//import { useNavigate } from "react-router-dom";

//import jwt_decode from "jwt-decode";

function App() {
  // const navigate = useNavigate();
  // const logout = () => {
  //   // localStorage.removeItem("token");
  //   navigate("/login");
  // };

  // const timeCheck = () => {
  //   const token = localStorage.getItem("token");
  //   console.log(token);

  //   // const decoded = jwt_decode(token);
  //   const timezoneOffset = new Date().getTime() / 1000;
  //   const browserTime = Math.round(timezoneOffset);
  //   // const expTime = decoded?.exp;

  //   console.log(browserTime);
  //   // console.log(expTime);

  //   // if (browserTime >= expTime) {
  //   //   logout();
  //   // }
  //   logout();
  // };

  // timeCheck();
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
