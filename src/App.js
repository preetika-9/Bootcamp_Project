import "./App.css";
import { Register } from "./components/organisms";
import { AddIncome } from "./components/organisms/addIncome";
import { ListPage } from "./components/organisms/ListPage";

import { AppRoutes, Header } from "./Routes";
function App() {
  return (
    <>
      <Header />
      {/* <ListPage /> */}
      <AddIncome />
    </>
  );
}

export default App;
