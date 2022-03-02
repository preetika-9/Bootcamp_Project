import "./App.css";

import { AppRoutes, Header } from "./Routes";
function App() {
  return (
    <div className="container">
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <h1>Welcome</h1>
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
