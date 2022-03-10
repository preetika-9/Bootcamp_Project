import "./App.css";
import React from "react";

import { AppRoutes } from "./Routes";

// import { AddIncome } from "./components/organisms/addIncome";
// import { ListPage } from "./components/organisms/ListPage";
// import Header from "./Routes/Header/Header";
//import { Login } from "./components/organisms";

function App() {
  return (
    <>
      <AppRoutes />
      {/*  <Login />

      <AppRoutes />
      {/* <Header />

      <ListPage />
      <AddIncome /> */}
    </>
  );
}

export default App;
