import "./App.css";

import { AppRoutes, Header } from "./Routes";

function App() {
  return (
    <div className="container">
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <Header />
        <AppRoutes />
        {/* <Login /> */}
      </div>
    </div>
  );
}

export default App;
