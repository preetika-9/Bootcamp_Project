import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AddExpenses from "../../components/ExpensesComponent/AddExpenses";
import { Login, Register } from "../../components/organisms";
import { ListPage } from "../../components/organisms/ListPage";
function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        

        <Route path="/expenses" element={<AddExpenses />} />
        <Route path="/listpage" element={<ListPage />} />

      </Routes>
    </>
  );
}
export default AppRoute;
