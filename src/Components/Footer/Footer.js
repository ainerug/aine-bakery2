import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';
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
        className="footer-main-container bg-img text-secondary"
        style={{ marginTop: "90px" }}
      >
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column">
              <div className="footer-center">
                <span className="navbar-brand">
                  <h1 className="footer-heading">
                    <FontAwesomeIcon
                      icon={faBirthdayCake}
                      className="birthday-icon "
                    />
                    CakeZone
                  </h1>
                </span>
                <p className="mt-3">
                At our cake shop, we specialize in creating unforgettable birthday cakes, elegant wedding cakes, and custom-made cakes for any occasion. Whether you're celebrating a milestone or just indulging in a sweet treat, our cakes are crafted to make your day extra special!
                </p>
              </div>
            </div>
            <div className="contacts-container">
              <div className="something">
                <div className="getintouch">
                  <h4 className="text-primary text-uppercase mb-4">Get In Touch</h4>
                  <div className="contact-info">
                    <FontAwesomeIcon
                      icon={faLocationPin}
                      className="contact-icon"
                    />
                    <p className="contact-text">123 Street, New York, USA</p>
                  </div>
                  <div className="contact-info">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="bi bi-envelope-open text-primary me-2"
                    />

                  <a href="mailto:info@example.com" className="emailandphone">info@example.com</a>
                  </div>
                  <div className="contact-info">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="bi bi-telephone text-primary me-2"
                    />
                    <a href="tel:+012 345 6789" className="emailandphone">+012 345 6789</a>
                  </div>
                  <div>
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
                <div className="quick-links-container">
  <h4 className="text-primary text-uppercase">Quick Links</h4>
  <div className="quick-links">
    <div className="footer-arrow-link">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow-icon"
      />
      <Link to="/" className="footer-link">Home</Link>
    </div>
    <div className="footer-arrow-link">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow-icon"
      />
      <Link to="/about" className="footer-link">About Us</Link>
    </div>
    <div className="footer-arrow-link">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow-icon"
      />
      <Link to="/cakes" className="footer-link">Cakes</Link>
    </div>
    <div className="footer-arrow-link">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow-icon"
      />
      <Link to="/signup" className="footer-link">Sign Up</Link>
    </div>
    <div className="footer-arrow-link">
      <FontAwesomeIcon
        icon={faArrowRight}
        className="arrow-icon"
      />
      <Link to="/contact" className="footer-link">Contact Us</Link>
    </div>
  </div>
</div>

                <div className="newsletter-container">
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
