import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../../components/organisms";
function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}
export default AppRoute;
