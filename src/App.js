import "./App.css";
import React from "react";
//import { AppRoutes } from "./Routes";
import { Login } from "./components/organisms/Login";

function App() {
  return (
    <div className="container">
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        {/* <Header /> */}
        {/* <AppRoutes /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
