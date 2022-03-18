/* eslint-disable react/prop-types */
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import AddExpenses from "../../components/organisms/AddExpenses";
import { Login, Register, ListPage } from "../../components/organisms";
import AddIncome from "../../components/organisms/addIncome/addIncome";
import ExpensesList from "../../components/organisms/ListPage/ExpensesList";
import MonthExpenses from "components/organisms/MonthExpenses/MonthExpenses";
import { useSelector } from "react-redux";

//import jwt_decode from "jwt-decode";
//import moment from "moment";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const login = useSelector((state) => state.login.userAuthenticate);

  // const token = localStorage.getItem("token");
  // console.log(token);
  // var decoded = jwt_decode(token);

  // const timezoneOffset = new Date().getTime() / 1000;
  // const browserTime = Math.round(timezoneOffset);
  // console.log(browserTime);

  // const expTime = decoded.exp;
  // console.log(expTime);

  //console.log(login);

  if (!login) {
    return <Navigate to={redirectPath} replace />;
  }
  //browserTime > expTime ? <Navigate to={redirectPath} replace /> : <Outlet />;

  return <Outlet />;
};

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/income" element={<AddIncome />} />
          <Route path="/expenses" element={<AddExpenses />} />
          <Route path="/listpage" element={<ListPage />} />
          <Route path="/listexpenses" element={<ExpensesList />} />
          <Route path="/income/:id" element={<AddIncome />} />
          <Route path="/expenses/:id" element={<AddExpenses />} />
          <Route path="/monthfilter" element={<MonthExpenses />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoute;
