import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../../components/organisms";
import { ListPage } from "../../components/organisms/ListPage";
function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listpage" element={<ListPage />} />
      </Routes>
    </>
  );
}
export default AppRoute;
