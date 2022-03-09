import "./App.css";
import React from "react";


import { Login } from "./components/organisms/Login";

import { AppRoutes } from "./Routes";
import { AddIncome } from "./components/organisms/addIncome";
import { ListPage } from "./components/organisms/ListPage";
import Header from "./Routes/Header/Header";


function App() {
  return (
    <>
      <AppRoutes />
      <Header />
      <ListPage />
      <AddIncome />
    </>
  );
}

export default App;
