import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faBirthdayCake,
  faPhoneSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [option, setOption] = useState("home");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const id = localStorage.getItem("userId");
  const accountType = localStorage.getItem("accountType");
  const navigate = useNavigate();

  const toggleMenu = ()=>{
    setMenuOpen(!isMenuOpen);
  }

  const logout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("accountType");
    navigate("/");
  };

  return (
    <div>
      <div className="container-fluid px-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="bi bi-envelope fs-1 text-primary me-3"
              />
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <a
                  href="mailto:info@example.com"
                  className="text-decoration-none"
                >
                  info@example.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center ms-auto bg-primary border-inner py-3">
            <div className="navbar-brand  d-inline-flex align-items-center justify-content-center">
              <Link to="index.html" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-white">
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    className="navbar-icon fa fa-birthday-cake fs-1 text-dark me-3"
                  />
                  CakeZone
                </h1>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-secondary py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <div className="text-start2">
                <h6 className="text-uppercase mb-1">
                  <FontAwesomeIcon
                    icon={faPhoneSquare}
                    className="phone-icon  text-primary me-1"
                  />
                  Call Us
                </h6>
                <a href="tel:+012 345 6789" className="text-decoration-none">
                  +012 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <span className="navbar-brand d-block d-lg-none">
          <h1 className=" m-0 text-uppercase text-white">
            <FontAwesomeIcon
              icon={faBirthdayCake}
              className="bi birthday-cake fs-1 me-3"
            />
            CakeZone
          </h1>
        </span>
        <button
          className={`navbar-toggler ${isMenuOpen ? "collapsed" : ""}`}
          type="button"
          onClick={toggleMenu}>
            
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <div className="navbar-nav ms-auto mx-lg-auto py-0">
            <Link
              to="/"
              className={`nav-item nav-link  ${
                option === "home" ? "active" : ""
              }`}
              onClick={() => setOption("home")}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link ${
                option === "about us" ? "active" : null
              }`}
              onClick={() => setOption("about us")}
            >
              About Us
            </Link>
            <Link
              to="/cakes"
              className={`nav-item nav-link ${
                option === "cakes" ? "active" : null
              }`}
              onClick={() => setOption("cakes")}
            >
              Cakes
            </Link>
            {id && accountType === "seller" ? (
              <>
                <Link
                  to="/addcakes"
                  className={`nav-item nav-link ${
                    option === "add cake" ? "active" : null
                  }`}
                  onClick={() => setOption("add cake")}
                >
                  Add a Cake
                </Link>
              </>
            ) : null}
            {id && accountType === "seller" ? (
              <>
                <Link
                  to="/mycakes"
                  className={`nav-item nav-link ${
                    option === "my cakes" ? "active" : null
                  }`}
                  onClick={() => setOption("my cakes")}
                >
                  My Cakes
                </Link>
              </>
            ) : null}
            {id && accountType === "customer" ? (
              <>
                <Link
                  to="/customerorders"
                  className={`nav-item nav-link ${
                    option === "customer orders" ? "active" : null
                  }`}
                  onClick={() => setOption("customer orders")}
                >
                  My Orders
                </Link>
              </>
            ) : null}
            {id && accountType === "seller" ? (
              <>
                <Link
                  to="/sellerorders"
                  className={`nav-item nav-link ${
                    option === "seller orders" ? "active" : null
                  }`}
                  onClick={() => setOption("seller orders")}
                >
                  My Orders
                </Link>

                <Link
                  to="/wallet"
                  className={`nav-item nav-link ${
                    option === "wallet" ? "active" : null
                  }`}
                  onClick={() => setOption("wallet")}
                >
                  Wallet
                </Link>
              </>
            ) : null}

            {!id ? (
              <>
                <Link
                  to="/login"
                  className={`nav-item nav-link ${
                    option === "login" ? "active" : null
                  }`}
                  onClick={() => setOption("login")}
                >
                  Login
                </Link>
              </>
            ) : null}

            <Link
              to="/contact"
              className={`nav-item nav-link ${
                option === "contact us" ? "active" : null
              }`}
              onClick={() => setOption("contact us")}
            >
              <span className="contact-link">Contact Us</span>
            </Link>

            {id ? (
              <>
                <button className="btn btn-primary" onClick={logout}>
                  Log Out
                </button>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}
