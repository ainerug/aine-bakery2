import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBirthdayCake,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div>
      <div
        className="container-fluid bg-img text-secondary"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 mb-lg-n5">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary border-inner p-4">
                <span className="navbar-brand">
                  <h1 className="m-0 text-uppercase text-white">
                    <FontAwesomeIcon
                      icon={faBirthdayCake}
                      className="fa fa-birthday-cake fs-1 text-dark me-3"
                    />
                    CakeZone
                  </h1>
                </span>
                <p className="mt-3">
                At our cake shop, we specialize in creating unforgettable birthday cakes, elegant wedding cakes, and custom-made cakes for any occasion. Whether you're celebrating a milestone or just indulging in a sweet treat, our cakes are crafted to make your day extra special!
                </p>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">Get In Touch</h4>
                  <div className="d-flex mb-2">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="bi bi-geo-alt text-primary me-2"
                    />
                    <p className="mb-0">123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex mb-2">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="bi bi-envelope-open text-primary me-2"
                    />

                    <p className="mb-0">info@example.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="bi bi-telephone text-primary me-2"
                    />
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                  <div className="d-flex mt-4">
                    <span className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="fab fa-twitter fw-normal social-media-icons"
                      />
                    </span>
                    <span className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="fab fa-facebook-f fw-normal social-media-icons"
                      />
                    </span>
                    <span className="btn btn-lg btn-primary btn-lg-square border-inner rounded-0 me-2">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="fab fa-linkedin-in fw-normal social-media-icons"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">Quick Links</h4>
                  <div className="d-flex flex-column justify-content-start">
                    <Link to="/" className="text-secondary mb-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="bi bi-arrow-right text-primary me-2"
                      />
                      Home
                    </Link>
                    <Link to="/about" className="text-secondary mb-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="bi bi-arrow-right text-primary me-2"
                      />
                      About Us
                    </Link>
                    <Link to="/cakes" className="text-secondary mb-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="bi bi-arrow-right text-primary me-2"
                      />
                      Cakes
                    </Link>
                    <Link to="/signup" className="text-secondary mb-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="bi bi-arrow-right text-primary me-2"
                      />
                      Sign Up
                    </Link>
                    <Link to="/contact" className="text-secondary mb-2">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="bi bi-arrow-right text-primary me-2"
                      />
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <h4 className="text-primary text-uppercase mb-4">Newsletter</h4>
                  <p>
                  Sign up now for our sweet cake shop news and special offers today!
                  </p>
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border-white p-3"
                        placeholder="Your Email"
                      />
                      <button className="btn btn-primary">Sign Up</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-secondary py-4"
        style={{ background: "#111111" }}
      >
        <div className="container text-center">
          <p className="mb-0">
            &copy;
            <span className="text-white border-bottom" >
              Your Site Name
            </span >
            . All Rights Reserved.
            {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
            Designed by
            <span className="text-white border-bottom">
              HTML Codex
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
