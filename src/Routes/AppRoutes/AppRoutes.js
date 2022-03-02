import * as React from "react";
import { Routes, Route, Router } from "react-router-dom";
import { Login, Register } from "../../components/organisms";
function AppRoute() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRoute;
