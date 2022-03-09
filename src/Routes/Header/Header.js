import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/listpage">ListPage</Link>
    </>
  );
}
export default Header;
