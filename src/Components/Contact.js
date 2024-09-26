import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhoneVolume,
 
} from "@fortawesome/free-solid-svg-icons";



export default function Contact() {



  return (
    <div  className="contact-container" >
      <div
        className=" container-fluid contact position-relative px-5"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <FontAwesomeIcon
                  icon={faMapMarkedAlt}
                  className="location-icon fs-1 text-white me-3"
                />
                <h6 className="text-uppercase my-2">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="envelope-icon fs-1 text-white me-3"
                />
                <h6 className="text-uppercase my-2">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="bg-primary border-inner text-center text-white p-5">
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="phone-icon fs-1 text-white me-3"
                />
                <h6 className="text-uppercase my-2">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form className="contact-form">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control bg-light border-0 px-4"
                      placeholder="Subject"
                      style={{ height: "55px" }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      className="form-control bg-light border-0 px-4 py-3"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-sm-12">
                    <button
                      className="btn btn-primary border-inner w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
