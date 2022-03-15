import * as React from "react";
import { Routes, Route } from "react-router-dom";
import AddExpenses from "../../components/organisms/AddExpenses";
import { Login, Register, ListPage } from "../../components/organisms";
import AddIncome from "../../components/organisms/addIncome/addIncome";
import ExpensesList from "../../components/organisms/ListPage/ExpensesList";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/income" element={<AddIncome />} />

        <Route path="/expenses" element={<AddExpenses />} />
        <Route path="/listpage" element={<ListPage />} />
        <Route path="/listexpenses" element={<ExpensesList />} />
        <Route path="/income/:id" element={<AddIncome />} />
      </Routes>
    </>
  );
}
export default AppRoute;
