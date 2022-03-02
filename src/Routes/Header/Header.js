import { AppRoutes } from "../AppRoutes";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="Login">Login</Link>
      <Link to="Register">Register</Link>
      <AppRoutes />
    </>
  );
}
export default Header;
