import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AddExpenses from "../../components/ExpensesComponent/AddExpenses";
import { Login, Register } from "../../components/organisms";
function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expenses" element={<AddExpenses />} />
      </Routes>
    </>
  );
}
export default AppRoute;
