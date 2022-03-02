import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
    </>
  );
}
export default Header;
