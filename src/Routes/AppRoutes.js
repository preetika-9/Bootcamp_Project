import * as React from "react";
import { Routes, Route } from "react-router-dom";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}
export default AppRoute;
