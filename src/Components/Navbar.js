import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBirthdayCake, faPhoneSquare,  } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

export default function Navbar() {
  const [option, setOption] = useState("home");
  const id = localStorage.getItem("userId");
  const accountType = localStorage.getItem("accountType");
  const navigate = useNavigate();

  const logout =()=>{

    localStorage.removeItem("userName");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("accountType");
    navigate('/')
  }

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
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center bg-primary border-inner py-3">
            <div className="d-inline-flex align-items-center justify-content-center">
              <Link to="index.html" className="navbar-brand">
                <h1 className="m-0 text-uppercase text-white">
                  <FontAwesomeIcon
                    icon={faBirthdayCake}
                    className="fa fa-birthday-cake fs-1 text-dark me-3"
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
                <span>+012 345 6789</span>
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
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
            {id && accountType === "seller"? <>
            
              <Link
              to="/addcakes"
              className={`nav-item nav-link ${
                option === "add cake" ? "active" : null
              }`}
              onClick={() => setOption("add cake")}
            >
              Add a Cake
            </Link>
            
            </>:null}
           {id?<>

            <Link
              to="/myorders"
              className={`nav-item nav-link ${
                option === "my orders" ? "active" : null
              }`}
              onClick={() => setOption("my orders")}
            >
              My Orders
            </Link>
           
           </>:null}
            
            {!id?<>

              <Link
              to="/login"
              className={`nav-item nav-link ${
                option === "login" ? "active" : null
              }`}
              onClick={() => setOption("login")}
            >
              Login
            </Link>
            
            
            </>:null
            }
           
            <Link
              to="/contact"
              className={`nav-item nav-link ${
                option === "contact us" ? "active" : null
              }`}
              onClick={() => setOption("contact us")}
            >
              <span className="contact-link">Contact Us</span>
            </Link>

            {id? <>
            
            <button className="btn btn-primary" onClick={logout}>Log Out</button>
            </>: null}
          </div>
        </div>
      </nav>
    </div>
  );
}
