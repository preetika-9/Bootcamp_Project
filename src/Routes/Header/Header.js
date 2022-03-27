import React from "react";
import { Link } from "react-router-dom";

import jwt_decode from "jwt-decode";

function Header() {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  console.log(decoded.profile_picture);

  return (
    <>
      <div className="container  ">
        <div className="nav-header navbar-light  row col-12 col-lg-12 col-md-12">
          <div className="brand-name col-3 col-lg-3 col-md-3 ">
            <a className="navbar-brand fs-2 d-flex justify-content-center">
              <b>Expenses Tracker</b>
            </a>
          </div>

          <div className="navigation-bar col-7 col-lg-7 col-md-7">
            <nav className="navbar navbar-expand-lg ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link
                    to="/listpage"
                    className="nav-item nav-link active fs-4 "
                  >
                    Income List
                  </Link>
                  <Link to="/listexpenses" className="nav-item nav-link fs-4">
                    Expenses List
                  </Link>

                  <Link to="/users" className="nav-item nav-link fs-4">
                    Users List
                  </Link>
                  {/* <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a className="nav-item nav-link disabled" href="#">
              Disabled
            </a> */}
                </div>
              </div>
            </nav>
          </div>

          <div className="user-image col-2 col-lg-2 col-md-2">
            <img
              alt=""
              src={"http://localhost:3005/" + decoded.profile_picture}
              width="70"
              height="70"
              className="user-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
